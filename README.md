# PerTracker - Personal Academic & Quant Dashboard 🚀

A comprehensive, beautifully designed task-managing dashboard built with React and Vite. It is engineered to track daily study goals, manage academic and technical subjects, generate automated study plans, and provide detailed curriculum roadmaps for software engineering and quantitative finance.

## 🌟 Key Features

* **Daily Target Tracking:** Set minute-by-minute study goals and track your completion status (Minimum Day, Good, Excellent) with a dynamic progress bar and visual Daily Score.
* **Automated Planning:** Select a subject, date range, and daily target, and the app automatically generates scheduled tasks for each day.
* **Weekly Timetable:** Configure your recurring college classes or commitments. Class durations are accurately isolated from self-study targets.
* **Weekly Review:** Automatically aggregates your study hours, outputs, and performance metrics over a rolling 7-day window. Keep notes on your biggest achievements and bottlenecks. Automatically identifies your "Most Active Subject".
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
* **Backend:** Node.js, Express
* **Database:** Neon Serverless Postgres
* **Authentication:** Better Auth / JWT
* **Styling:** Vanilla CSS (Glassmorphism, CSS Grid, Flexbox)
* **Icons:** Lucide React

## 🚀 Getting Started

### Prerequisites
* Node.js installed on your machine.
* A [Neon](https://neon.tech/) account for the Serverless Postgres database.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rupamkgp/tracker-2.O.git
   ```
2. Navigate to the project directory:
   ```bash
   cd "PerTracker 2.O"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables. Create a `.env` file in the root directory and add your Neon database connection string and API URL:
   ```env
   DATABASE_URL="postgres://user:password@ep-icy-mountain-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"
   VITE_API_URL="http://localhost:3000"
   ```
5. Start the Express backend server (in one terminal):
   ```bash
   node server/index.js
   ```
6. Start the Vite frontend development server (in another terminal):
   ```bash
   npm run dev
   ```

## 🎨 Design Philosophy
The UI relies heavily on modern glassmorphism aesthetics, utilizing deep space/dark-mode color palettes with vibrant indigo, emerald, and pink accents. The application features a collapsible sidebar for maximum screen real estate and is fully responsive, ensuring seamless usability across desktop, tablet, and mobile devices.
