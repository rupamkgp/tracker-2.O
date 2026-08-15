import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import AuthScreen from './components/AuthScreen';
import Onboarding from './pages/Onboarding';
import Layout from './components/Layout';
import Today from './pages/Today';
import Subjects from './pages/Subjects';
import Planning from './pages/Planning';
import Timetable from './pages/Timetable';
import WeeklyReview from './pages/WeeklyReview';
import Goals from './pages/Goals';
import DSASyllabus from './pages/DSASyllabus';
import CSSyllabus from './pages/CSSyllabus';
import SystemDesignSyllabus from './pages/SystemDesignSyllabus';
import CPSyllabus from './pages/CPSyllabus';
import WebDevSyllabus from './pages/WebDevSyllabus';
import AIEngineerSyllabus from './pages/AIEngineerSyllabus';
import QuantTradingSyllabus from './pages/QuantTradingSyllabus';
import Settings from './pages/Settings';

function App() {
  const { token, isLoading, onboardingCompleted, setOnboardingCompleted } = useAuth(); console.log('App render: ', {token: !!token, isLoading, onboardingCompleted});
  const [currentPage, setCurrentPage] = useState('today');

  if (isLoading) return <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading Auth...</div>;
  if (!token) return <AuthScreen />;
  if (!onboardingCompleted) return <Onboarding onComplete={() => setOnboardingCompleted(true)} />;

  const renderPage = () => {
    switch (currentPage) {
      case 'today': return <Today />;
      case 'subjects': return <Subjects />;
      case 'planning': return <Planning />;
      case 'timetable': return <Timetable />;
      case 'weekly': return <WeeklyReview />;
      case 'goals': return <Goals setCurrentPage={setCurrentPage} />;
      case 'dsa-syllabus': return <DSASyllabus setCurrentPage={setCurrentPage} />;
      case 'cs-syllabus': return <CSSyllabus setCurrentPage={setCurrentPage} />;
      case 'system-design-syllabus': return <SystemDesignSyllabus setCurrentPage={setCurrentPage} />;
      case 'cp-syllabus': return <CPSyllabus setCurrentPage={setCurrentPage} />;
      case 'web-dev-syllabus': return <WebDevSyllabus setCurrentPage={setCurrentPage} />;
      case 'ai-engineer-syllabus': return <AIEngineerSyllabus setCurrentPage={setCurrentPage} />;
      case 'quant-trading-syllabus': return <QuantTradingSyllabus setCurrentPage={setCurrentPage} />;
      case 'settings': return <Settings />;
      default: return <Today />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
