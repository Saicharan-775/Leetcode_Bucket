import React from "react";

const ProgressBar = ({ value, max, color = "#3b82f6" }) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full bg-[#1e1e2d] rounded-full h-4 overflow-hidden">
      <div
        className="h-4 rounded-full transition-all duration-300"
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ProgressBar;
