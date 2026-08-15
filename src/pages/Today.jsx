import React from 'react';
import { BookOpen, Code, Book, CheckSquare } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import ScoreCard from '../components/ScoreCard';
import ClassTimetable from '../components/ClassTimetable';
import CalendarWidget from '../components/CalendarWidget';
import TaskChecklist from '../components/TaskChecklist';

const Today = () => {
  const { todayData, selectedDate } = useAppContext();
  
  if (!todayData) return <div>Loading...</div>;

  const { user } = useAuth();
  
  const todayStr = (() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  })();

  const isPast = selectedDate < todayStr;
  const isFuture = selectedDate > todayStr;
  
  const userName = user?.name ? user.name.toUpperCase() : '';
  let headerTitle = userName;

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">{headerTitle}</h1>
        <p className="page-subtitle">DATE: {new Date(todayData.date).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}</p>
      </div>
      
      <ScoreCard />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <ClassTimetable />
        <CalendarWidget />
      </div>
      
      <div style={{ display: 'grid', gap: '24px' }}>
        {useAppContext().subjectCategories.map((cat, index) => {
          // Cycle through icons for custom categories
          const icons = [BookOpen, Code, Book, CheckSquare];
          const icon = icons[index % icons.length];
          return <TaskChecklist key={cat.id} category={cat.category} icon={icon} />;
        })}
        <TaskChecklist category="Review" icon={CheckSquare} />
      </div>
      
    </div>
  );
};

export default Today;
