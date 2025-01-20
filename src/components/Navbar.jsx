import React from "react";
import ToggleButton from "./ToggleButton";
import { useNavigate } from "react-router-dom";

function Navbar({ toggleDarkMode, input, SetInput }) {
  const navigate = useNavigate();

  const userRemove = () => {
    localStorage.removeItem("login");
    navigate("/default");
  };

  return (
    <div className="">
      <nav className="flex flex-col items-center justify-between px-6 py-4 space-y-4 lg:flex-row lg:space-y-0">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-black dark:text-slate-100">
            YummyYard
          </h1>
          <ToggleButton toggleDarkMode={toggleDarkMode} />
        </div>

        {/* Date */}
        <div className="text-lg font-semibold text-black dark:text-green-400">
          {new Date().toUTCString().slice(0, 16)}
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center w-full space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 lg:w-auto">
          {/* Logout Button */}
          <button
            onClick={userRemove}
            className="px-6 py-2 transition-colors bg-black rounded-lg text-slate-50 dark:text-black dark:bg-green-400 hover:bg-gray-800 dark:hover:bg-green-500"
          >
            Logout
          </button>

          {/* Search Input */}
          <input
            type="search"
            placeholder="Search here"
            value={input}
            onChange={(e) => SetInput(e.target.value)}
            autoComplete="off"
            className="w-full lg:w-[300px] py-2 px-4 border border-gray-400 text-sm rounded-lg outline-none text-slate-950 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-green-400"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
