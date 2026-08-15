import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const sql = neon(process.env.DATABASE_URL);

async function setup() {
  console.log('Setting up Multi-Tenant Neon database schema with RLS...');

  try {
    // Drop existing tables for a clean slate
    await sql`DROP TABLE IF EXISTS weekly_timetable, weekly_reviews, study_plans, daily_records, subjects, categories, profiles CASCADE;`;

    // 1. Profiles Table
    await sql`
      CREATE TABLE profiles (
        id VARCHAR PRIMARY KEY, -- Matches Neon Auth User ID
        email VARCHAR(255),
        timezone VARCHAR(100),
        language VARCHAR(50),
        preferences JSONB DEFAULT '{}',
        onboarding_completed BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
    await sql`ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;`;
    await sql`CREATE POLICY "Users can manage their own profile" ON profiles FOR ALL USING (id = current_setting('app.current_user_id', true));`;
    console.log('✅ Created profiles table & RLS');

    // 1.5. User Goals
    await sql`
      CREATE TABLE user_goals (
        id VARCHAR PRIMARY KEY,
        user_id VARCHAR NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
        title VARCHAR NOT NULL,
        category VARCHAR,
        target_date DATE,
        priority VARCHAR(20),
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
    await sql`ALTER TABLE user_goals ENABLE ROW LEVEL SECURITY;`;
    await sql`CREATE POLICY "Users can manage their own goals" ON user_goals FOR ALL USING (user_id = current_setting('app.current_user_id', true));`;
    console.log('✅ Created user_goals table & RLS');

    // 2. Categories
    await sql`
      CREATE TABLE categories (
        id VARCHAR PRIMARY KEY,
        user_id VARCHAR NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
        title VARCHAR NOT NULL,
        category VARCHAR,
        default_type VARCHAR
      );
    `;
    await sql`ALTER TABLE categories ENABLE ROW LEVEL SECURITY;`;
    await sql`CREATE POLICY "Users can manage their own categories" ON categories FOR ALL USING (user_id = current_setting('app.current_user_id', true));`;
    console.log('✅ Created categories table & RLS');

    // 3. Subjects
    await sql`
      CREATE TABLE subjects (
        id VARCHAR PRIMARY KEY,
        user_id VARCHAR NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
        name VARCHAR NOT NULL,
        type VARCHAR,
        category VARCHAR,
        progress INTEGER DEFAULT 0,
        current_topic VARCHAR
      );
    `;
    await sql`ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;`;
    await sql`CREATE POLICY "Users can manage their own subjects" ON subjects FOR ALL USING (user_id = current_setting('app.current_user_id', true));`;
    console.log('✅ Created subjects table & RLS');

    // 4. Daily Records
    await sql`
      CREATE TABLE daily_records (
        date VARCHAR NOT NULL,
        user_id VARCHAR NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
        day_name VARCHAR,
        classes JSONB,
        tasks JSONB,
        PRIMARY KEY (date, user_id)
      );
    `;
    await sql`ALTER TABLE daily_records ENABLE ROW LEVEL SECURITY;`;
    await sql`CREATE POLICY "Users can manage their own daily_records" ON daily_records FOR ALL USING (user_id = current_setting('app.current_user_id', true));`;
    console.log('✅ Created daily_records table & RLS');

    // 5. Study Plans
    await sql`
      CREATE TABLE study_plans (
        id VARCHAR PRIMARY KEY,
        user_id VARCHAR NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
        subject_id VARCHAR,
        start_date VARCHAR,
        end_date VARCHAR,
        target_minutes INTEGER,
        is_active BOOLEAN DEFAULT true
      );
    `;
    await sql`ALTER TABLE study_plans ENABLE ROW LEVEL SECURITY;`;
    await sql`CREATE POLICY "Users can manage their own study_plans" ON study_plans FOR ALL USING (user_id = current_setting('app.current_user_id', true));`;
    console.log('✅ Created study_plans table & RLS');

    // 6. Weekly Reviews
    await sql`
      CREATE TABLE weekly_reviews (
        week_start_date VARCHAR NOT NULL,
        user_id VARCHAR NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
        best_achievement TEXT,
        biggest_problem TEXT,
        next_priority TEXT,
        PRIMARY KEY (week_start_date, user_id)
      );
    `;
    await sql`ALTER TABLE weekly_reviews ENABLE ROW LEVEL SECURITY;`;
    await sql`CREATE POLICY "Users can manage their own weekly_reviews" ON weekly_reviews FOR ALL USING (user_id = current_setting('app.current_user_id', true));`;
    console.log('✅ Created weekly_reviews table & RLS');

    // 7. Weekly Timetable
    await sql`
      CREATE TABLE weekly_timetable (
        day_name VARCHAR NOT NULL,
        user_id VARCHAR NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
        classes JSONB,
        PRIMARY KEY (day_name, user_id)
      );
    `;
    await sql`ALTER TABLE weekly_timetable ENABLE ROW LEVEL SECURITY;`;
    await sql`CREATE POLICY "Users can manage their own weekly_timetable" ON weekly_timetable FOR ALL USING (user_id = current_setting('app.current_user_id', true));`;
    console.log('✅ Created weekly_timetable table & RLS');

    console.log('🎉 Multi-Tenant RLS Setup complete!');
  } catch (err) {
    console.error('❌ Setup failed:', err);
  }
}

setup();
