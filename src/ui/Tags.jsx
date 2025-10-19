import React from 'react';

const Tags = ({ tag,icon:Icon }) => {
  return (
    <div className="bg-[#1c2121] border border-[#3e4146] rounded-full px-2 py-1 inline-flex items-center">
      <p className='p-0.5 mr-0.5 '>{Icon && <Icon size={12} />}</p> 
      <p className="text-amber-50 text-xs font-medium">{tag}</p>
     
    </div>
  );
};

export default Tags;
