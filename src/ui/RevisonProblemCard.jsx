import React from "react";
import "../index.css";
import Tags from "../ui/Tags";
import Button from "./button";
import { ArrowRight, Clock } from "lucide-react";

const RevisonProblemCard = ({ bucket, level, name, title }) => {
  const status = bucket; // "Strict" or "Normal"
  const statusColor = status === "Strict" ? "bg-orange-500" : "bg-blue-500";

  const difficultyColors = {
    Easy: "bg-[var(--easy)]",
    Medium: "bg-[var(--medium)]",
    Hard: "bg-[var(--hard)]",
  };

  const Timers = {
    Easy: 15,
    Medium: 45,
    Hard: 60,
  };

  const color = difficultyColors[level] || "bg-gray-500";
  const timer = Timers[level] || 20;

  return (
    <div
      className="
        relative bg-[var(--card)] mb-2 border border-[var(--card-foreground)] rounded-xl 
        p-4 md:p-5 shadow-md 
        hover:shadow-lg hover:scale-[1.02] 
        transition-transform duration-300 ease-in-out 
        flex flex-col md:flex-row justify-between items-start md:items-center gap-4
        transform-gpu will-change-transform
      "
    >
      {/* 🔴 Status Circle — centered vertically */}
      <div
        className={`absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${statusColor}`}
      ></div>

      {/* Card Content */}
      <div className="flex flex-col gap-3 w-full md:w-auto pl-6">
        {/* Title + Difficulty + Time */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <h1 className="font-medium text-lg text-white">{title}</h1>

          <div className="flex items-center gap-2">
            <p
              className={`text-xs font-semibold text-white px-2 py-1 rounded-3xl ${color}`}
            >
              {level}
            </p>

            <Tags tag={timer} icon={Clock} />
          </div>
        </div>

        {/* Status info */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-[var(--accent-foreground)] text-sm">
          <p>{status}</p>
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
      <div className="w-full md:w-auto">
        <a
          href={`https://leetcode.com/problems/${name}/description/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon={ArrowRight} name="Start" />
        </a>
      </div>
    </div>
  );
};

export default RevisonProblemCard;
