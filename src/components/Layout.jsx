import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';

const Layout = ({ children, currentPage, setCurrentPage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  return (
    <div className="app-container">
      {isSidebarOpen && <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} setIsSidebarOpen={setIsSidebarOpen} />}
      <main className="main-content">
        {!isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(true)}
            style={{ background: 'transparent', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Menu size={24} /> <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Open Menu</span>
          </button>
        )}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
