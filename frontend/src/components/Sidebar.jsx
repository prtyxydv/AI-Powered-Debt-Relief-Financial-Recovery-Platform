import React from 'react';
import './Sidebar.css';

function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'financial-health', label: 'Financial Health', icon: '💚' },
    { id: 'settlement-predictor', label: 'Settlement Predictor', icon: '🎯' },
    { id: 'negotiation-email', label: 'Negotiation Email', icon: '✉️' },
    { id: 'know-your-rights', label: 'Know Your Rights', icon: '⚖️' },
    { id: 'history', label: 'History', icon: '📜' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3 className="nav-title">NAVIGATION</h3>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
