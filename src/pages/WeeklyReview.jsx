import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { formatDuration } from '../utils/format';

const WeeklyReview = () => {
  const { dailyRecords, subjectCategories, subjects, getResolvedDayData, weeklyReviews, saveWeeklyReview } = useAppContext();
  
  // Calculate the past 7 days (including today)
  const getPast7Days = () => {
    const dates = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      dates.push(`${year}-${month}-${day}`);
    }
    return dates;
  };

  const past7Dates = getPast7Days();
  const weekStartDate = past7Dates[0];
  const weekEndDate = past7Dates[6];

  // Analytics Engine
  let totalTargetMinutes = 0;
  let totalCompletedMinutes = 0;
  
  let totalTasksCompleted = 0;
  let totalPlannedTasksCompleted = 0;
  
  const categoryStats = {};
  const subjectCompletions = {};

  past7Dates.forEach(dateStr => {
    const dayData = getResolvedDayData(dateStr, dailyRecords);
    
    Object.entries(dayData.tasks).forEach(([categoryName, tasksArray]) => {
      if (!categoryStats[categoryName]) {
        categoryStats[categoryName] = { total: 0, completed: 0 };
      }
      
      tasksArray.forEach(task => {
        totalTargetMinutes += task.targetMinutes || 0;
        categoryStats[categoryName].total += 1;
        
        if (task.completed) {
          totalCompletedMinutes += task.targetMinutes || 0;
          categoryStats[categoryName].completed += 1;
          totalTasksCompleted += 1;
          
          if (task.id.startsWith('plan_')) {
            totalPlannedTasksCompleted += 1;
          }
          
          if (task.subjectId) {
            subjectCompletions[task.subjectId] = (subjectCompletions[task.subjectId] || 0) + 1;
          }
        }
      });
    });
  });

  const hoursTarget = formatDuration(totalTargetMinutes);
  const hoursCompleted = formatDuration(totalCompletedMinutes);

  let mostActiveSubjectName = 'N/A';
  let maxCompletions = 0;
  Object.entries(subjectCompletions).forEach(([subId, count]) => {
    if (count > maxCompletions) {
      maxCompletions = count;
      const sub = subjects.find(s => s.id === subId);
      if (sub) mostActiveSubjectName = sub.name;
    }
  });

  // Local State for Reviews
  const savedReview = weeklyReviews[weekStartDate] || {};
  const [bestAchievement, setBestAchievement] = useState(savedReview.bestAchievement || '');
  const [biggestProblem, setBiggestProblem] = useState(savedReview.biggestProblem || '');
  const [nextPriority, setNextPriority] = useState(savedReview.nextPriority || '');
  const [isSaved, setIsSaved] = useState(false);

  // If the week changes (unlikely during session, but good practice)
  useEffect(() => {
    const sr = weeklyReviews[weekStartDate] || {};
    setBestAchievement(sr.bestAchievement || '');
    setBiggestProblem(sr.biggestProblem || '');
    setNextPriority(sr.nextPriority || '');
    setIsSaved(false);
  }, [weekStartDate, weeklyReviews]);

  const handleSave = () => {
    saveWeeklyReview(weekStartDate, { bestAchievement, biggestProblem, nextPriority });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">WEEKLY REVIEW</h1>
        <p className="page-subtitle">Analyze your performance from {weekStartDate} to {weekEndDate}.</p>
      </div>

      <div className="glass-panel" style={{ padding: '32px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '48px', marginBottom: '48px' }}>
          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>HOURS & PILLARS (Last 7 Days)</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span>Study hours:</span> <span style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>{hoursCompleted} / {hoursTarget}</span>
            </div>
            
            {Object.entries(categoryStats).map(([catName, stats]) => {
              if (stats.total === 0) return null;
              const percent = Math.round((stats.completed / stats.total) * 100);
              return (
                <div key={catName} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.95rem' }}>{catName}:</span> 
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '80px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${percent}%`, height: '100%', background: 'var(--accent-secondary)' }} />
                    </div>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', width: '40px', textAlign: 'right' }}>{percent}%</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>OUTPUTS</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span>Total Tasks Completed:</span> <span style={{ fontWeight: 600 }}>{totalTasksCompleted}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span>Planned Tasks Hit:</span> <span style={{ fontWeight: 600 }}>{totalPlannedTasksCompleted}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span>Most Active Subject:</span> <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{mostActiveSubjectName}</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Best achievement this week:</h3>
            <textarea 
              value={bestAchievement}
              onChange={(e) => setBestAchievement(e.target.value)}
              placeholder="What went really well?"
              style={{ width: '100%', minHeight: '80px', padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', borderRadius: '8px', outline: 'none' }}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Biggest problem:</h3>
            <textarea 
              value={biggestProblem}
              onChange={(e) => setBiggestProblem(e.target.value)}
              placeholder="What bottlenecks did you face?"
              style={{ width: '100%', minHeight: '80px', padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', borderRadius: '8px', outline: 'none' }}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Next week's priority:</h3>
            <textarea 
              value={nextPriority}
              onChange={(e) => setNextPriority(e.target.value)}
              placeholder="What is your main focus for the next 7 days?"
              style={{ width: '100%', minHeight: '80px', padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', borderRadius: '8px', outline: 'none' }}
            />
          </div>
          
          <button 
            onClick={handleSave}
            style={{ 
              padding: '12px', 
              background: isSaved ? 'var(--status-healthy)' : 'var(--accent-primary)', 
              color: '#fff', 
              borderRadius: '8px', 
              fontWeight: 600, 
              marginTop: '16px',
              transition: 'background 0.3s'
            }}
          >
            {isSaved ? 'Review Saved!' : 'Save Review'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default WeeklyReview;
