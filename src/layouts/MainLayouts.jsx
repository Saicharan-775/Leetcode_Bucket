import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../ui/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="relative flex h-screen bg-[var(--background)] text-[var(--primary)] overflow-hidden">
      
      {/* Sidebar - Fixed on left */}
      <div className="fixed top-0 left-0 h-full z-40">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>

      {/* Main Content Wrapper */}
      <div
        className={`flex flex-col flex-1 h-full transition-all duration-300 ${
          isSidebarOpen ? "md:ml-[250px]" : "md:ml-[60px]"
        }`}
      >
        {/* Navbar - Fixed at top */}
        <div className="fixed top-0 right-0 left-0 z-30">
          <Navbar
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            isSidebarOpen={isSidebarOpen}
          />
        </div>

        {/* Scrollable Content Area */}
        <div
          className={`flex-1 overflow-y-auto overflow-x-hidden pt-[90px] px-0 md:px-6 transition-all duration-300`}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#444 #1a1a1a",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
