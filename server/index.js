import express from 'express';
import cors from 'cors';
import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import * as jose from 'jose';

try {
  dotenv.config();
} catch (e) {
  // Ignore dotenv errors on production
}
const app = express();
app.use(cors());
app.use(express.json());

// Auth Middleware: Verify session token and extract user_id
const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid Authorization header' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const sql = neon(process.env.DATABASE_URL);
    // Query neon_auth.session directly since Better Auth uses opaque session tokens
    const sessions = await sql`SELECT "userId" FROM neon_auth.session WHERE token = ${token} AND "expiresAt" > NOW() LIMIT 1`;
    
    if (sessions.length === 0) {
      throw new Error('Session not found or expired');
    }
    
    req.user_id = sessions[0].userId;
    next();
  } catch (err) {
    console.error("Session Verification failed:", err);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Apply auth middleware to all /api routes
app.use('/api', requireAuth);

// Helper function to execute queries with RLS context bound
const queryWithRLS = async (userId, queryFn) => {
  const sql = neon(process.env.DATABASE_URL);
  
  const queries = [];
  const tx = (strings, ...values) => {
    queries.push(sql(strings, ...values));
  };
  
  // Set the role and current_user_id for this specific transaction scope
  queries.push(sql`SET LOCAL ROLE authenticated`);
  queries.push(sql`SELECT set_config('app.current_user_id', ${userId}, true)`);
  
  // Let the handler build the queries
  await queryFn(tx);
  
  // Execute the batch
  const results = await sql.transaction(queries);
  
  // The query results start at index 2 (after SET LOCAL ROLE and set_config)
  return results.length > 2 ? results[2] : results;
};


// ========== PROFILES ==========
app.post('/api/profiles/sync', async (req, res) => {
  const { email } = req.body;
  try {
    // We cannot use queryWithRLS here easily because we need to read the result back immediately.
    // However, for this specific INSERT + SELECT on the profile, we can use a single array transaction
    // and extract the final result.
    const sql = neon(process.env.DATABASE_URL);
    const results = await sql.transaction([
      sql`SET LOCAL ROLE authenticated`,
      sql`SELECT set_config('app.current_user_id', ${req.user_id}, true)`,
      sql`
        INSERT INTO profiles (id, email)
        VALUES (${req.user_id}, ${email})
        ON CONFLICT (id) DO NOTHING
      `,
      sql`SELECT * FROM profiles WHERE id = ${req.user_id}`
    ]);
    
    // The SELECT query is the 4th item in the batch (index 3)
    const profileRecords = results[3];
    
    res.json({ profile: profileRecords[0] });
  } catch (error) {
    console.error("Profile sync error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/profiles/onboarding', async (req, res) => {
  const { timezone, language, preferences } = req.body;
  try {
    await queryWithRLS(req.user_id, async (tx) => {
      await tx`
        UPDATE profiles 
        SET timezone = ${timezone},
            language = ${language},
            preferences = ${JSON.stringify(preferences)},
            onboarding_completed = TRUE
        WHERE id = ${req.user_id}
      `;
    });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

// ========== GOALS ==========
app.get('/api/goals', async (req, res) => {
  try {
    const data = await queryWithRLS(req.user_id, (tx) => tx`SELECT * FROM user_goals ORDER BY target_date ASC`);
    res.json({ data });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.post('/api/goals', async (req, res) => {
  const { id, title, category, target_date, priority } = req.body;
  try {
    await queryWithRLS(req.user_id, async (tx) => {
      await tx`
        INSERT INTO user_goals (id, user_id, title, category, target_date, priority)
        VALUES (${id}, ${req.user_id}, ${title}, ${category}, ${target_date || null}, ${priority || 'Medium'})
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          category = EXCLUDED.category,
          target_date = EXCLUDED.target_date,
          priority = EXCLUDED.priority
      `;
    });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.delete('/api/goals/:id', async (req, res) => {
  try {
    await queryWithRLS(req.user_id, (tx) => tx`DELETE FROM user_goals WHERE id = ${req.params.id}`);
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});


// ========== CATEGORIES ==========
app.get('/api/categories', async (req, res) => {
  try {
    const data = await queryWithRLS(req.user_id, (tx) => tx`SELECT * FROM categories`);
    res.json({ data });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.post('/api/categories', async (req, res) => {
  const { id, title, category, default_type } = req.body;
  try {
    await queryWithRLS(req.user_id, async (tx) => {
      await tx`
        INSERT INTO categories (id, user_id, title, category, default_type)
        VALUES (${id}, ${req.user_id}, ${title}, ${category}, ${default_type})
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          category = EXCLUDED.category,
          default_type = EXCLUDED.default_type
      `;
    });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.delete('/api/categories/:id', async (req, res) => {
  try {
    await queryWithRLS(req.user_id, (tx) => tx`DELETE FROM categories WHERE id = ${req.params.id}`);
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});


// ========== SUBJECTS ==========
app.get('/api/subjects', async (req, res) => {
  try {
    const data = await queryWithRLS(req.user_id, (tx) => tx`SELECT * FROM subjects`);
    res.json({ data });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.post('/api/subjects', async (req, res) => {
  const { id, name, type, category, progress, current_topic } = req.body;
  try {
    await queryWithRLS(req.user_id, async (tx) => {
      await tx`
        INSERT INTO subjects (id, user_id, name, type, category, progress, current_topic)
        VALUES (${id}, ${req.user_id}, ${name}, ${type}, ${category}, ${progress || 0}, ${current_topic || ''})
        ON CONFLICT (id) DO UPDATE SET
          name = COALESCE(EXCLUDED.name, subjects.name),
          type = COALESCE(EXCLUDED.type, subjects.type),
          category = COALESCE(EXCLUDED.category, subjects.category),
          progress = COALESCE(EXCLUDED.progress, subjects.progress),
          current_topic = COALESCE(EXCLUDED.current_topic, subjects.current_topic)
      `;
    });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.patch('/api/subjects/:id', async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  
  try {
    await queryWithRLS(req.user_id, async (tx) => {
      if (updates.name !== undefined) await tx`UPDATE subjects SET name = ${updates.name} WHERE id = ${id}`;
      if (updates.type !== undefined) await tx`UPDATE subjects SET type = ${updates.type} WHERE id = ${id}`;
      if (updates.category !== undefined) await tx`UPDATE subjects SET category = ${updates.category} WHERE id = ${id}`;
      if (updates.progress !== undefined) await tx`UPDATE subjects SET progress = ${updates.progress} WHERE id = ${id}`;
      if (updates.current_topic !== undefined) await tx`UPDATE subjects SET current_topic = ${updates.current_topic} WHERE id = ${id}`;
    });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.delete('/api/subjects/:id', async (req, res) => {
  try {
    await queryWithRLS(req.user_id, (tx) => tx`DELETE FROM subjects WHERE id = ${req.params.id}`);
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});


// ========== DAILY RECORDS ==========
app.get('/api/daily_records', async (req, res) => {
  try {
    const data = await queryWithRLS(req.user_id, (tx) => tx`SELECT * FROM daily_records`);
    res.json({ data });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.post('/api/daily_records', async (req, res) => {
  const { date, day_name, classes, tasks } = req.body;
  try {
    await queryWithRLS(req.user_id, async (tx) => {
      await tx`
        INSERT INTO daily_records (date, user_id, day_name, classes, tasks)
        VALUES (${date}, ${req.user_id}, ${day_name}, ${JSON.stringify(classes)}, ${JSON.stringify(tasks)})
        ON CONFLICT (date, user_id) DO UPDATE SET
          day_name = EXCLUDED.day_name,
          classes = EXCLUDED.classes,
          tasks = EXCLUDED.tasks
      `;
    });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});


// ========== STUDY PLANS ==========
app.get('/api/study_plans', async (req, res) => {
  try {
    const data = await queryWithRLS(req.user_id, (tx) => tx`SELECT * FROM study_plans`);
    res.json({ data });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.post('/api/study_plans', async (req, res) => {
  const { id, subject_id, start_date, end_date, target_minutes, is_active } = req.body;
  try {
    await queryWithRLS(req.user_id, async (tx) => {
      await tx`
        INSERT INTO study_plans (id, user_id, subject_id, start_date, end_date, target_minutes, is_active)
        VALUES (${id}, ${req.user_id}, ${subject_id}, ${start_date}, ${end_date}, ${target_minutes}, ${is_active})
      `;
    });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.patch('/api/study_plans/:id', async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    await queryWithRLS(req.user_id, async (tx) => {
      if (updates.subject_id !== undefined) await tx`UPDATE study_plans SET subject_id = ${updates.subject_id} WHERE id = ${id}`;
      if (updates.start_date !== undefined) await tx`UPDATE study_plans SET start_date = ${updates.start_date} WHERE id = ${id}`;
      if (updates.end_date !== undefined) await tx`UPDATE study_plans SET end_date = ${updates.end_date} WHERE id = ${id}`;
      if (updates.target_minutes !== undefined) await tx`UPDATE study_plans SET target_minutes = ${updates.target_minutes} WHERE id = ${id}`;
      if (updates.is_active !== undefined) await tx`UPDATE study_plans SET is_active = ${updates.is_active} WHERE id = ${id}`;
    });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.delete('/api/study_plans/:id', async (req, res) => {
  try {
    await queryWithRLS(req.user_id, (tx) => tx`DELETE FROM study_plans WHERE id = ${req.params.id}`);
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});


// ========== WEEKLY REVIEWS ==========
app.get('/api/weekly_reviews', async (req, res) => {
  try {
    const data = await queryWithRLS(req.user_id, (tx) => tx`SELECT * FROM weekly_reviews`);
    res.json({ data });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.post('/api/weekly_reviews', async (req, res) => {
  const { week_start_date, best_achievement, biggest_problem, next_priority } = req.body;
  try {
    await queryWithRLS(req.user_id, async (tx) => {
      await tx`
        INSERT INTO weekly_reviews (week_start_date, user_id, best_achievement, biggest_problem, next_priority)
        VALUES (${week_start_date}, ${req.user_id}, ${best_achievement}, ${biggest_problem}, ${next_priority})
        ON CONFLICT (week_start_date, user_id) DO UPDATE SET
          best_achievement = EXCLUDED.best_achievement,
          biggest_problem = EXCLUDED.biggest_problem,
          next_priority = EXCLUDED.next_priority
      `;
    });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});


// ========== WEEKLY TIMETABLE ==========
app.get('/api/weekly_timetable', async (req, res) => {
  try {
    const data = await queryWithRLS(req.user_id, (tx) => tx`SELECT * FROM weekly_timetable`);
    res.json({ data });
  } catch (error) { res.status(500).json({ error: error.message }); }
});

app.post('/api/weekly_timetable', async (req, res) => {
  const { day_name, classes } = req.body;
  try {
    await queryWithRLS(req.user_id, async (tx) => {
      await tx`
        INSERT INTO weekly_timetable (day_name, user_id, classes)
        VALUES (${day_name}, ${req.user_id}, ${JSON.stringify(classes)})
        ON CONFLICT (day_name, user_id) DO UPDATE SET
          classes = EXCLUDED.classes
      `;
    });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
});


const PORT = process.env.PORT || 3001;
if (!process.env.NETLIFY) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
