import React from 'react';
import './NegotiationEmail.css';

function NegotiationEmail() {
  return (
    <div className="email-container">
      <div className="email-header">
        <h1 className="email-title">✉️ Negotiation Email Generator</h1>
        <p className="email-subtitle">AI-crafted professional letters to send to your lenders</p>
      </div>

      <div className="generate-section">
        <h3 className="section-title">Generate a Negotiation Letter</h3>
        <p className="section-subtitle">Select a loan and we'll write a professional settlement request</p>
        
        <div className="form-group">
          <label>Select Loan</label>
          <div className="input-with-button">
            <select className="loan-select">
              <option>KISHT - ₹80,000</option>
            </select>
            <button className="btn-primary">Generate Letter</button>
          </div>
        </div>
      </div>

      <div className="letter-section">
        <div className="letter-header">
          <h3 className="section-title">📄 Generated Letter</h3>
          <button className="btn-secondary">📋 Copy</button>
        </div>
        
        <div className="letter-content">
          <p><strong>Subject: Request for One-Time Settlement - Loan Account</strong></p>
          <br/>
          <p>To,<br/>The Settlement Department,<br/>KISHT</p>
          <br/>
          <p>Dear Sir/Madam,</p>
          <br/>
          <p>I am writing to formally request a One-Time Settlement (OTS) for my outstanding loan account.</p>
          <br/>
          <p><strong>ACCOUNT DETAILS:</strong><br/>
          Lender: KISHT<br/>
          Outstanding Amount: Rs. 80,000.00<br/>
          Monthly EMI: Rs. 8,900.00<br/>
          Overdue Period: 3 months</p>
          <br/>
          <p><strong>FINANCIAL SITUATION:</strong><br/>
          Due to genuine financial hardship, I am unable to continue servicing my loan as per the original schedule. My monthly income is Rs. 0.00 against total expenses of Rs. 0.00, leaving minimal surplus after essential needs.</p>
          <br/>
          <p><strong>SETTLEMENT PROPOSAL:</strong><br/>
          I respectfully propose a One-Time Settlement of 60.0% of the outstanding amount.<br/>
          Settlement Amount: Rs. 48,000.00</p>
          <br/>
          <p>I can arrange this payment within 30-45 days of receiving written settlement confirmation.</p>
          <br/>
          <p><strong>MY REQUESTS:</strong><br/>
          1. Written settlement offer with exact terms<br/>
          2. Waiver of penal interest and charges<br/>
          3. No-Objection Certificate (NOC) upon payment<br/>
          4. Account closure with "Settled" status on credit report</p>
          <br/>
          <p>I assure you of my genuine intention to resolve this matter promptly.</p>
          <br/>
          <p>Yours sincerely,<br/>
          [Your Full Name]<br/>
          [Loan Account Number]<br/>
          [Contact Number]<br/>
          [Date]</p>
        </div>
      </div>
    </div>
  );
}

export default NegotiationEmail;
