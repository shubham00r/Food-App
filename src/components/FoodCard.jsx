import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import FoodData from "../Data/FoodData";
import { Link } from "react-router-dom";

function FoodCard({ id, img, desc, rating, price, name, addData, food }) {
  return (
    <div className="font-bold w-[250px] p-5 bg-slate-800    flex flex-col rounded-lg gap-2 ">
      <Link to={`product/${id}`}>
        <img
          src={img}
          alt=""
          className=" w-full h-[200px] hover:scale-110 cursor-grab translate-all  duration-500 ease-in-out"
        />
      </Link>

      <div className="flex justify-between text-sm">
        <h2>{name}</h2>
        <span className="text-green-400">{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}</p>
      <div className="flex justify-between ">
        <span className="flex items-center justify-center">
          <CiStar className="mr-1 text-yellow-400" />
          {rating}
        </span>
        <button
          onClick={() => addData(food)}
          className="p-2 text-sm text-white bg-green-400 rounded-lg hover:bg-green-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
