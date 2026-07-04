import React, { useState } from 'react';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import FinancialHealth from './pages/FinancialHealth';
import SettlementPredictor from './pages/SettlementPredictor';
import NegotiationEmail from './pages/NegotiationEmail';
import KnowYourRights from './pages/KnowYourRights';
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
        {activeTab === 'financial-health' && <FinancialHealth />}
        {activeTab === 'settlement-predictor' && <SettlementPredictor />}
        {activeTab === 'negotiation-email' && <NegotiationEmail />}
        {activeTab === 'know-your-rights' && <KnowYourRights />}
        
        {/* Placeholder for history tab */}
        {activeTab === 'history' && (
          <div style={{ padding: '3rem', color: '#fff' }}>
            <h2>HISTORY</h2>
            <p>This page is under construction...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
