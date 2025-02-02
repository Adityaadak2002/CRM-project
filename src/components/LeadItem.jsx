import React, { useState } from "react";
import "../styles/LeadItem.css"

const LeadItem = ({ lead, onStageChange, onDelete, onAddTask }) => {
  const [task, setTask] = useState("");
  const [reminder, setReminder] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(lead.id, task);
      setTask("");
    }
  };

  const handleAddReminder = () => {
    if (reminder.trim()) {
      lead.reminders.push(reminder); // Add reminder to the lead
      setReminder(""); // Clear input
    }
  };

  return (
    <div className="lead-item">
      <h3>{lead.name}</h3>
      <p><strong>Deal Value:</strong> {lead.value}</p>

      {/* Stage Dropdown */}
      <div className="lead-actions">
        <select value={lead.stage} onChange={(e) => onStageChange(lead.id, e.target.value)}>
          <option value="New">New</option>
          <option value="In Negotiation">In Negotiation</option>
          <option value="Closed">Closed</option>
        </select>
        <button onClick={() => onDelete(lead.id)} className="delete-btn">Delete</button>
      </div>

      {/* Task Management */}
      <div className="task-section">
        <input
          type="text"
          placeholder="Add Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
        <ul>
          {lead.tasks.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>

      {/* Reminder Management */}
      <div className="reminder-section">
        <input
          type="text"
          placeholder="Add Reminder"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
        <button onClick={handleAddReminder}>Add</button>
        <ul>
          {lead.reminders.map((r, index) => (
            <li key={index}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeadItem;
