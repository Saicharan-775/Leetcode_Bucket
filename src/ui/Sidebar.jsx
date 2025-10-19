import React from "react";
import { LayoutDashboard, Target, Zap, BarChart, BookOpen, Menu,ClipboardClock} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
     { name: "Todays Review Queue", path: "/revision-queue", icon: ClipboardClock },
    { name: "Strict", path: "/strict-bucket", icon: Target },
    { name: "Normal", path: "/normal-bucket", icon: Zap },
    { name: "Analysis", path: "/analysis", icon: BarChart },
    { name: "Resources", path: "/resourses", icon: BookOpen },
   
  ];

  return (
    <div className="main-container h-screen ">
      <div
        className={`bg-[var(--card)] text-white h-full flex flex-col transition-all  duration-300 fixed z-50 top-0 ${isOpen ? 'w-[250px]' : 'w-[50px]'} ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        {/* Toggle button */}
        <button
          className="absolute top-4 right-[-16px] mr-6 bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={16} />
        </button>

        {/* Sidebar content */}
        <div className="flex flex-col gap-4 mt-16 p-2 font-medium">
          {links.map(({ name, path, icon: IconComponent }) => (
            <Link
              key={name}
              to={path}
              className={`flex items-center gap-3 p-2 rounded hover:bg-[#2a2d3a] transition-all
                ${
                  location.pathname === path
                    ? "bg-blue-600 text-white"
                    : "text-gray-300"
                }`}
            >
              <IconComponent size={18} />
              {isOpen && <span className="text-sm ">{name}</span>}
            </Link>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default Sidebar;
