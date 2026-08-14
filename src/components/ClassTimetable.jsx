import React from 'react';
import { Clock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const ClassTimetable = () => {
  const { todayData } = useAppContext();
  const classes = todayData.classes || [];

  if (classes.length === 0) {
    return (
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          🏫 CLASSES TODAY
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No classes scheduled for today.</p>
      </div>
    );
  }

  return (
    <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px' }}>
      <h3 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
        🏫 CLASSES TODAY
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {classes.map((cls, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, width: '70px' }}>
              <Clock size={14} />
              {cls.time}
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 500 }}>
              {cls.subject}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassTimetable;
