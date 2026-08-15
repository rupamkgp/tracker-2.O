# PerTracker - Personal Academic & Quant Dashboard 🚀

**Live Demo:** [https://my-personaltracker.netlify.app/](https://my-personaltracker.netlify.app/)

A comprehensive, beautifully designed task-managing dashboard built with React and Vite. It is engineered to track daily study goals, manage academic and technical subjects, generate automated study plans, and provide detailed curriculum roadmaps for software engineering and quantitative finance.

## 🌟 Key Features

* **Daily Target Tracking:** Set minute-by-minute study goals and track your completion status (Minimum Day, Good, Excellent) with a dynamic progress bar and visual Daily Score.
* **Automated Planning:** Select a subject, date range, and daily target, and the app automatically generates scheduled tasks for each day.
* **Weekly Timetable:** Configure your recurring college classes or commitments.
* **Weekly Review:** Automatically aggregates your study hours, outputs, and performance metrics over a rolling 7-day window. Keep notes on your biggest achievements and bottlenecks.
* **Subject Database:** Organize your subjects into custom categories (e.g., Programming, General, Core).
* **Comprehensive Roadmaps:** Fully documented, interactive syllabuses integrated directly into the platform:
  * DSA (Data Structures & Algorithms)
  * CS Fundamentals (OS, DBMS, Networks)
  * System Design
  * Competitive Programming
  * Web Development
  * AI Engineering
  * Quant Trading

## 🛠️ Tech Stack

* **Frontend:** React, Vite
* **Styling:** Vanilla CSS (Glassmorphism, CSS Grid, Flexbox)
* **Icons:** Lucide React
* **Backend / Database:** Supabase (PostgreSQL)

## 🚀 Getting Started

### Prerequisites
* Node.js installed on your machine.
* A Supabase account and project for database integration.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rupamkgp/my-personal-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my-personal-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## 🎨 Design Philosophy
The UI relies heavily on modern glassmorphism aesthetics, utilizing deep space/dark-mode color palettes with vibrant indigo, emerald, and pink accents. The application is completely responsive, ensuring seamless usability across desktop, tablet, and mobile devices.
