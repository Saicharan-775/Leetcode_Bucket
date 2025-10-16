import React from 'react';

const Tags = ({ tag }) => {
  return (
    <div className="bg-[#1c2121] border border-[#3e4146] rounded-full px-3 py-1 inline-flex items-center">
      <p className="text-amber-50 text-xs font-medium">{tag}</p>
    </div>
  );
};

export default Tags;
