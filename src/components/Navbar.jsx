import React from "react";
import ToggleButton from "./ToggleButton";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function Navbar({ toggleDarkMode, input, SetInput, handelSearch }) {
  const navigate = useNavigate();

  const userRemove = () => {
    localStorage.removeItem("login");
    navigate("/default");
  };

  const handleKeyPress = (e) => {
    if (input.length > 0) {
      if (e.key === "Enter") {
        e.preventDefault(); // Prevent form submission if inside a form
        handelSearch();
      }
    }
  };
  return (
    <div className="">
      <nav className="flex flex-col items-center justify-between px-6 py-4 space-y-4 lg:flex-row lg:space-y-0">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* <img className="w-10 h-10" src="/img/foodlogo.png" alt="" /> */}
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
          <div className="relative w-full lg:w-[300px]">
            <input
              type="search"
              placeholder="Search here"
              onKeyDown={handleKeyPress}
              value={input}
              onChange={(e) => SetInput(e.target.value)}
              className="w-full px-4 py-2 pl-10 text-sm border border-gray-400 rounded-lg outline-none text-slate-950 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-green-400"
            />
            <span className="cursor-pointer" onClick={handelSearch}>
              <FaSearch className="cu absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2 dark:text-gray-200" />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
