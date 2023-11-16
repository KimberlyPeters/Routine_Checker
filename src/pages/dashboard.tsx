// react imports
import React from "react";
import { useState } from "react";
// helpers imports
import { auth } from "@/helpers/firebase";
// components imports
import Sidebar from "@/components/sidebar";
import Reports from "@/components/Reports";
import Task from "@/components/Task";
import TaskCard from "@/components/TaskCard";
import TaskActivity from "@/components/Taskactivity";
import CreateTask from "@/components/createTask";


const dashboard = () => {
  return (
    <>
      <div className="">
        <Sidebar />
        <section className="w-full">
        <div className="dashboard-section">
          <h1 className="font-heading text-5xl text-white text-center m-auto">
            Welcome Back,{" "}
            {auth.currentUser
              ? auth.currentUser.displayName || "user name"
              : "user"}
          </h1>
        </div>
        <div className="Task-overview flex flex-col flex-wrap items-center py-10 min-h-1/2">
          <div className="">
            <h2 className="pb-2 mb-2 text-xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
              Task Overview
            </h2>
          </div>
          <div>
            <TaskCard />
          </div>
          <div>
            <TaskActivity />
          </div>
        </div>
        </section>
      </div>
    </>
  );
};

export default dashboard;
