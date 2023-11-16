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
      </div>
    </>
  );
};

export default dashboard;
