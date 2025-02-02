import React, { useState, createContext, useContext } from "react";
import TaskItem from "../components/TaskItem";
import Notification from "../components/Notification";
import "../styles/Tasks.css";

const NotificationContext = createContext();

const useNotification = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    const id = Date.now();
    setNotifications([...notifications, { id, message }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { title: "Follow up with customer", dueDate: "2025-02-10", status: "Pending" },
    { title: "Prepare sales report", dueDate: "2025-02-15", status: "Completed" },
  ]);

  const [newTask, setNewTask] = useState({ title: "", dueDate: "", status: "Pending" });
  const { addNotification } = useNotification();

  const handleAddTask = () => {
    if (newTask.title && newTask.dueDate) {
      setTasks([...tasks, newTask]);
      addNotification(`Task "${newTask.title}" added successfully!`);
      setNewTask({ title: "", dueDate: "", status: "Pending" });
    } else {
      addNotification("Please fill in all fields.");
    }
  };

  const handleStatusChange = (title) => {
    const updatedTasks = tasks.map((task) =>
      task.title === title ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (title) => {
    setTasks(tasks.filter((task) => task.title !== title));
    addNotification(`Task "${title}" deleted successfully!`);
  };

  return (
    <div className="container">
      <h1>Task Management</h1>
      <Notification />
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <input
        type="date"
        value={newTask.dueDate}
        onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
      />
      <button onClick={handleAddTask}>Add Task</button>

      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onStatusChange={handleStatusChange} onDelete={handleDelete} />
      ))}
    </div>
  );
};

const App = () => (
  <NotificationProvider>
    <Tasks />
  </NotificationProvider>
);

export default App;
