import React from "react";
import { useState } from "react";

// components imports
import Navbar from "@/components/dashboardNavbar";
import CreateTask from "@/components/createTask";
// import Tdashboard from "@/components/tdashboard";
import Sidebar from "@/components/sidebar";
import Reports from "@/components/Reports";
import Task from "@/components/Task";

const dashboard = () => {
  return (
    <>
      <Sidebar />
      <section className="dashboard-section">
      </section>

      {/* <section>
        <Task/>
      </section> */}

      {/* <section className="Task-overview px-4 py-6">
        
              <section className="dashboard-section">
        
      </section>

        
      <main className="w-full p-4"></main>
        
        </section> */}

      {/* <Tdashboard/> */}
      {/* <Navbar />
      
      */}
    </>
  );
};

export default dashboard;
