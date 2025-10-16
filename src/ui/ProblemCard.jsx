import React from "react";
import {
  ExternalLink,
  FolderSync,
  Calendar,
} from "lucide-react";
import Tags from "./Tags";
import Button from "../ui/button";

const ProblemCard = () => {
  return (
    <div className="bg-[#181a21] border border-[#3e4146] w-full max-w-[1400px] rounded-2xl mt-5 flex">
      {/* ---------- Checkbox Section ---------- */}
      <div className="flex items-start p-4">
        <input
          type="checkbox"
          className="w-6 h-6  rounded-md border-2 mt-15 border-gray-500 cursor-pointer 
                     checked:bg-green-500 checked:border-green-500 transition-all"
        />
      </div>

      {/* ---------- Main Content Section ---------- */}
      <div className="flex-1 p-4">
        {/* Title + Level + Status */}
        <div className="flex items-center gap-4 mb-3">
          <h1 className="font-bold text-lg">Two Sum</h1>
          <span className="bg-green-800 text-white text-xs px-3 py-1 rounded-full">
            Easy
          </span>
          <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
            Pending
          </span>
        </div>

        {/* Meta Info + Buttons */}
        <div className="flex justify-between items-center mb-3">
          {/* Left side meta */}
          <div className="flex gap-6 text-sm text-gray-300">
            <p className="flex items-center gap-1">
              <Calendar size={16} /> Last: 2 days ago
            </p>
            <p className="flex items-center gap-1">
              <Calendar size={16} /> Next: Tomorrow
            </p>
            <p className="flex items-center gap-1">Attempts: 2</p>
          </div>

          {/* Right side buttons */}
          <div className="flex gap-3">
            <Button name="Leetcode" icon={ExternalLink} />
            <Button name="Move To Strict" icon={FolderSync} />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Tags tag="Array" />
          <Tags tag="Dynamic Programming" />
          <Tags tag="Binary Search" />
          <Tags tag="Binary Tree" />
        </div>

        {/* Hint */}
        <div>
          <p className="text-sm text-gray-400">
            💡 Hint: Remember to use HashMap and manipulate sum
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;