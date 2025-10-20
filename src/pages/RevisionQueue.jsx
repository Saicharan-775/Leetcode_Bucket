import React from 'react';
import Button from "../ui/button";
import { reviewcards } from "../constants/constants"; // getting review cards data
import { ClipboardClock, RefreshCcw, Play } from "lucide-react";
import StatCards from '../ui/StatCards';
import ProgressBar from '../ui/Progressbar';
import RevisonProblemCard from '../ui/RevisonProblemCard';
import Sidebar from '../ui/Sidebar'; // your sidebar component

const RevisionQueue = () => {
  return (
    <div className="flex min-h-screen">
     
     

      {/* Main Content */}
      <div className="flex-1 p-4 transition-all duration-300">
        {/* Header */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <div className='flex gap-2 items-center'>
            <div className='bg-[#143748] text-[#1990cd] rounded-lg p-2'>
              <ClipboardClock size={28}/>
            </div>
            <div>
              <h1 className='text-3xl font-medium'>Today's Plan</h1>
              <p className='text-[var(--muted-foreground)]'>5 problems remaining • ~2h 15m estimated</p>
            </div>
          </div>

          <div className='flex gap-4 mt-2 md:mt-0'>
            <Button name="Refresh Queue" icon={RefreshCcw} />
            <Button name="Start Session" icon={Play}/>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1400px] mx-auto">
          {reviewcards.map((card, idx) => (
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

        {/* Session Progress */}
   <div className="
  bg-[var(--background)]
  border border-[var(--card-foreground)]/20
  w-full mt-6 rounded-xl p-5
  transition-all duration-300
  hover:border-[var(--card-foreground)]/40
  hover:bg-[var(--primary-foreground)]
  shadow-sm hover:shadow-md
">
  <div className="flex justify-between items-center">
    <h1 className="text-lg font-medium text-[var(--foreground)]">
      Session Progress
    </h1>
    <h1 className="text-sm text-[var(--muted-foreground)]">
      3/5 Problems
    </h1>
  </div>

  <div className="mt-5">
    <ProgressBar value={70} max={100} />
  </div>

  <div className="flex justify-between text-[var(--muted-foreground)] mt-4 text-sm">
    <p>Started</p>
    <p>70% completed</p>
    <p>Finished</p>
  </div>
</div>



        {/* Revision Queue List */}
        <div className='mt-6 w-full max-w-[1400px] mx-auto'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-3xl font-semibold'>Toady's  Problems</h1>
            <p className='text-[var(--muted-foreground)]'>Ordered by priority (Strict problems first)</p>
          </div>

          <div className='flex flex-col gap-4'>
            <RevisonProblemCard bucket="Strict" level="Medium" title="Pascals Triangle" name="pascals-triangle"/>
            <RevisonProblemCard bucket="Strict" level="Hard" title="Trapping Rain Water" name="trapping-rain-water"/>
            <RevisonProblemCard bucket="Normal" level="Easy" title="Two Sum" name="two-sum"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevisionQueue;
