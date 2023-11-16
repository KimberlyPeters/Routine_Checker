// react imports
import React from "react";
import { useState } from "react";
// helpers imports
import { auth } from "@/helpers/firebase";
// components imports
import CreateTask from "@/components/createTask";
import Sidebar from "@/components/sidebar";
import Reports from "@/components/Reports";
import Task from "@/components/Task";
import TaskCard from "@/components/TaskCard";
import TaskActivity from "@/components/Taskactivity";

const dashboard = () => {
  return (
    <>
      <div className="">
        <Sidebar />
        <section className="dashboard-section justify-items-center flex flex-wrap items-center">
          <h1 className="font-heading text-5xl text-white text-center m-auto">
            Welcome Back,{" "}
            {auth.currentUser
              ? auth.currentUser.displayName || "user name"
              : "user"}
          </h1>
        </section>
        <section className="Task-overview flex flex-col flex-wrap items-center py-10 min-h-1/2">
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
        </section>
      </div>
    </>
  );
};

export default dashboard;
