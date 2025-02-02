import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css"; // CSS file import ki hai

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">CRM Dashboard</h1>
      <p className="dashboard-welcome">Welcome to your CRM system! Choose a section to manage.</p>
      <nav className="dashboard-nav">
        <ul className="dashboard-menu">
          <li><Link to="/customers" className="dashboard-link">Customers</Link></li>
          <li><Link to="/sales" className="dashboard-link2">Sales</Link></li>
          <li><Link to="/tasks" className="dashboard-link3">Tasks</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
