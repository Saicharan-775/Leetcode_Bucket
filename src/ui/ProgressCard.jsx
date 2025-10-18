import React from 'react';

const ProgressCard = () => {
  // Example data — later i will connect these to backend
  const solved = 190;
  const total = 300;
  const strictSolved = 60;
  const strictTotal = 120;
  const normalSolved = 130;
  const normalTotal = 180;

  // Calculations
  const overallProgress = Math.round((solved / total) * 100);
  const strictProgress = Math.round((strictSolved / strictTotal) * 100);
  const normalProgress = Math.round((normalSolved / normalTotal) * 100);

  return (
    <div className="bg-[#191a20] hover:bg-[#1f2027] transition-all duration-300 p-4 md:p-6 rounded-2xl mb-2 w-full h-fit shadow-lg border border-gray-800">
      {/* Title */}
      <h1 className="text-gray-300 font-semibold text-lg mb-4">Overall Progress</h1>

      {/* Overall Stats */}
      <div className="text-4xl font-bold text-white mb-2">{overallProgress}%</div>
      
      {/* Overall Progress Bar */}
      <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden mb-6">
        <div
          className="bg-indigo-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${overallProgress}%` }}
        ></div>
      </div>
      <p className="text-gray-400 text-sm mb-6">
        You've solved <span className="text-gray-200 font-medium">{solved}</span> out of {total} total problems.
      </p>


      {/* Strict Bucket */}
      <div className="mb-4">
        <div className="flex justify-between mb-1 text-sm text-gray-400">
          <span>Strict Bucket</span>
          <span>
            {strictSolved}/{strictTotal}
          </span>
        </div>
        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-orange-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${strictProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Normal Bucket */}
      <div className="mb-2">
        <div className="flex justify-between mb-1 text-sm text-gray-400">
          <span>Normal Bucket</span>
          <span>
            {normalSolved}/{normalTotal}
          </span>
        </div>
        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-cyan-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${normalProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Motivation text */}
      <p className="text-gray-500 text-sm mt-5 italic">
        {overallProgress < 30 && 'Let’s pick up the pace! 💪'}
        {overallProgress >= 30 && overallProgress < 70 && 'Nice progress! Keep solving 🔥'}
        {overallProgress >= 70 && 'You’re almost there! 🚀'}
      </p>
    </div>
  );
};

export default ProgressCard;
