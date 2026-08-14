import React from 'react';
import { Target, CheckCircle, Clock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const ScoreCard = () => {
  const { calculateScore, calculateHours } = useAppContext();
  
  const score = calculateScore();
  const { target, completed } = calculateHours();
  
  const targetHours = (target / 60).toFixed(1);
  const completedHours = (completed / 60).toFixed(1);
  const progressPercent = Math.min(Math.round((completed / target) * 100), 100) || 0;

  // Determine status color and text based on user prompt logic
  // 8+ hours (480 mins) -> Excellent, 6-8 -> Good, 4-6 -> Minimum
  let statusText = 'Keep Going';
  let statusColor = 'var(--text-secondary)';
  
  if (completed >= 480) {
    statusText = 'Excellent';
    statusColor = 'var(--status-excellent)';
  } else if (completed >= 360) {
    statusText = 'Good';
    statusColor = 'var(--status-good)';
  } else if (completed >= 240) {
    statusText = 'Minimum Day';
    statusColor = 'var(--status-minimum)';
  }

  const ProgressBar = ({ percent }) => (
    <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', marginTop: '12px' }}>
      <div style={{ 
        width: `${percent}%`, 
        height: '100%', 
        background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
        transition: 'width 0.5s ease-out'
      }} />
    </div>
  );

  return (
    <div className="glass-panel score-card-container" style={{ padding: '24px', display: 'flex', gap: '32px', marginBottom: '32px' }}>
      
      {/* Time Stats */}
      <div style={{ flex: 2 }}>
        <h2 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={18} /> TODAY'S TARGET
        </h2>
        
        <div style={{ display: 'flex', gap: '48px' }}>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Study Goal</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{targetHours}h</div>
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Completed</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{completedHours}h</div>
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Status</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 600, color: statusColor, marginTop: '4px' }}>{statusText}</div>
          </div>
        </div>

        <ProgressBar percent={progressPercent} />
        <div style={{ textAlign: 'right', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>{progressPercent}% Complete</div>
      </div>

      <div className="divider-hide-mobile" style={{ width: '1px', background: 'var(--border-color)' }}></div>

      {/* Daily Score */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '1px' }}>DAILY SCORE</h2>
        <div style={{ 
          fontSize: '3rem', 
          fontWeight: 800,
          background: 'linear-gradient(135deg, #fff, var(--text-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1
        }}>
          {score}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>/ 100</div>
      </div>
      
    </div>
  );
};

export default ScoreCard;
