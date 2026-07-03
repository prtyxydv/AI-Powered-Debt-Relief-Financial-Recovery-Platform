import React from 'react';
import './SettlementPredictor.css';

function SettlementPredictor() {
  return (
    <div className="sp-container">
      <div className="sp-header">
        <h1 className="sp-title">🎯 Settlement Predictor</h1>
        <p className="sp-subtitle">AI-powered settlement estimates for each of your loans</p>
      </div>

      <div className="loan-card-section">
        <div className="loan-estimate-card">
          <div className="loan-card-header">
            <h3>KISHT</h3>
            <span className="risk-badge medium">MEDIUM RISK</span>
          </div>
          
          <div className="settlement-percent">
            <h2>60%</h2>
            <p>Suggested Settlement</p>
          </div>
          
          <div className="settlement-amount">
            <h3>₹48,000</h3>
            <p>Suggested Amount</p>
          </div>
          
          <div className="savings-badge">
            💰 Potential saving: ₹32,000
          </div>
        </div>
      </div>

      <div className="ai-strategy-section">
        <div className="strategy-header">
          <div>
            <h3 className="section-title">AI Negotiation Strategy</h3>
            <p className="section-subtitle">Personalized advice based on your financial profile</p>
          </div>
          <button className="btn-primary">Regenerate</button>
        </div>
        
        <div className="strategy-content">
          <h4>📋 FINANCIAL NEGOTIATION STRATEGY</h4>
          <p>=========================================</p>
          
          <h4>💰 YOUR FINANCIAL SNAPSHOT:</h4>
          <ul>
            <li>Monthly Surplus: ₹-8,900.00</li>
            <li>EMI Burden: 0.0% of income</li>
            <li>Stress Level: Low</li>
          </ul>

          <h4>🎯 NEGOTIATION PLAN:</h4>
          <ul>
            <li><strong>KISHT:</strong></li>
            <li>Outstanding: ₹80,000.00</li>
            <li>Settlement Offer: 60.0% = ₹48,000.00</li>
            <li>Risk Level: Medium</li>
            <li>Approach: Negotiate EMI reduction first</li>
          </ul>

          <h4>🗣️ KEY TALKING POINTS:</h4>
          <ol>
            <li>Emphasize genuine financial hardship with documentation</li>
            <li>Request interest waiver or reduction as part of settlement</li>
            <li>Get ALL settlement terms in writing before paying</li>
            <li>Ask for NOC (No-Objection Certificate) post-settlement</li>
            <li>Negotiate "Full & Final Settlement" status for credit report</li>
          </ol>

          <h4>📄 DOCUMENTS TO REQUEST:</h4>
          <ul>
            <li>Original loan agreement</li>
            <li>Complete account statement</li>
            <li>Written settlement offer letter</li>
            <li>NOC template</li>
          </ul>

          <p className="timeline">⏰ TIMELINE: 30-60 days for full negotiation and settlement</p>
        </div>
      </div>
    </div>
  );
}

export default SettlementPredictor;
