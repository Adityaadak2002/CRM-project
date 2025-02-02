import React, { useState } from "react";
import TaskItem from "../components/TaskItem";
import "../styles/Tasks.css"; // Import the CSS file

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { title: "Follow up with customer", dueDate: "2025-02-10", status: "Pending" },
    { title: "Prepare sales report", dueDate: "2025-02-15", status: "Completed" },
  ]);

  const [newTask, setNewTask] = useState({ title: "", dueDate: "", status: "Pending" });

  const handleAddTask = () => {
    if (newTask.title && newTask.dueDate) {
      setTasks([...tasks, newTask]);
      alert(`Task "${newTask.title}" added successfully!`);
      setNewTask({ title: "", dueDate: "", status: "Pending" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleStatusChange = (title) => {
    const updatedTasks = tasks.map(task => 
      task.title === title ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" } : task
    );
    setTasks(updatedTasks);
  };

  // Add handleDelete function
  const handleDelete = (title) => {
    const updatedTasks = tasks.filter(task => task.title !== title);
    setTasks(updatedTasks);
    alert(`Task "${title}" deleted successfully!`);
  };

  return (
    <div className="container">
      <h1>Task Management</h1>
      <input className="input"
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <input
        className="date"
        type="date"
        value={newTask.dueDate}
        onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
      />
      <button onClick={handleAddTask}>Add Task</button>
      
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          onStatusChange={handleStatusChange} 
          onDelete={handleDelete} // Pass delete handler
        />
      ))}
    </div>
  );
};

export default Tasks;
