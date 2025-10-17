import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Sidebar from '../ui/Sidebar';
import { Menu } from "lucide-react";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-[var(--background)] text-[var(--primary)] overflow-x-hidden">
      {/* Sidebar Section */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar stays at top */}
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Page Content */}
        <div className="overflow-auto pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
