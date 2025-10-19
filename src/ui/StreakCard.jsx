import React from 'react';
import { Flame } from 'lucide-react'; // optional icon for streak 🔥

const StreakCard = () => {
  return (
    <div className='bg-[var(--card)  border border-[var(--card-foreground)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]  w-full p-4 md:p-6 h-fit rounded-2xl transition-all duration-200'>
           <div className='flex items-center justify-between mb-2'>
            <h1 className='font-semibold text-lg text-gray-200'>Current Streak</h1>
             <Flame/>
           </div>
           <div className='text-center'>
            <h1 className='font-bold text-4xl md:text-5xl text-white mb-2 md:mt-10'>12🔥</h1>
            <p className='text-gray-400 text-sm mb-1'>Days in a row</p>
           <p className='text-gray-400 text-sm mt-2'>Keep it up! Your longest streak was 18 days.</p>
           </div>
    </div>
  );
};

export default StreakCard;
