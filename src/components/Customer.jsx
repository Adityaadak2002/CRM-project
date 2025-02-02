import React, { useState } from "react";
import "../styles/Customer.css"

const Customer = ({ customer, onDelete, onAddCommunicationLog, onAddPurchase }) => {
  const [newLog, setNewLog] = useState("");
  const [newPurchase, setNewPurchase] = useState("");

  const handleAddLog = () => {
    if (newLog) {
      onAddCommunicationLog(newLog);
      setNewLog("");
    } else {
      alert("Please enter a communication log.");
    }
  };

  const handleAddPurchase = () => {
    if (newPurchase) {
      onAddPurchase(newPurchase);
      setNewPurchase("");
    } else {
      alert("Please enter a purchase.");
    }
  };

  return (
    <div className="customer-card">
      <h3>{customer.name}</h3>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <h4>Purchase History:</h4>
      <ul>
        {customer.purchaseHistory.map((purchase, index) => (
          <li key={index}>{purchase}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Purchase"
        value={newPurchase}
        onChange={(e) => setNewPurchase(e.target.value)}
      />
      <button onClick={handleAddPurchase}>Add Purchase</button>

      <h4>Communication Logs:</h4>
      <ul>
        {customer.communicationLogs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Communication Log"
        value={newLog}
        onChange={(e) => setNewLog(e.target.value)}
      />
      <button onClick={handleAddLog}>Add Log</button>
      <button className="Delet" onClick={onDelete}>Delete Customer</button>
    </div>
  );
};

export default Customer;
