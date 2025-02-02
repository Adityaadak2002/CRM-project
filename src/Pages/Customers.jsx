import React, { useState } from "react";
import Customer from "../components/Customer"; // Existing Customer component
import "../styles/Customers.css"; // Create this file for customer styles if needed

const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      purchaseHistory: [],
      communicationLogs: [],
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      purchaseHistory: [],
      communicationLogs: [],
    },
  ]);

  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "" });

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.phone) {
      setCustomers([...customers, { ...newCustomer, purchaseHistory: [], communicationLogs: [] }]);
      alert(`Customer "${newCustomer.name}" added successfully!`);
      setNewCustomer({ name: "", email: "", phone: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDeleteCustomer = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
    alert("Customer deleted successfully!");
  };

  const handleAddCommunicationLog = (index, log) => {
    const updatedCustomers = customers.map((customer, i) =>
      i === index ? { ...customer, communicationLogs: [...customer.communicationLogs, log] } : customer
    );
    setCustomers(updatedCustomers);
  };

  const handleAddPurchase = (index, purchase) => {
    const updatedCustomers = customers.map((customer, i) =>
      i === index ? { ...customer, purchaseHistory: [...customer.purchaseHistory, purchase] } : customer
    );
    setCustomers(updatedCustomers);
  };

  return (
    <div className="customers-container">
      <h1 className="title">Customer Profiles</h1>
      <div className="customer-form">
        <input
          type="text"
          placeholder="Customer Name"
          value={newCustomer.name}
          onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
          className="input-field"
        />
        <input
          type="email"
          placeholder="Customer Email"
          value={newCustomer.email}
          onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Customer Phone"
          value={newCustomer.phone}
          onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
          className="input-field"
        />
        <button onClick={handleAddCustomer} className="add-button">Add Customer</button>
      </div>

      <div className="customer-list">
        {customers.map((customer, index) => (
          <Customer
            key={index}
            customer={customer}
            onDelete={() => handleDeleteCustomer(index)}
            onAddCommunicationLog={(log) => handleAddCommunicationLog(index, log)}
            onAddPurchase={(purchase) => handleAddPurchase(index, purchase)}
          />
        ))}
      </div>
    </div>
  );
};

export default Customers;
