import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import {
    getFirestore,
    updateDoc,
    onSnapshot,
    doc,
    deleteDoc,
  } from "firebase/firestore";
  

const Task = ({ task }) => {
  const { id, task: taskDescription, status, startTime, endTime } = task;
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "tasks", localTask.id));
      alert("Task Deleted successfully");
    } catch (error) {
      alert("Task Deleted failed");
    }
  };

  return (
    <div className="flex justify-between p-4 mb-4 bg-gray-100 rounded dark:bg-gray-800">
      <div className="flex">
        <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-blue-600 rounded dark:text-gray-400 dark:bg-gray-700 bg-blue-50">
          <AiOutlineFieldTime />
        </span>
        <div className="text-xs">
          <p className="font-medium dark:text-gray-400">Task Description</p>
          <p className="text-gray-500 dark:text-gray-400">{taskDescription}</p>
        </div>
      </div>
      <div className="flex">
        {/* Add your action buttons here */}
        {/* For example, you can add an Edit button */}
        <button className="mr-2 text-blue-600 dark:text-gray-400"
        type="submit"
        onClick={handleDelete}
        >
          Edit
        </button>
        {/* And a Delete button */}
        <button className="text-red-600 dark:text-gray-400">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
