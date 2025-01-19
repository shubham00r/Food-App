import React from "react";

export default function ToggleButton({ toggleDarkMode }) {
  return (
    <div onClick={toggleDarkMode} className="relative cursor-pointer">
      <input type="checkbox" id="toggleB" className="sr-only " />
      <div className="block w-8 h-5 bg-white rounded-full bg-gulf-blue"></div>
      <div className="absolute w-3 h-3 transition rounded-full bg-slate-400 dark:translate-x-full dot left-1 top-1 dark:bg-gulf-blue"></div>
    </div>
  );
}
