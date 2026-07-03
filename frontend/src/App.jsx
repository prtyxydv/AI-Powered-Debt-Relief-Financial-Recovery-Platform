import React, { useState } from 'react';
import Login from './Login';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import FinancialHealth from './FinancialHealth';
import SettlementPredictor from './SettlementPredictor';
import NegotiationEmail from './NegotiationEmail';
import KnowYourRights from './KnowYourRights';
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
