import React from 'react';
import { ArrowLeft } from 'lucide-react';

const WebDevSyllabus = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button 
          onClick={() => setCurrentPage('goals')}
          style={{ background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '50%', color: 'var(--text-primary)', border: 'none', cursor: 'pointer' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="page-title">Web Development Syllabus</h1>
          <p className="page-subtitle">Full-Stack roadmap: from Internet Fundamentals to Advanced Architecture.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '32px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        
        <h2 style={{ color: 'var(--text-primary)', marginTop: '0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>0. Prerequisites & Tools</h2>
        <ul>
          <li><strong>Programming Basics:</strong> Variables, Loops, Functions, Arrays, OOP, Debugging</li>
          <li><strong>Tools:</strong> VS Code, Terminal, Git, GitHub, npm, Browser DevTools</li>
          <li><strong>Recommended Stack:</strong> HTML, CSS, JavaScript, TypeScript (Frontend & Backend with Node.js)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>1. Internet & Web Fundamentals</h2>
        <ul>
          <li><strong>Internet Basics:</strong> Client-server architecture, IP, MAC, DNS, Hosting, Proxies, Firewalls</li>
          <li><strong>HTTP/HTTPS:</strong> Request/Response, Methods (GET, POST, PUT, DELETE), Status codes, Headers, Cookies, Sessions, Caching, TLS/SSL</li>
          <li><strong>Architecture:</strong> Static/Dynamic websites, SSR, CSR, SPA, MPA, REST APIs</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>2-3. HTML & CSS</h2>
        <ul>
          <li><strong>HTML:</strong> Semantic tags, Forms, Tables, Multimedia, Accessibility (ARIA), SEO basics</li>
          <li><strong>CSS Fundamentals:</strong> Selectors, Specificity, Box Model, Display, Positioning, Typography</li>
          <li><strong>Layouts & Responsive:</strong> Flexbox, CSS Grid, Media queries, Mobile-first design</li>
          <li><strong>Advanced CSS & Frameworks:</strong> Animations, Variables, Tailwind CSS, Bootstrap</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>4-5. JavaScript & TypeScript</h2>
        <ul>
          <li><strong>JS Core:</strong> Variables, Scope, Hoisting, Event Loop, Closures, `this`, DOM Manipulation</li>
          <li><strong>Data & Arrays:</strong> Objects, Maps, Sets, Map/Filter/Reduce, Destructuring, Spread syntax</li>
          <li><strong>Async JS:</strong> Callbacks, Promises, async/await, Fetch API</li>
          <li><strong>TypeScript:</strong> Type inference, Interfaces, Generics, Union types, Utility types (Partial, Pick, Omit)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>6. Frontend Development (React & Next.js)</h2>
        <ul>
          <li><strong>React Fundamentals:</strong> Components, JSX, Props, State, Hooks (useState, useEffect, useContext, useMemo)</li>
          <li><strong>Advanced React:</strong> Routing, State Management (Redux/Zustand), API Integration, Performance optimization</li>
          <li><strong>Next.js:</strong> App Router, SSR, SSG, API routes, Server/Client components, Image optimization</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>7-9. Backend & Databases</h2>
        <ul>
          <li><strong>Node.js & Express:</strong> Event-driven architecture, Event loop, Modules, Routing, Middleware, REST APIs</li>
          <li><strong>SQL (PostgreSQL):</strong> Tables, Joins, Subqueries, CTEs, Aggregations, Normalization, ACID, Indexes</li>
          <li><strong>NoSQL (MongoDB):</strong> Documents, Collections, CRUD, Mongoose ODM, Aggregation pipeline</li>
          <li><strong>Redis:</strong> Key-value storage, Caching, Pub/Sub, Rate limiting</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>10. Authentication & Security</h2>
        <ul>
          <li><strong>Authentication:</strong> Sessions, JWT, OAuth, Passwords (Hashing/Salting)</li>
          <li><strong>Security:</strong> XSS, CSRF, SQL Injection, CORS, Rate limiting, HTTPS, Secrets management</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>11-14. APIs, Testing, Git & DevOps</h2>
        <ul>
          <li><strong>Real-Time Web:</strong> WebSockets, Socket.IO (Chat, Notifications)</li>
          <li><strong>Testing:</strong> Unit (Jest/Vitest), Integration, E2E (Playwright/Cypress)</li>
          <li><strong>DevOps & Deployment:</strong> Docker, CI/CD (GitHub Actions), Nginx, Linux basics, Vercel/Render deployments</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>15-20. Cloud, Performance, & Architecture</h2>
        <ul>
          <li><strong>Cloud (AWS):</strong> EC2, S3, RDS, DynamoDB, VPC, CloudFront</li>
          <li><strong>Web Performance:</strong> Code splitting, Lazy loading, Core Web Vitals, Database indexing, Caching</li>
          <li><strong>Advanced Architecture:</strong> Microservices, Message Queues, Horizontal scaling, Load balancing, Event-driven systems</li>
        </ul>

        <div style={{ padding: '24px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', marginTop: '32px', borderLeft: '4px solid var(--accent-primary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}>Project Roadmap (SDE Focus)</h3>
          <p style={{ margin: 0 }}>
            Don't learn web development only through tutorials. Build progressively. For an SDE internship, prioritize 3-4 serious projects over 15 tiny ones.
          </p>
          <ul style={{ marginTop: '12px', marginBottom: 0 }}>
            <li><strong>Project 1: Full-Stack E-commerce</strong> (Auth, catalog, cart, payments, admin panel)</li>
            <li><strong>Project 2: Job Portal</strong> (Student/recruiter accounts, resume upload, application tracking)</li>
            <li><strong>Project 3: Real-Time Collaboration</strong> (Workspaces, WebSockets, presence, permissions)</li>
            <li><strong>Project 4: AI-Powered App</strong> (Next.js + Node API + Python ML service + Postgres)</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default WebDevSyllabus;
