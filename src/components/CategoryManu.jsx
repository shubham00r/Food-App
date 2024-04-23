import React, { useState } from "react";
import FoodData from "../Data/FoodData";

function CategoryManu({ same, setFilter }) {
  return (
    <div>
      <h3 className="ml-6 text-xl font-semibold">Find the best food</h3>
      <div className="flex gap-5 mx-6 mt-5">
        <button
          onClick={() => setFilter(FoodData)}
          className="px-3 py-2 font-bold bg-gray-200 rounded-lg text-slate-950 hover:bg-green-700 hover:text-slate-50"
        >
          All
        </button>
        <button
          onClick={() => same("Breakfast")}
          className="px-3 py-2 font-bold bg-gray-200 rounded-lg text-slate-950 hover:bg-green-700 hover:text-slate-50"
        >
          BreakFast
        </button>
        <button
          onClick={() => same("Lunch")}
          className="px-3 py-2 font-bold bg-gray-200 rounded-lg text-slate-950 hover:bg-green-700 hover:text-slate-50"
        >
          Lunch
        </button>
        <button
          onClick={() => same("Dinner")}
          className="px-3 py-2 font-bold bg-gray-200 rounded-lg text-slate-950 hover:bg-green-700 hover:text-slate-50"
        >
          Dinner
        </button>
        {/* <button onClick={() => same("Dinner")}>Dinner</button>
      <button onClick={() => same("Breakfast")}></button>
      <button onClick={() => setFilter(FoodData)}>Dinner</button> */}
      </div>
    </div>
  );
}

export default CategoryManu;
