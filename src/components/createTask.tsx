import React from "react";
import { useState, FormEvent } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import Spinner from "../components/Spinner";

// next utilities import
import Image from "next/image";
// import { useRouter } from "next/navigation";

// firebase and firestore authentication imports
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { auth, db, app } from "@/helpers/firebase";

const createTask = () => {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setsuccess] = useState(false);
  //   const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");
      setsuccess(false);

      // Assuming the types of these variables
      const taskToAdd = {
        task: task.trim(),
        status: "unstarted",
        startTime: null,
        endTime: null,
        userId: auth.currentUser?.uid,
      };

      // Save task into DB
      await addDoc(collection(db, "tasks"), taskToAdd);

      setsuccess(true);
      setTask("");
      setLoading(false);
    } catch (error: any) {
      setError("Error adding task: " + error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white p-10 rounded-lg backdrop-filter backdrop-blur-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-black mb-4 text-shadow flex items-center space-x-2">
          <AiOutlineFieldTime />
          <span>Create a new task</span>
        </h1>
        <p className="text-black mb-8">
          Turn your plans into achievable tasks. Start by naming your task
          below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label htmlFor="task" className="block font-bold text-black mb-2">
              Task description
            </label>
            <input
              type="text"
              id="task"
              required
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full bg-transparent bg-opacity-50 text-black border border-gray-300 rounded px-4 py-2 focus:outline-white focus:ring-2 focus:ring-black placeholder-blue"
              placeholder="e.g. Complete React Project"
              style={{
                color: "black",
                textShadow: "0 0 10px rgba(0,0,0,0.25)",
              }}
            />
          </div>
          <div className="flex justify-end">
            <button
              disabled={success}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-50 hover:bg-opacity-75 text-white py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-white"
            >
              {loading ? <Spinner /> : "Create Task"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm mt-2">
              Task created successfully
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default createTask;
