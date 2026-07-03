import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        <p className="dashboard-subtitle">Your financial snapshot at a glance</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <h4 className="card-title">MONTHLY SURPLUS</h4>
          <h2 className="card-value negative">₹-8,900</h2>
          <p className="card-desc">After all expenses</p>
        </div>
        <div className="card">
          <h4 className="card-title">TOTAL OUTSTANDING</h4>
          <h2 className="card-value">₹80,000</h2>
          <p className="card-desc">1 active loans</p>
        </div>
        <div className="card">
          <h4 className="card-title">TOTAL EMI</h4>
          <h2 className="card-value">₹8,900</h2>
          <p className="card-desc">0.0% of income</p>
        </div>
        <div className="card">
          <h4 className="card-title">DEBT-TO-INCOME</h4>
          <h2 className="card-value">0.0%</h2>
          <p className="card-desc">Ratio</p>
        </div>
        <div className="card">
          <h4 className="card-title">STRESS LEVEL</h4>
          <div className="stress-badge low">
            <span className="dot"></span> LOW
          </div>
          <p className="card-desc">Financial stress index</p>
        </div>
      </div>

      {/* Financial Profile */}
      <div className="section-container">
        <div className="section-header">
          <div>
            <h3 className="section-title">Financial Profile</h3>
            <p className="section-subtitle">Your income and expense baseline</p>
          </div>
          <button className="edit-btn">✏️ Edit Profile</button>
        </div>
        
        <div className="profile-grid">
          <div className="profile-item">
            <span className="profile-label">Monthly Income</span>
            <span className="profile-value">₹0</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Monthly Expenses</span>
            <span className="profile-value">₹0</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Lump Sum Available</span>
            <span className="profile-value">₹0</span>
          </div>
        </div>
      </div>

      {/* Active Loans */}
      <div className="section-container">
        <div className="section-header">
          <div>
            <h3 className="section-title">Active Loans</h3>
            <p className="section-subtitle">Manage your debt portfolio</p>
          </div>
          <button className="add-btn">+ Add Loan</button>
        </div>

        <div className="table-responsive">
          <table className="loans-table">
            <thead>
              <tr>
                <th>LENDER</th>
                <th>TYPE</th>
                <th>OUTSTANDING</th>
                <th>INTEREST</th>
                <th>EMI</th>
                <th>OVERDUE</th>
                <th>PRIORITY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-bold">KISHT</td>
                <td><span className="badge outline">NBFC</span></td>
                <td className="fw-bold">₹80,000</td>
                <td>14.5%</td>
                <td>₹8,900</td>
                <td>3 mo.</td>
                <td><span className="badge outline-red">HIGH</span></td>
                <td><button className="delete-btn">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
