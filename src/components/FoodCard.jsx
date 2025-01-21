import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import FoodData from "../Data/FoodData";
import { Link } from "react-router-dom";

function FoodCard({ id, img, desc, rating, price, name, addData, food }) {
  return (
    <div className="font-bold  w-full md:w-[300px] p-6  bg-slate-500 dark:bg-slate-900 flex flex-col rounded-lg gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Link to={`product/${id}`} className="overflow-hidden rounded-md">
        <img
          src={img}
          alt={name}
          className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
        />
      </Link>

      <div className="flex items-center justify-between text-sm text-white">
        <h2 className="text-lg font-semibold truncate">{name}</h2>
        <span className="text-base font-medium text-green-400">₹{price}</span>
      </div>

      <p className="text-sm font-light text-gray-300 dark:text-gray-200">
        {desc.slice(0, 60)}...
      </p>

      <div className="flex items-center justify-between">
        <span className="flex items-center text-yellow-400">
          <CiStar className="mr-1" />
          <span className="font-medium">{rating}</span>
        </span>
        <button
          onClick={() => addData(food)}
          className="px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 bg-green-500 rounded-lg hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
