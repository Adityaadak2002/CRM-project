import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Customers from "./Pages/Customers";
import Sales from "./Pages/Sales";
import Tasks from "./Pages/Tasks";
import NotFound from "./Pages/NotFound"; // Create this page

function App() {
  return (
    <Router>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/customers" style={styles.link}>Customers</Link>
        <Link to="/sales" style={styles.link}>Sales</Link>
        <Link to="/tasks" style={styles.link}>Tasks</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    gap: "15px",
    padding: "10px",
    background: "#333",
    color: "#fff",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  }
};

export default App;
