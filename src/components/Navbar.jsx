import React from "react";
import { User ,Plus } from 'lucide-react';
import '../index.css';
import Button from '../ui/button'

const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 w-full z-50 flex items-center justify-between  bg-[#0d1113] border border-[#61656c] text-amber-50 p-6 shadow-md">
      
      {/* Left - Logo */}
      <div className="font-bold flex items-center gap-2  text-2xl ">Leetcode Bucket</div>

      {/* Middle - Search */}
      <div className="flex flex-1 max-w-md mx-6">
        <input
          type="text"
          placeholder="Search Problems...."
          className="w-full rounded-md bg-[#16181a] px-4 py-3 border border-[#3e4146] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-50"
        />
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center gap-6">
      
                <Button icon={Plus}name="Add Problem"/>
        <h3 className="cursor-pointer hover:text-amber-50"> <User /></h3>
      </div>
    </nav>
  );
};

export default Navbar;
