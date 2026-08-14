import React from 'react';

const Goals = ({ setCurrentPage }) => {
  const roadmap = [
    "DSA",
    "CS Fundamentals",
    "System Design",
    "Competitive Programming",
    "Web Development",
    "AI Engineer",
    "Quant Trading"
  ];

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">LONG-TERM ROADMAP</h1>
        <p className="page-subtitle">Your exact path to mastery.</p>
      </div>

      <div style={{ 
        position: 'relative', 
        paddingLeft: '40px', 
        marginLeft: '20px', 
        marginTop: '20px'
      }}>
        {/* Vertical Line */}
        <div style={{
          position: 'absolute',
          top: '24px',
          bottom: '24px',
          left: '0',
          width: '2px',
          background: 'linear-gradient(to bottom, var(--accent-primary), rgba(255,255,255,0.05))',
        }} />

        {roadmap.map((item, index) => (
          <div key={index} style={{ position: 'relative', marginBottom: '32px' }}>
            {/* Timeline Dot */}
            <div style={{ 
              position: 'absolute', 
              left: '-47px', 
              top: '28px', 
              width: '16px', 
              height: '16px', 
              borderRadius: '50%', 
              background: 'var(--accent-primary)', 
              border: '4px solid var(--bg-dark)',
              boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)'
            }} />
            
            <div className="glass-panel" style={{ 
              padding: '24px 32px',
              transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
              cursor: (item === 'DSA' || item === 'CS Fundamentals' || item === 'System Design' || item === 'Competitive Programming' || item === 'Web Development' || item === 'AI Engineer' || item === 'Quant Trading') ? 'pointer' : 'default',
              border: (item === 'DSA' || item === 'CS Fundamentals' || item === 'System Design' || item === 'Competitive Programming' || item === 'Web Development' || item === 'AI Engineer' || item === 'Quant Trading') ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid rgba(255,255,255,0.05)'
            }}
            onClick={() => {
              if (setCurrentPage) {
                if (item === 'DSA') setCurrentPage('dsa-syllabus');
                if (item === 'CS Fundamentals') setCurrentPage('cs-syllabus');
                if (item === 'System Design') setCurrentPage('system-design-syllabus');
                if (item === 'Competitive Programming') setCurrentPage('cp-syllabus');
                if (item === 'Web Development') setCurrentPage('web-dev-syllabus');
                if (item === 'AI Engineer') setCurrentPage('ai-engineer-syllabus');
                if (item === 'Quant Trading') setCurrentPage('quant-trading-syllabus');
              }
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateX(10px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
              if (item === 'DSA' || item === 'CS Fundamentals' || item === 'System Design' || item === 'Competitive Programming' || item === 'Web Development' || item === 'AI Engineer' || item === 'Quant Trading') e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = 'none';
              if (item === 'DSA' || item === 'CS Fundamentals' || item === 'System Design' || item === 'Competitive Programming' || item === 'Web Development' || item === 'AI Engineer' || item === 'Quant Trading') e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
            }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ 
                  background: 'rgba(99, 102, 241, 0.1)', 
                  color: 'var(--accent-primary)', 
                  padding: '4px 12px', 
                  borderRadius: '12px', 
                  fontSize: '0.8rem', 
                  fontWeight: 700, 
                  letterSpacing: '1px' 
                }}>
                  STEP {index + 1}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  {item}
                  {(item === 'DSA' || item === 'CS Fundamentals' || item === 'System Design' || item === 'Competitive Programming' || item === 'Web Development' || item === 'AI Engineer' || item === 'Quant Trading') && <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--text-muted)', marginLeft: '12px' }}>Click to view full syllabus</span>}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
