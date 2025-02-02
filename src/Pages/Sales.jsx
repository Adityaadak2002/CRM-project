import React, { useState } from "react";
import LeadItem from "../components/LeadItem";
import "../styles/Sales.css";

const Sales = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: "Aditya", stage: "New", value: "₹1200", tasks: [], reminders: [] },
    { id: 2, name: "Rohit", stage: "In Negotiation", value: "₹2500", tasks: [], reminders: [] },
    { id: 3, name: "Neha", stage: "Closed", value: "₹5000", tasks: [], reminders: [] }
  ]);

  const [newLead, setNewLead] = useState({ name: "", value: "", stage: "New" });

  // Lead Stage Change Function
  const handleStageChange = (id, newStage) => {
    setLeads(leads.map(lead => lead.id === id ? { ...lead, stage: newStage } : lead));
  };

  // Add New Lead Function
  const addLead = () => {
    if (newLead.name.trim() && newLead.value.trim()) {
      setLeads([...leads, { ...newLead, id: Date.now(), tasks: [], reminders: [] }]);
      setNewLead({ name: "", value: "", stage: "New" });
    } else {
      alert("Please enter all details");
    }
  };

  // Delete Lead Function
  const deleteLead = (id) => {
    setLeads(leads.filter(lead => lead.id !== id));
  };

  // Add Task to Lead
  const addTask = (id, task) => {
    setLeads(leads.map(lead => lead.id === id ? { ...lead, tasks: [...lead.tasks, task] } : lead));
  };

  return (
    <div className="sales-container">
      <h1>Sales Pipeline</h1>

      {/* Add Lead Form */}
      <div className="add-lead">
        <input
          type="text"
          placeholder="Lead Name"
          value={newLead.name}
          onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Deal Value (₹)"
          value={newLead.value}
          onChange={(e) => setNewLead({ ...newLead, value: e.target.value })}
        />
        <button onClick={addLead}>Add Lead</button>
      </div>

      {/* Sales Pipeline UI */}
      <div className="pipeline">
        {["New", "In Negotiation", "Closed"].map(stage => (
          <div key={stage} className="stage">
            <h2>{stage}</h2>
            {leads
              .filter(lead => lead.stage === stage)
              .map(lead => (
                <LeadItem
                  key={lead.id}
                  lead={lead}
                  onStageChange={handleStageChange}
                  onDelete={deleteLead}
                  onAddTask={addTask}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
