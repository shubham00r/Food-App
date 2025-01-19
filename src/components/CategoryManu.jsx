import React, { useState } from "react";
import FoodData from "../Data/FoodData";

function CategoryManu({ same, setFilter }) {
  return (
    <div>
      <h3 className="ml-6 text-xl font-semibold dark:text-slate-50">
        Find the best food
      </h3>
      <div className="flex gap-5 mx-6 mt-5">
        <button
          onClick={() => setFilter(FoodData)}
          className="px-3 py-2 font-bold bg-green-700 rounded-lg text-slate-50 hover:bg-black dark:hover:bg-slate-100 dark:hover:text-black"
        >
          All
        </button>
        <button
          onClick={() => same("Breakfast")}
          className="px-3 py-2 font-bold bg-green-700 rounded-lg text-slate-50 hover:bg-black dark:hover:bg-slate-100 dark:hover:text-black"
        >
          BreakFast
        </button>
        <button
          onClick={() => same("Lunch")}
          className="px-3 py-2 font-bold bg-green-700 rounded-lg text-slate-50 hover:bg-black dark:hover:bg-slate-100 dark:hover:text-black"
        >
          Lunch
        </button>
        <button
          onClick={() => same("Dinner")}
          className="px-3 py-2 font-bold bg-green-700 rounded-lg text-slate-50 hover:bg-black dark:hover:bg-slate-50 dark:hover:text-black"
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
