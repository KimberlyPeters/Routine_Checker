
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/helpers/firebase";
import Task from "@/components/details";

const TaskDisplay = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Function to fetch tasks from Firestore
    const fetchTasks = async () => {
      const tasksCollection = collection(db, "tasks");
      const tasksSnapshot = await getDocs(tasksCollection);
      const tasksData = tasksSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksData);
    };

    // Call the fetchTasks function
    fetchTasks();
  }, []); // Run this effect only once when the component mounts

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
        <div className="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900 ">
          <h2 className="pb-5 text-xl font-bold border-b dark:border-gray-700 dark:text-gray-400">
            Task overview
          </h2>
          <div className="px-4 py-3 text-xs font-medium">
            <div className="flex px-4 mb-3 text-gray-500 dark:text-gray-400">
              <h2 className="mr-auto">Task Name</h2>
              <h2>Action</h2>
            </div>

            {/* Iterate over tasks and display them */}
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDisplay;