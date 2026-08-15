import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const sql = neon(process.env.DATABASE_URL);

async function migrate() {
  console.log('Running database migration for onboarding features...');

  try {
    // 1. Alter profiles table
    console.log('Adding new columns to profiles table...');
    await sql`
      ALTER TABLE profiles 
      ADD COLUMN IF NOT EXISTS timezone VARCHAR(100),
      ADD COLUMN IF NOT EXISTS language VARCHAR(50),
      ADD COLUMN IF NOT EXISTS preferences JSONB DEFAULT '{}',
      ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT FALSE;
    `;
    console.log('✅ Profiles table updated');

    // 2. Create user_goals table
    console.log('Creating user_goals table...');
    await sql`
      CREATE TABLE IF NOT EXISTS user_goals (
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
    
    // We need to gracefully handle if policy already exists
    try {
      await sql`CREATE POLICY "Users can manage their own goals" ON user_goals FOR ALL USING (user_id = current_setting('app.current_user_id', true));`;
    } catch (err) {
      if (err.message.includes('already exists')) {
        console.log('Policy already exists, skipping...');
      } else {
        throw err;
      }
    }
    
    console.log('✅ Created user_goals table & RLS');
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrate();
