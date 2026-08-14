import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const CalendarWidget = () => {
  const { selectedDate, setSelectedDate } = useAppContext();
  
  // Use selectedDate to determine which month to show by default
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date(selectedDate));

  const daysInMonth = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1));
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const today = new Date();
  
  // Create a helper to format date strings for comparison
  const formatDateString = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const todayStr = formatDateString(today.getFullYear(), today.getMonth(), today.getDate());

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const dayStr = formatDateString(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), i);
    const isToday = dayStr === todayStr;
    const isSelected = dayStr === selectedDate;
    
    days.push(
      <div 
        key={`day-${i}`} 
        onClick={() => setSelectedDate(dayStr)}
        style={{
          padding: '8px',
          textAlign: 'center',
          borderRadius: '8px',
          fontSize: '0.9rem',
          background: isSelected ? 'var(--accent-primary)' : isToday ? 'rgba(255,255,255,0.1)' : 'transparent',
          color: isSelected || isToday ? '#fff' : 'var(--text-primary)',
          fontWeight: isSelected || isToday ? 600 : 400,
          border: isToday && !isSelected ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => { if (!isSelected) e.target.style.background = 'rgba(255,255,255,0.1)' }}
        onMouseLeave={(e) => { if (!isSelected) e.target.style.background = isToday ? 'rgba(255,255,255,0.05)' : 'transparent' }}
      >
        {i}
      </div>
    );
  }

  return (
    <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CalendarIcon size={18} /> {monthNames[currentMonthDate.getMonth()]} {currentMonthDate.getFullYear()}
        </h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={prevMonth} style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', padding: '4px', borderRadius: '4px' }}><ChevronLeft size={16} /></button>
          <button onClick={nextMonth} style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', padding: '4px', borderRadius: '4px' }}><ChevronRight size={16} /></button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px' }}>
        {dayNames.map(day => (
          <div key={day} style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            {day}
          </div>
        ))}
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {days}
      </div>
    </div>
  );
};

export default CalendarWidget;
