import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Clock, Trash2, Plus } from 'lucide-react';

const Timetable = () => {
  const { timetable, updateTimetableDay, subjects } = useAppContext();
  
  // We want to display days in order.
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Filter subjects for the dropdown (only Academic subjects make sense for college classes, but we can include all)
  const academicSubjects = subjects.filter(s => s.category === 'Academic' || s.type.includes('Department'));

  const DayCard = ({ day }) => {
    const classes = timetable[day] || [];
    const [isAdding, setIsAdding] = useState(false);
    const [newTime, setNewTime] = useState('09:00');
    const [newSubject, setNewSubject] = useState('');

    const handleDelete = (index) => {
      const newClasses = [...classes];
      newClasses.splice(index, 1);
      updateTimetableDay(day, newClasses);
    };

    const handleAdd = () => {
      if (!newTime || !newSubject) return;
      
      const newClasses = [...classes, { time: newTime, subject: newSubject }];
      // Sort classes by time
      newClasses.sort((a, b) => a.time.localeCompare(b.time));
      
      updateTimetableDay(day, newClasses);
      setNewTime('09:00');
      setNewSubject('');
      setIsAdding(false);
    };

    return (
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>{day}</h3>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{classes.length} classes</span>
        </div>

        {classes.length === 0 && !isAdding && (
          <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)' }}>
            No classes scheduled for {day}.
          </div>
        )}

        <div style={{ display: 'grid', gap: '12px', marginBottom: isAdding ? '16px' : '0' }}>
          {classes.map((cls, idx) => (
            <div key={idx} className="timetable-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                  <Clock size={16} /> {cls.time}
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>
                  {cls.subject}
                </div>
              </div>
              <button 
                onClick={() => handleDelete(idx)} 
                style={{ background: 'transparent', color: 'var(--status-minimum)', padding: '6px', borderRadius: '4px' }}
                title="Remove Class"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {isAdding && (
          <div className="flex-responsive" style={{ display: 'flex', gap: '12px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', marginTop: '16px' }}>
            <input 
              type="time" 
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '6px', border: 'none', background: 'rgba(0,0,0,0.3)', color: 'var(--text-primary)' }}
            />
            <select 
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: 'none', background: 'rgba(0,0,0,0.3)', color: 'var(--text-primary)' }}
            >
              <option value="" disabled>Select Subject...</option>
              {academicSubjects.length > 0 ? (
                academicSubjects.map(s => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))
              ) : (
                subjects.map(s => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))
              )}
            </select>
            <button onClick={() => setIsAdding(false)} style={{ padding: '8px 16px', background: 'transparent', color: 'var(--text-muted)' }}>Cancel</button>
            <button onClick={handleAdd} style={{ padding: '8px 16px', background: 'var(--accent-primary)', color: '#fff', borderRadius: '6px', fontWeight: 600 }}>Save</button>
          </div>
        )}

        {!isAdding && (
          <button 
            onClick={() => setIsAdding(true)}
            style={{ 
              marginTop: '16px',
              width: '100%', 
              padding: '12px', 
              background: 'transparent', 
              color: 'var(--text-muted)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '8px', 
              cursor: 'pointer',
              border: '1px dashed rgba(255,255,255,0.1)',
              borderRadius: '8px',
              transition: 'background 0.2s, color 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <Plus size={16} /> Add Class
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">WEEKLY TIMETABLE</h1>
        <p className="page-subtitle">Manage your college schedule to automatically generate daily academic tasks.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '24px' }}>
        {days.map(day => (
          <DayCard key={day} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Timetable;
