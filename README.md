<div align="center">

# 📚 StudyTracker

**Personal Academic Tracking Dashboard**<br>
**Daily Targets, Class Schedules, Automated Plans, and Weekly Reviews**

A beautifully designed, feature-rich task-managing dashboard engineered to optimize your academic workflow, organize your curriculum, and keep you accountable to your long-term goals.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-purple)](https://vitejs.dev/)
[![Neon](https://img.shields.io/badge/Neon-Serverless_Postgres-00e599)](https://neon.tech/)

</div>

---

This repository hosts **StudyTracker**, a comprehensive productivity dashboard built with React and Vite. It is engineered to track daily study goals, manage academic and technical subjects, generate automated study plans, and provide detailed curriculum roadmaps. We focus heavily on a beautiful, distraction-free aesthetic (glassmorphism) combined with robust state management to facilitate a highly productive study routine.

Whether you are a Computer Science student balancing college classes with Competitive Programming, or a self-taught engineer navigating Web Development and System Design roadmaps, StudyTracker gives you the analytics and planning tools to stay on track.

## 📰 News!

- **[08/26]** `v2.0.0` Migrated backend to **Neon Serverless Postgres** and **Express.js**.
- **[08/26]** Completely redesigned the **Class Timetable** logic to isolate class durations from self-study goals!
- **[08/26]** Added a sleek, collapsible sidebar to maximize focus and screen real estate on desktop.
- **[08/26]** Upgraded the **Weekly Review** algorithm to accurately calculate the "Most Active Subject" over a rolling 7-day window.

---

## 🌟 Comprehensive Feature Set

### 1. 🎯 Daily Target Tracking (Dashboard)
The core of StudyTracker is the **Today Dashboard**. 
- **Minute-by-Minute Goals:** Set specific time targets for your self-study sessions (e.g., `2h 30m`). 
- **Dynamic Progress Bar:** Watch your progress bar fill up in real-time as you complete tasks.
- **Daily Score:** Earn a score out of 100 based on your completion percentage.
- **Status Indicators:** Receive dynamic feedback (e.g., "Keep Going", "Good", "Excellent") based on your performance.

### 2. 📅 Automated Planning Engine
Stop worrying about what to study each day. 
- **Plan Generation:** Select a subject, pick a date range, and define a daily target (in minutes). The application will automatically inject tasks into your daily dashboard for the duration of the plan.
- **Active Plan Management:** View all currently running automated plans, adjust their end dates, or cancel them directly from the Planning interface.

### 3. 🏫 Intelligent Class Timetable
Manage your college or recurring schedule alongside your independent study.
- **Weekly Grid:** Easily add and remove classes for Monday through Sunday.
- **Automatic Task Generation:** When you have a class scheduled for the day, the dashboard automatically generates a "Lecture Revision" or "Problems" task to ensure you review your material.
- **Goal Isolation:** Crucially, the duration of your mandatory classes is explicitly isolated from your personal Study Goal, ensuring your self-study analytics remain pristine.

### 4. 📊 Weekly Analytics & Review
Data-driven insights to help you reflect on your week.
- **Rolling 7-Day Window:** Automatically aggregates your study hours, outputs, and performance metrics over the past 7 days.
- **Most Active Subject Algorithm:** Automatically calculates which subject you completed the most tasks for.
- **Category Breakdown:** See exactly how your time was distributed between Academic, Technical, Reading, and Review categories.
- **Journaling:** Keep persistent notes on your "Best Achievement" and "Biggest Problem" for the week to track personal growth over time.

### 5. 📚 Subject Database & Organization
Organize your curriculum exactly how you want it.
- **Custom Categories:** Group subjects into categories like *Academic*, *Technical*, or *Reading*.
- **Task Association:** Every task and automated plan is intrinsically linked to a subject, allowing for granular tracking and filtering.

### 6. 🗺️ Interactive Roadmaps
Fully documented syllabuses integrated directly into the platform so you never lose sight of the bigger picture.
- **DSA (Data Structures & Algorithms)**
- **CS Fundamentals (OS, DBMS, Networks)**
- **System Design**
- **Competitive Programming**
- **Web Development**
- **AI Engineering**
- **Quant Trading**

---

## 🛠️ Tech Stack & Architecture

StudyTracker is built on a modern, serverless architecture designed for speed, scalability, and developer experience.

* **Frontend:** 
  * **React 19 & Vite:** For lightning-fast Hot Module Replacement (HMR) and optimized production builds.
  * **Vanilla CSS:** Custom glassmorphism, CSS Grid, and Flexbox implementation—no heavy CSS frameworks required.
  * **Lucide React:** Clean, beautiful SVG iconography.
* **Backend:** 
  * **Node.js & Express:** A lightweight, robust API layer handling authentication and database routing.
* **Database:** 
  * **Neon Serverless Postgres:** Utilizing `@neondatabase/serverless` for edge-compatible, scale-to-zero database performance.
* **Authentication:** 
  * **Better Auth / JWT:** Secure, token-based authentication to keep your data private.

---

## 🚀 Getting Started

Follow these instructions to get a local copy of StudyTracker up and running on your machine.

### Prerequisites
* Node.js (v18 or higher recommended) installed on your machine.
* A [Neon](https://neon.tech/) account for provisioning a free Serverless Postgres database.

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rupamkgp/tracker-2.O.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd "PerTracker 2.O"
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Configure Environment Variables:** 
   Create a `.env` file in the root directory. You will need to grab your database connection string from your Neon dashboard.
   ```env
   DATABASE_URL="postgres://user:password@ep-icy-mountain-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"
   VITE_API_URL="http://localhost:3000"
   ```
5. **Start the Express backend server:** 
   Open a terminal window and run:
   ```bash
   node server/index.js
   ```
6. **Start the Vite frontend server:** 
   Open a second terminal window and run:
   ```bash
   npm run dev
   ```
7. Open your browser and navigate to `http://localhost:5173` to see the dashboard!

---

## 🎨 Design Philosophy

We believe that the tools you use every day should be beautiful. The UI relies heavily on modern **glassmorphism aesthetics**, utilizing deep space/dark-mode color palettes contrasted with vibrant indigo, emerald, and pink accents. 

- **Collapsible Layouts:** The application features a fully collapsible sidebar, giving you back valuable screen real estate when you need to focus.
- **Micro-interactions:** Buttons and panels feature smooth hover states and transitions to make the dashboard feel alive and responsive.
- **Fully Responsive:** Whether you are planning your week on a 27-inch monitor or checking off a task on your iPhone, the dashboard gracefully adapts via fluid CSS Grid and Flexbox layouts.

---

<div align="center">
  <i>Built to help you achieve your goals, one task at a time.</i>
</div>
