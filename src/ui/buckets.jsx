import React from "react";
import ProgressBar from "../ui/Progressbar";
import { ArrowRight } from "lucide-react";

const Buckets = ({ borderColor, bgColor, iconColor, icon: Icon, name, description, value }) => {
  return (
    <div className="w-full">
      <div
        className="bg-[var(--card)] mt-5 border-2 p-4 m-1 rounded-xl h-60"
        style={{ borderColor: borderColor }}
      >
        {/* Header */}
        <div className="flex justify-between mt-4">
          <div className="flex gap-2">
            <div
              className="rounded-xl p-2 w-12 h-12 flex items-center justify-center"
              style={{ backgroundColor: bgColor, color: iconColor }}
            >
              {Icon && <Icon size={28} />}
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold">{name}</h1>
              <p className="text-gray-400">{description}</p>
            </div>
          </div>

          <div className="flex items-center">
            <p className="bg-[var(--muted)] rounded-full px-3 py-1 text-sm border border-gray-700">
              24 problems
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="flex justify-between mb-1">
            <h4 className="text-sm font-medium text-gray-300">Progress</h4>
            <h4 className="text-sm font-medium text-gray-300">{value}%</h4>
          </div>
          <ProgressBar value={value} max={100} color={bgColor} />
        </div>

        {/* Footer */}
        <div className="flex justify-between mt-6 items-center">
          <p className="text-gray-400 text-sm">
            <span className="text-amber-400 font-bold">5</span> due problems
          </p>

          <button
            className="inline-flex items-center gap-2 font-medium px-4 py-2 rounded-xl shadow cursor-pointer
                       transition-all duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
            style={{ backgroundColor: bgColor, color: iconColor }}
          >
            Open Bucket <ArrowRight color={iconColor} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buckets;
