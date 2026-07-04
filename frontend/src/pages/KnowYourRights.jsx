import React from 'react';
import './KnowYourRights.css';

function KnowYourRights() {
  const rights = [
    { title: 'No Harassment', icon: '🚫', desc: 'Recovery agents CANNOT call you before 7 AM or after 7 PM. Threats, abuse, or use of force is illegal under RBI guidelines.' },
    { title: 'Right to Statement', icon: '📄', desc: 'You have the right to receive a full and detailed loan account statement at any time, free of charge.' },
    { title: 'Settlement Negotiation', icon: '🤝', desc: 'You can negotiate a one-time settlement with your lender. Lenders are allowed to accept partial payments to close an NPA account.' },
    { title: 'Advance Notice Required', icon: '🔔', desc: 'Lenders must give you 60-day advance notice before classifying your account as NPA (Non-Performing Asset).' },
    { title: 'Grievance Redressal', icon: '⚖️', desc: 'Every bank must have a Grievance Redressal Officer. You can escalate to RBI Banking Ombudsman if unresolved in 30 days.' },
    { title: 'NOC After Settlement', icon: '📜', desc: 'After full payment or settlement, you are legally entitled to a No-Objection Certificate (NOC) from the lender.' },
    { title: 'Property Protection', icon: '🏠', desc: 'Lenders cannot seize property without following SARFAESI Act procedures. You have the right to challenge auction notices.' },
    { title: 'Privacy Rights', icon: '🔒', desc: 'Recovery agents cannot contact your family, employer, or neighbors to pressure you for repayment.' }
  ];

  return (
    <div className="rights-container">
      <div className="rights-header">
        <h1 className="rights-title">⚖️ Know Your Rights</h1>
        <p className="rights-subtitle">RBI guidelines and legal protections for Indian borrowers</p>
      </div>

      <div className="rights-section">
        <h3 className="section-title">You Have Rights as a Borrower 💪</h3>
        <p className="section-desc">
          Under RBI's Fair Practices Code and the SARFAESI Act, lenders and recovery agents must follow strict rules. 
          Knowing these rights protects you from illegal harassment and helps you negotiate from a position of strength.
        </p>

        <div className="rights-grid">
          {rights.map((right, idx) => (
            <div key={idx} className="right-card">
              <div className="right-icon">{right.icon}</div>
              <h4 className="right-card-title">{right.title}</h4>
              <p className="right-card-desc">{right.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rights-section step-section">
        <h3 className="section-title">🛡️ What To Do If Harassed</h3>
        <p className="section-desc">Step-by-step protection guide</p>
        
        <div className="steps-grid">
          <div className="step-card">
            <span className="step-num">01</span>
            <h4 className="step-title">Document Everything</h4>
            <p className="step-desc">Keep records of all calls, letters, and communications from lenders and recovery agents.</p>
          </div>
          <div className="step-card">
            <span className="step-num">02</span>
            <h4 className="step-title">Request Written Settlement</h4>
            <p className="step-desc">Ask for any settlement offer in writing before making any payment.</p>
          </div>
          <div className="step-card">
            <span className="step-num">03</span>
            <h4 className="step-title">File a Complaint</h4>
            <p className="step-desc">If harassed, file a complaint with RBI Ombudsman at cms.rbi.org.in or call 14448.</p>
          </div>
          <div className="step-card">
            <span className="step-num">04</span>
            <h4 className="step-title">Get Legal Help</h4>
            <p className="step-desc">Consult a debt settlement lawyer for large amounts. Many offer free initial consultations.</p>
          </div>
        </div>
      </div>

      <div className="ombudsman-card">
        <div>
          <h4 className="ombudsman-title">📞 RBI Banking Ombudsman</h4>
          <p className="ombudsman-desc">Toll-free: 14448 | Website: cms.rbi.org.in</p>
        </div>
        <button className="btn-primary">File Complaint →</button>
      </div>
    </div>
  );
}

export default KnowYourRights;
