import React from "react";

const TaskItem = ({ task, onStatusChange, onDelete }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => onStatusChange(task.title)}>
        {task.status === "Pending" ? "Complete" : "Panding"}
      </button>
      <button 
  onClick={() => onDelete(task.title)} 
  style={{ backgroundColor: '#f12338', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer' }}
>
  Delete
</button>

    </div>
  );
};

export default TaskItem;
