import React from "react";
import Navbar from "@/components/dashboardNavbar";
import CreateTask from "@/components/createTask";
import TaskDisplay from "@/components/taskDisplay";
import Tdashboard from "@/components/tdashboard";

const dashboard = () => {
  return (
    <>
    <Tdashboard/>
      {/* <Navbar />
      <section className="dashboard-section">
        <CreateTask />
      </section>
      <section className="Task-overview px-4 py-6">
        <TaskDisplay />
      </section> */}
    </>
  );
};

export default dashboard;
