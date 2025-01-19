import React, { useState } from "react";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";
import FoodData from "../Data/FoodData";
import { useNavigate } from "react-router-dom";
import ToggleButton from "./ToggleButton";

// const allCategories = ["all", ...new Set(FoodData.map((item) => item.name))];
// console.log(allCategories);
function Navbar({ toggleDarkMode, input, SetInput }) {
  const navigate = useNavigate();
  const userRemove = () => {
    // localStorage.removeItem("user");
    localStorage.removeItem("login");
    navigate("/default");
  };

  // serachBtn();
  return (
    <div className="">
      <nav className="flex flex-col justify-between py-3 mx-6 mb-10 lg:flex-row ">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-black dark:text-green-400">
              {new Date().toUTCString().slice(0, 16)}
            </h3>
            <div>
              <ToggleButton toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-black dark:text-slate-100 ">
            Flavoro Foods
          </h1>
        </div>
        <div>
          <button
            onClick={userRemove}
            className="bg-black  text-slate-50 dark:text-[#000]  dark:bg-green-400 p-[9px] w-20 rounded mr-5"
          >
            Logout
          </button>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search here"
            value={input}
            onChange={(e) => SetInput(e.target.value)}
            autoComplete="off"
            className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]  text-slate-950"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
