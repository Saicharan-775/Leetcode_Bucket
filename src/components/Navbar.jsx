import React, { useState, useEffect } from "react";
import { User, Plus, Menu ,Search} from "lucide-react";
import "../index.css";
import Button from "../ui/button";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
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
      className={`fixed top-0 left-4  right-4 w-auto z-40 flex items-center justify-between  p-4 md:p-6 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(13,17,19,0.9)] backdrop-blur-md border border-[#61656c]"
          : "bg-[rgba(13,17,19,0.1)] backdrop-blur-sm border border-transparent"
      } ${isSidebarOpen ? 'md:pl-[250px]' : 'md:pl-[60px]'} md:pl-0`}
    >
      {/* Left - Logo and Toggle */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
        >
          <Menu size={16} />
        </button>

        <div className="font-bold flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-amber-50">
          Leetcode Bucket
        </div>
      </div>

      {/* Middle - Search */}
     <div className="flex flex-1 max-w-xs md:max-w-md md:mx-4 relative">
  {/* Search Icon */}
  <Search
    size={16}
    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
  />

  {/* Input Field */}
  <input
    type="text"
    placeholder="Search Problems...."
    className="w-full rounded-md bg-[#16181a] pl-9 md:pl-10 pr-3 md:px-2 py-2 md:py-3 border border-[#3e4146] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-50"
  />
</div>
   
      {/* Right - Buttons */}
      <div className="flex items-center gap-2 md:gap-6 mr-6 md:mr-5">
        <Button icon={Plus} name="Add Problem" />
        <h3 className="cursor-pointer hover:text-amber-50">
          <User />
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
