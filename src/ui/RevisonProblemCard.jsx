import React from "react";
import "../index.css";
import Tags from "../ui/Tags";
import Button from "./button";
import { ArrowRight } from "lucide-react";
const RevisonProblemCard = () => {
  return (
    <div className="bg-[var(--card)] border border-[var(--card-foreground)] rounded-xl p-5 shadow-md hover:shadow-lg transition flex justify-between items-center">
      {/* Left Content */}
      <div className="flex flex-col gap-3">
        {/* Title and Difficulty */}
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-lg text-white">Two Sum</h1>
          <p className="text-xs font-semibold text-white px-2 py-1 rounded-md" style={{ backgroundColor: "#166534" }}>
            Easy
          </p>
        </div>

        {/* Status info */}
        <div className="flex gap-6 text-[var(--accent-foreground)] text-sm">
          <p>Strict</p>
          <p>Failed 2 Days Ago</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Tags tag="Array" />
          <Tags tag="Dynamic Programming" />
          <Tags tag="Binary Search" />
          <Tags tag="Binary Tree" />
        </div>
      </div>

      {/* Start Button */}
      <div>
         <Button icon={ArrowRight}name="Start"/>
          
        
      </div>
    </div>
  );
};

export default RevisonProblemCard;
