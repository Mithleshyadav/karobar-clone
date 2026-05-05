// DashboardLayout.jsx
import { useState } from "react";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex bg-backgrounddeep min-h-screen text-white">
      
      {isSidebarOpen && (
        <div className="w-64 fixed top-0 left-0 h-screen">
          <Sidebar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>
      )}

      <div className={`flex-1 flex flex-col min-h-0 ${isSidebarOpen ? 'ml-64' : ''}`}>
        <Header
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* 👇 CHILD PAGES HERE */}
        <div className="flex-1 overflow-y-auto scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

