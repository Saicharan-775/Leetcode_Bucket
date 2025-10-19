import React from "react";

const Tags = ({ tag, icon: Icon }) => {
  return (
    <div className="bg-[#1c2121] border border-[#3e4146] rounded-full px-2 py-1 inline-flex items-center gap-1">
      {Icon ? (
        <>
          <Icon size={12} className="text-white" />
          <span className="text-amber-50 text-xs font-medium flex items-center gap-0.5">
            {tag} <span className="text-amber-50 text-xs font-medium">min</span>
          </span>
        </>
      ) : (
        <span className="text-amber-50 text-xs font-medium">{tag}</span>
      )}
    </div>
  );
};

export default Tags;
