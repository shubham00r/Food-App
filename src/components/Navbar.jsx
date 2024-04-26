import React, { useState } from "react";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";
import FoodData from "../Data/FoodData";
import { useNavigate } from "react-router-dom";

function Navbar({ bgcolor, color, togglebtn, toggle }) {
  const navigate = useNavigate();
  const userRemove = () => {
    // localStorage.removeItem("user");
    localStorage.removeItem("login");
    navigate("/default");
  };
  return (
    <div
      className=""
      style={{
        backgroundColor: `${bgcolor}`,
        color: `${color}`,
      }}
    >
      <nav className="flex flex-col justify-between py-3 mx-6 mb-10 lg:flex-row ">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-yellow-100">
              {new Date().toUTCString().slice(0, 16)}
            </h3>
            <div className="" onClick={togglebtn}>
              {toggle ? (
                <div>
                  <BsToggle2On />
                </div>
              ) : (
                <div>
                  <BsToggle2Off />
                </div>
              )}
            </div>
          </div>
          <h1 className="text-2xl font-bold ">Flavoro Foods</h1>
        </div>
        <div>
          <button
            onClick={userRemove}
            className="bg-[#16A34A] p-[9px] w-20 rounded mr-5"
          >
            Logout
          </button>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search here"
            // onChange={(e) => setinput(e.target.value)}
            // onClick={() => chek()}
            autoComplete="off"
            className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]  text-slate-950"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
