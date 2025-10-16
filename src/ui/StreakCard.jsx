import React from 'react';
import { Flame } from 'lucide-react'; // optional icon for streak 🔥

const StreakCard = () => {
  return (
    <div className='bg-[#191a20] hover:bg-[#1f2027] w-full md:w-md p-6 rounded-2xl'>
           <div className='flex items-center justify-between mb-4'>
            <h1 className='font-semibold text-lg text-gray-200'>Current Streak</h1>
             <Flame/>
           </div>
           <div className='text-center'>
            <h1 className='font-bold text-5xl text-white mb-2'>12🔥</h1>
            <p className='text-gray-400 text-sm mb-1'>Days in a row</p>
           <p className='text-gray-400 text-sm'>Keep it up! Your longest streak was 18 days.</p>
           </div>
    </div>
  );
};

export default StreakCard;
