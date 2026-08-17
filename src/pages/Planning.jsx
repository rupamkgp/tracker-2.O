import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Calendar, Trash2, Clock, CheckCircle } from 'lucide-react';

const Planning = () => {
  const { subjects, studyPlans, addStudyPlan, updateStudyPlan, deleteStudyPlan } = useAppContext();
  const getSubjectName = (id) => {
    const s = subjects.find(s => s.id === id);
    return s ? s.name : 'Unknown Subject';
  };

  const todayStr = (() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  })();

  const [selectedSubject, setSelectedSubject] = useState('');
  const [startDate, setStartDate] = useState(todayStr);
  const [endDate, setEndDate] = useState(todayStr);
  const [targetMinutes, setTargetMinutes] = useState(60);

  const handleCreatePlan = (e) => {
    e.preventDefault();
    if (!selectedSubject || !startDate || !endDate || !targetMinutes) return;
    if (endDate < startDate) {
      alert('End date cannot be before start date.');
      return;
    }
    addStudyPlan(selectedSubject, startDate, endDate, targetMinutes);
    setSelectedSubject('');
    setStartDate(todayStr);
    setEndDate(todayStr);
    setTargetMinutes(60);
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">SET YOUR PLAN</h1>
        <p className="page-subtitle">Set a goal and automatically generate daily tasks</p>
      </div>

      <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary)' }}>Create New Study Plan</h3>
        <form onSubmit={handleCreatePlan} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', alignItems: 'end' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Select Subject</label>
            <select 
              value={selectedSubject} 
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="text-input"
              style={{ width: '100%' }}
              required
            >
              <option value="" disabled>Choose a subject...</option>
              {subjects.map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.category})</option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>From Date</label>
            <input 
              type="date" 
              value={startDate} 
              onChange={(e) => setStartDate(e.target.value)}
              className="text-input"
              style={{ width: '100%' }}
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>To Date</label>
            <input 
              type="date" 
              value={endDate} 
              onChange={(e) => setEndDate(e.target.value)}
              className="text-input"
              style={{ width: '100%' }}
              min={startDate}
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Daily Target (Minutes)</label>
            <input 
              type="number" 
              value={targetMinutes} 
              onChange={(e) => setTargetMinutes(e.target.value)}
              className="text-input"
              style={{ width: '100%' }}
              min="5"
              step="5"
              required
            />
          </div>
          <button type="submit" style={{ padding: '10px 24px', background: 'var(--accent-primary)', color: '#fff', borderRadius: '8px', fontWeight: 600, height: '42px' }}>
            Launch Plan
          </button>
        </form>
      </div>

      <div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary)' }}>Active Plans</h3>
        {studyPlans.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '12px' }}>
            No active plans. Create one above to start automating your schedule!
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '16px' }}>
            {studyPlans.map(plan => {
              const isActive = plan.isActive && todayStr >= plan.startDate && todayStr <= plan.endDate;
              const isPast = todayStr > plan.endDate;
              const isFuture = todayStr < plan.startDate;

              return (
                <div key={plan.id} className="glass-panel" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: isActive ? '4px solid var(--accent-primary)' : '4px solid var(--text-muted)' }}>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {getSubjectName(plan.subjectId)}
                      {isActive && <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(99, 102, 241, 0.2)', color: 'var(--accent-primary)', borderRadius: '12px' }}>ACTIVE</span>}
                      {isPast && <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(255, 255, 255, 0.1)', color: 'var(--text-muted)', borderRadius: '12px' }}>COMPLETED</span>}
                    </h4>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={14} /> 
                        <input 
                          type="date"
                          defaultValue={plan.startDate}
                          onBlur={(e) => {
                            const newVal = e.target.value;
                            if (newVal && newVal !== plan.startDate && newVal <= plan.endDate) {
                              updateStudyPlan(plan.id, { startDate: newVal });
                            } else if (newVal > plan.endDate) {
                              alert('Start date cannot be after end date.');
                              e.target.value = plan.startDate;
                            }
                          }}
                          style={{ 
                            background: 'rgba(0,0,0,0.2)', 
                            border: '1px solid rgba(255,255,255,0.1)', 
                            color: 'var(--text-primary)', 
                            padding: '2px 6px', 
                            borderRadius: '4px',
                            fontSize: '0.85rem',
                            outline: 'none'
                          }}
                        />
                        to 
                        <input 
                          type="date"
                          defaultValue={plan.endDate}
                          onBlur={(e) => {
                            const newVal = e.target.value;
                            if (newVal && newVal !== plan.endDate && newVal >= plan.startDate) {
                              updateStudyPlan(plan.id, { endDate: newVal });
                            } else if (newVal < plan.startDate) {
                              alert('End date cannot be before start date.');
                              e.target.value = plan.endDate;
                            }
                          }}
                          style={{ 
                            background: 'rgba(0,0,0,0.2)', 
                            border: '1px solid rgba(255,255,255,0.1)', 
                            color: 'var(--text-primary)', 
                            padding: '2px 6px', 
                            borderRadius: '4px',
                            fontSize: '0.85rem',
                            outline: 'none'
                          }}
                        />
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Clock size={14} /> 
                        <input 
                          type="number"
                          defaultValue={plan.targetMinutes}
                          onBlur={(e) => {
                            const newVal = Number(e.target.value);
                            if (newVal !== plan.targetMinutes && newVal > 0) {
                              updateStudyPlan(plan.id, { targetMinutes: newVal });
                            }
                          }}
                          style={{ 
                            background: 'rgba(0,0,0,0.2)', 
                            border: '1px solid rgba(255,255,255,0.1)', 
                            color: 'var(--text-primary)', 
                            width: '60px', 
                            padding: '4px 8px', 
                            borderRadius: '4px',
                            fontSize: '0.9rem',
                            outline: 'none'
                          }}
                          min="5"
                          step="5"
                        />
                        m / day
                      </span>
                    </div>
                  </div>
                  <button onClick={() => deleteStudyPlan(plan.id)} style={{ background: 'transparent', color: 'var(--status-minimum)', padding: '8px', borderRadius: '8px' }} title="Delete Plan">
                    <Trash2 size={20} />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Planning;
