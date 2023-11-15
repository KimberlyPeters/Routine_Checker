import React, { useEffect, useState } from "react";
import {
  getFirestore,
  updateDoc,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { BsCircleFill } from "react-icons/bs";
import { format } from "date-fns";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCalendar,
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
  AiOutlineReload,
} from "react-icons/ai";
import { FaCheck, FaTimes } from "react-icons/fa";
import { app } from "@/helpers/firebase";

// Instance of Firestore
const db = getFirestore(app);

interface TaskProps {
  task: {
    id: string;
    task: string;
    status: string;
    date: string;
    startTime?: number;
    endTime?: number;
    totalTime?: number;
  };
}

function Task({ task }: TaskProps) {
  // Local state
  const [localTask, setLocalTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);
  // const [newTaskDescription, setNewTaskDescription] = useState(localTask.task);
  const [newTaskDescription, setNewTaskDescription] = useState(
    localTask?.task || "No task available!!" // Provide a default value if localTask is undefined
  );
  // Handle Edit
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle Cancel Edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewTaskDescription(localTask.task);
  };

  // Handle Update
  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, "tasks", localTask.id), {
        task: newTaskDescription,
      });
      // Update the state
      setLocalTask((prevState) => ({ ...prevState, task: newTaskDescription }));
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Handle Render Task Description
  const renderTaskDescription = () => {
    if (isEditing) {
      return (
        <div className="flex space-x-2">
          <input
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            className="border border-purple-300 rounded px-2 py-1"
          />
          <FaCheck
            onClick={handleUpdate}
            className="text-green-400 cursor-pointer"
          />
          <FaTimes
            onClick={handleCancelEdit}
            className="text-red-400 cursor-pointer"
          />
        </div>
      );
    }
    return task && task.task ? (
      <p className="text-gray-600">{task.task}</p>
    ) : (
      <p className="text-gray-600">Task description not available</p>
    );
  };
  // return <p className="text-gray-600">{task.task}</p>;
  // };

  // Handle Start
  const handleStart = async () => {
    try {
      const startTime = Date.now();
      await updateDoc(doc(db, "tasks", localTask.id), {
        status: "in_progress",
        startTime,
      });
      setLocalTask((prevState) => ({
        ...prevState,
        status: "in_progress",
        startTime,
      }));
    } catch (error) {
      console.error("Error starting task:", error);
    }
  };

  // Handle Pause
  const handlePause = async () => {
    try {
      const elapsed = localTask.startTime
        ? Date.now() - localTask.startTime
        : 0;
      const newTotalTime = (localTask.totalTime || 0) + elapsed;

      await updateDoc(doc(db, "tasks", localTask.id), {
        status: "paused",
        endTime: Date.now(),
        totalTime: newTotalTime,
      });

      setLocalTask((prevState) => ({
        ...prevState,
        status: "paused",
        endTime: Date.now(),
        totalTime: newTotalTime,
      }));
    } catch (error) {
      console.error("Error pausing task:", error);
    }
  };

  // Handle Delete
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "tasks", localTask.id));
      alert("Task Deleted successfully");
    } catch (error) {
      alert("Task Deletion failed");
    }
  };

  // Handle Render Buttons
  const handleRenderButtons = () => {
    switch (localTask.status) {
      case "unstarted":
        return (
          <AiOutlinePlayCircle
            className="text-2xl text-purple-400 cursor-pointer"
            onClick={handleStart}
          />
        );

      case "in_progress":
        return (
          <AiOutlinePauseCircle
            className="text-2xl text-green-400 cursor-pointer"
            onClick={handlePause}
          />
        );

      default:
        return (
          <AiOutlineReload
            className="text-2xl text-green-400 cursor-pointer"
            onClick={handleStart}
          />
        );
    }
  };

  return (
    <div className="bg-white p-4 rounded-md text-black shadow-lg flex flex-col md:flex-row md:items-center justify-between">
      <div className="md:space-x-2 space-y-2 md:space-y-0">
        {/* Render description */}
        {renderTaskDescription()}
        <div className="flex items-center space-x-2">
          <AiOutlineCalendar className="text-gray-600" />
          <p className="text-gray-600">
            {localTask && localTask.date
              ? format(new Date(localTask.date), "do MMM yyyy")
              : "Date not available"}
          </p>

          {/* <p className="text-gray-600">
            {format(new Date(localTask.date), "do MMM yyyy")}
          </p> */}
        </div>
      </div>
      <div className="flex items-center space-x-2 justify-center">
        {/* <BsCircleFill
          color={
            localTask.status === "paused"
              ? "red"
              : localTask.status === "in_progress"
              ? "green"
              : "yellow"
          }
        /> */}
        {/* <BsCircleFill
          color={
            localTask && localTask.status === "paused"
              ? "red"
              : localTask && localTask.status === "in_progress"
              ? "green"
              : "yellow"
          }
        />

        <p>{localTask.status}</p> */}
        {localTask ? (
          <BsCircleFill
            color={
              localTask.status === "paused"
                ? "red"
                : localTask.status === "in_progress"
                ? "green"
                : "yellow"
            }
          />
        ) : (
          <span>Default Value</span>
        )}
      </div>
      {/* Render buttons */}
      <div className="flex items-center space-x-2 justify-center">
        {/* Render buttons */}
        {localTask && localTask.status && handleRenderButtons()}
        <AiOutlineEdit
          onClick={handleEdit}
          className="text-2xl text-purple-400 cursor-pointer"
        />
        <AiOutlineDelete
          onClick={handleDelete}
          className="text-2xl text-red-500 cursor-pointer"
        />
      </div>

      {/* <div className="flex items-center space-x-2 justify-center md:justify-end">
        {handleRenderButtons()}
        <AiOutlineEdit
          onClick={handleEdit}
          className="text-2xl text-purple-400 cursor-pointer"
        />
        <AiOutlineDelete
          onClick={handleDelete}
          className="text-2xl text-red-500 cursor-pointer"
        />
      </div> */}
    </div>
  );
}

export default Task;
