import React from 'react';
import './FinancialHealth.css';

function FinancialHealth() {
  return (
    <div className="financial-health-container">
      <div className="fh-header">
        <h1 className="fh-title">💚 Financial Health</h1>
        <p className="fh-subtitle">Detailed analysis of your debt stress and repayment capacity</p>
      </div>

      <div className="fh-section stress-section">
        <div className="stress-info">
          <h3 className="section-title">Overall Financial Stress</h3>
          <p className="stress-desc">
            <span className="dot low"></span> Low stress. You're managing debt well.
          </p>
        </div>
        <div className="stress-badge-large low">LOW</div>
      </div>

      <div className="fh-grid-4">
        <div className="fh-card">
          <span className="fh-label">MONTHLY INCOME</span>
          <h2 className="fh-value">₹0</h2>
        </div>
        <div className="fh-card">
          <span className="fh-label">MONTHLY EXPENSES</span>
          <h2 className="fh-value">₹0</h2>
        </div>
        <div className="fh-card highlight-red">
          <span className="fh-label">MONTHLY SURPLUS</span>
          <h2 className="fh-value">₹-8,900</h2>
        </div>
        <div className="fh-card">
          <span className="fh-label">LUMP SUM AVAILABLE</span>
          <h2 className="fh-value">₹0</h2>
        </div>
      </div>

      <div className="fh-grid-2">
        <div className="fh-card ratio-card">
          <div className="ratio-header">
            <span className="fh-label">EMI-to-Income Ratio</span>
            <span className="fh-value-small">0.0%</span>
          </div>
          <p className="ratio-desc">Ideal: Below 30% - Yours: 0.0% — Healthy range</p>
        </div>
        <div className="fh-card ratio-card">
          <div className="ratio-header">
            <span className="fh-label">Debt-to-Income Ratio</span>
            <span className="fh-value-small">0.0%</span>
          </div>
          <p className="ratio-desc">Ideal: Below 40% - Yours: 0.0% — Manageable range</p>
        </div>
      </div>

      <div className="fh-section tips-section">
        <h3 className="section-title">💡 Improvement Tips</h3>
        <p className="section-subtitle">Based on your financial profile</p>
        
        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-icon">📉</span>
            <span className="tip-text">Reduce discretionary spending to increase surplus</span>
          </div>
          <div className="tip-card">
            <span className="tip-icon">🏦</span>
            <span className="tip-text">Contact lenders for EMI restructuring options</span>
          </div>
          <div className="tip-card">
            <span className="tip-icon">💰</span>
            <span className="tip-text">Use lump sum for highest-interest loan first</span>
          </div>
          <div className="tip-card">
            <span className="tip-icon">📊</span>
            <span className="tip-text">Track all expenses to find savings opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialHealth;
