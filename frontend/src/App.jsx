import React, { useState } from 'react';
import Login from './Login';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // default to true to show dashboard for now
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        {activeTab === 'dashboard' && <Dashboard />}
        {/* Placeholders for other tabs */}
        {activeTab !== 'dashboard' && (
          <div style={{ padding: '3rem', color: '#fff' }}>
            <h2>{activeTab.replace('-', ' ').toUpperCase()}</h2>
            <p>This page is under construction...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
