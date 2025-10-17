import React, { useState, useEffect } from "react";
import { User, Plus, Menu } from "lucide-react";
import "../index.css";
import Button from "../ui/button";

const Navbar = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` fixed w-full z-50 flex items-center justify-between p-4 md:p-6 transition-colors duration-300 ${
        isScrolled
          ? "bg-[rgba(13,17,19,0.9)] backdrop-blur-md border border-[#61656c]"
          : "bg-[rgba(13,17,19,0.1)] backdrop-blur-sm border border-transparent"
      }`}
    >
      {/* Left - Logo and Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
        >
          <Menu size={16} />
        </button>
        <div className="font-bold flex items-center gap-2 text-xl md:text-2xl text-amber-50">
          Leetcode Bucket
        </div>
      </div>

      {/* Middle - Search */}
      <div className="flex flex-1 max-w-xs md:max-w-md mx-2 md:mx-6">
        <input
          type="text"
          placeholder="Search Problems...."
          className="w-full rounded-md bg-[#16181a] px-3 md:px-4 py-2 md:py-3 border border-[#3e4146] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-50"
        />
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center gap-2 md:gap-6 mr-4 md:mr-0">
        <Button icon={Plus} name="Add Problem" />
        <h3 className="cursor-pointer hover:text-amber-50">
          <User />
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
