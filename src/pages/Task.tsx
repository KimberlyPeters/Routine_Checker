import React from "react";
import CreateTask from "@/components/createTask";
import TaskDisplay from "@/components/taskDisplay";
import TaskActivity from "@/components/Taskactivity";
import Sidebar from "@/components/sidebar";

const Task = () => {
  return (
    <>
      <Sidebar />
      <section className="justify-items-center flex flex-wrap items-center min-h-1/3">
        <CreateTask />
      </section>
      {/* <TaskDisplay /> */}
      <TaskActivity />
    </>
  );
};

export default Task;
