import React, { useState } from "react";

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex-shrink-0 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <div
        className={`
          w-5 h-5 border-2 border-gray-500 rounded-md
          flex items-center justify-center
          bg-[var(--card)]
          transition-colors duration-200
        `}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </label>
  );
};

export default CustomCheckbox;
