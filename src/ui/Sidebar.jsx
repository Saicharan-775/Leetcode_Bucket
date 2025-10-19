import React from "react";
import {

  Menu,
  
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { sections } from "../constants/constants";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();


  return (
    <div className="main-container h-screen">
      <div
        className={`h-full flex flex-col transition-all duration-300 fixed z-50 top-0 
        ${isOpen ? "w-[250px]" : "w-[60px]"}
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        bg-[var(--card)] backdrop-blur-md border-r border-[#2a2d3a] shadow-[0_4px_20px_rgba(0,0,0,0.4)]`}
      >
        {/* Top Section */}
        <div className="flex items-center justify-between px-3 mt-4">
          {isOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 flex items-center justify-center text-sm font-semibold shadow-md">
                SC
              </div>
              <div>
                <p className="text-xs text-gray-400">Welcome back,</p>
                <h2 className="text-sm font-medium text-white">Saicharan</h2>
              </div>
            </div>
          )}
          <button
            className="bg-[#1b1f28] hover:bg-[#1b1f25] rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={16} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-5 mt-8 px-2 font-medium">
          {sections.map((section) => (
            <div key={section.heading}>
              {isOpen && (
                <p className="text-xs uppercase text-gray-500 px-2 mb-1 tracking-wider">
                  {section.heading}
                </p>
              )}
              {section.links.map(({ name, path, icon: IconComponent, color }) => {
                const isActive = location.pathname === path;
                const accentColor = color || "#a855f7"; // default purple for others

                return (
                  <Link
                    key={name}
                    to={path}
                    className={`relative flex items-center gap-3 p-2 rounded-lg transition-all duration-200 
                      ${
                        isActive
                          ? "bg-[#1b1f28] text-white"
                          : "text-gray-300 hover:bg-[#2a2d3a]"
                      }`}
                    style={{
                      borderLeft: isActive
                        ? `3px solid ${accentColor}`
                        : "3px solid transparent",
                    }}
                  >
                    <IconComponent
                      size={22}
                      color={isActive ? accentColor : color || "#ccc"}
                    />
                    {isOpen && (
                      <span
                        className={`text-sm transition-opacity duration-200  ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          color: isActive ? accentColor : undefined,
                        }}
                      >
                        {name}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
