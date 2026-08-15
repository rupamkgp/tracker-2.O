import React from 'react';
import { Calendar, BookOpen, Activity, BarChart2, Target, CalendarDays, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const { logout } = useAuth();
  
  const navItems = [
    { id: 'today', label: 'TODAY', icon: Calendar },
    { id: 'planning', label: 'PLANNING', icon: Activity },
    { id: 'timetable', label: 'CLASS SCHEDULE', icon: CalendarDays },
    { id: 'subjects', label: 'SUBJECTS', icon: BookOpen },
    { id: 'weekly', label: 'WEEKLY REVIEW', icon: BarChart2 },
    { id: 'goals', label: 'LONG-TERM GOALS', icon: Target },
    { id: 'settings', label: 'SETTINGS', icon: Settings },
  ];

  return (
    <div className="sidebar" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ padding: '16px 8px', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '1px', background: 'linear-gradient(to right, #6366f1, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          TASK MANAGING DASHBOARD
        </h1>
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, overflowY: 'auto' }}>
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '8px',
                background: isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: isActive ? 600 : 500,
                textAlign: 'left',
                border: isActive ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid transparent',
              }}
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>
      
      <div style={{ marginTop: 'auto', padding: '16px 8px' }}>
        <button
          onClick={logout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: '8px',
            background: 'transparent',
            color: '#ef4444',
            fontWeight: 500,
            textAlign: 'left',
            border: '1px solid transparent',
            width: '100%',
            cursor: 'pointer'
          }}
        >
          <LogOut size={20} />
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
