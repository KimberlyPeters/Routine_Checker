// React imports
import React, { useEffect, useState } from "react";
import { AiOutlineFieldTime, AiFillDelete } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "@/helpers/firebase";

// Define a type for tasks
interface Task {
  id: string;
  task: string;
  status: string;
  date: string;
  startTime?: number;
  endTime?: number;
  totalTime?: number;
}

const TaskActivity = () => {
  // Initialize tasks state with the Task type
  const [tasks, setTasks] = useState<Task[]>([]);
  const [localTask, setLocalTask] = useState<Task | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskDescription, setNewTaskDescription] = useState<string>(""); // Set newTaskDescription as a string

  useEffect(() => {
    const userId = auth.currentUser.uid;
    const tasksCollection = collection(db, "tasks");
    const userTasksQuery = collection(db, "tasks");

    const unsubscribe = onSnapshot(userTasksQuery, (querySnapshot) => {
      const tasksData: Task[] = [];
      querySnapshot.forEach((doc) => {
        // Check if the task belongs to the logged-in user
        if (doc.data().userId === userId) {
          tasksData.push({
            id: doc.id,
            ...doc.data(),
          });
        }
      });
      setTasks(tasksData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //   function to handle task Deletion
  const handleDelete = async (taskId: string) => {
    try {
      await deleteDoc(doc(db, "tasks", taskId));
      setTasks(tasks.filter((task) => task.id !== taskId));
      alert("Task Deleted successfully");
    } catch (error) {
      alert("Task Deleted failed");
      console.error("Error deleting task:", error);
    }
  };
  //   function to handle task edit
  const handleEdit = (taskId: string) => {
    const foundTask = tasks.find((task) => task.id === taskId);
    if (foundTask) {
      setLocalTask(foundTask);
      setIsEditing(true);
      setNewTaskDescription(foundTask.task);
    }
  };

  return (
    <>
      <section>
        <h2 className="my-10
         text-xl font-semibold dark:text-gray-400">
          Notification
        </h2>

        {tasks.length === 0 ? (
          <div className="p-6 mb-6 bg-white rounded shadow card dark:bg-gray-900">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-8 h-8 mr-4 text-blue-500"
                viewBox="0 0 16 16"
              >
                <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
              </svg>
              <div>
                <p className="font-semibold dark:text-gray-400">
                  {" "}
                  No Task available
                </p>
                <p className="text-sm text-gray-400">Just Now</p>
              </div>
            </div>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="p-6 mb-6 bg-white rounded shadow card dark:bg-gray-900"
            >
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-8 h-8 mr-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                  <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                </svg>
                <div>
                  <p className="font-semibold dark:text-gray-400">
                    {task.task}
                  </p>
                  <p className="text-sm text-gray-400">{task.status}</p>
                  <div className="tasks-buttons flex items-center space-x-2 justify-center md:justify-end">
                    <AiFillDelete
                      onClick={() => handleDelete(task.id)}
                      className="text-2xl text-red-500 cursor-pointer"
                    />

                    <FaPencilAlt onClick={() => handleEdit(task.id)} />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default TaskActivity;
