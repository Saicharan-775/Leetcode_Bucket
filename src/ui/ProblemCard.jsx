import React from "react";
import { ExternalLink, FolderSync, Calendar } from "lucide-react";
import Tags from "./Tags";
import Button from "../ui/button";
import CustomCheckbox from "../ui/checkbox";
const ProblemCard = () => {
  return (
    <div className="
      relative 
      bg-[var(--card)] 
      border border-[#3e4146] 
      rounded-2xl 
      mt-4 
      flex items-center
      p-4 
      hover:shadow-lg hover:scale-[1.02] transition-transform duration-300
    ">
      {/* ---------- Checkbox Section ---------- */}
      <div className="flex-shrink-0">
      <div className="flex-shrink-0">
        <CustomCheckbox />
      </div>
      </div>

      {/* ---------- Main Content ---------- */}
      <div className="flex-1 ml-4 flex flex-col gap-2">
        {/* Title + Difficulty + Status */}
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="font-semibold text-lg text-white">Two Sum</h1>
          <span className="bg-green-700 text-white text-xs px-2 py-1 rounded-full">
            Easy
          </span>
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            Pending
          </span>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-gray-300 text-sm items-center">
          <p className="flex items-center gap-1">
            <Calendar size={14} /> Last: 2d ago
          </p>
          <p className="flex items-center gap-1">
            <Calendar size={14} /> Next: Tomorrow
          </p>
          <p>Attempts: 2</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-1">
          <Tags tag="Array" />
          <Tags tag="Dynamic Programming" />
          <Tags tag="Binary Search" />
          <Tags tag="Binary Tree" />
        </div>
      </div>

      {/* Buttons */}
      <div className="ml-4 flex-shrink-0 flex gap-2">
        <Button name="Leetcode" icon={ExternalLink} size="sm" />
        <Button name="Move To Strict" icon={FolderSync} size="sm" />
      </div>
    </div>
  );
};

export default ProblemCard;
