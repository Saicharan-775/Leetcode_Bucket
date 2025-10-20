import React from "react";
import { StrictCard } from "../constants/constants";
import StatCards from "../ui/StatCards";
import { ClipboardClock, RefreshCcw, Play ,Search, Filter, SortDesc} from "lucide-react";
import Button from "../ui/button";
import ProblemCard from "../ui/ProblemCard";

const StrictBucket = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 xl:px-8 mt-5 -ml-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
        <div className="flex gap-3 items-center">
          <div className="bg-[#143748] text-[#1990cd] rounded-xl p-3">
            <ClipboardClock size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Strict Bucket</h1>
            <p className="text-[var(--muted-foreground)] text-sm md:text-base">
              2 problems remaining today • ~1h 45m estimated
            </p>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4 mt-2 md:mt-0">
          <Button name="Refresh Queue" icon={RefreshCcw} />
          <Button name="Start Session" icon={Play} />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-[1600px] mx-auto">
        {StrictCard.map((card, idx) => (
          <StatCards
            key={idx}
            title={card.title}
            value={card.value}
            icons={card.icons}
            bgColor={card.bgColor}
            iconColor={card.iconColor}
          />
        ))}
      </div>
      {/* Search, filter and sort */}
   <div className="flex items-center gap-2 mt-4">
  <div className="relative flex-1">
    <Search
      size={20}
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
    />
    <input
      type="text"
      placeholder="Search Problems"
      className="bg-[var(--card)] border border-[var(--card-foreground)] w-sm rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-1"
    />
  </div>

  <div className="flex gap-2">
    <Button name="Filter" icon={Filter} />
    <Button name="Sort" icon={SortDesc} />
  </div>
</div>
    <div>
      <ProblemCard/>
      <ProblemCard/>
      <ProblemCard/>
      <ProblemCard/>
      <ProblemCard/>
      <ProblemCard/>
    </div>

    </div>
  );
};

export default StrictBucket;
