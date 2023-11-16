import React, { useState } from "react";
import { db } from "@/helpers/firebase";

const TaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState("");

  const handleTaskSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (taskName.trim() !== "") {
      try {
        // Add the task to Firestore
        await db.collection("tasks").add({
          name: taskName,
          status: "unstarted", // You can define other status values as needed
        });

        // Clear the input field
        setTaskName("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  return (
    <form onSubmit={handleTaskSubmit}>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
