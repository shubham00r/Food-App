import React, { useState } from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData";
import CategoryManu from "./CategoryManu";

function FoodItem({ addData, filter, same, setFilter, search }) {
  // const [filteredFoods, setFilteredFoods] = useState([filterData]);

  return (
    <>
      <CategoryManu same={same} setFilter={setFilter} />
      <div className="grid grid-cols-1 gap-5 mx-10 mt-10 md:grid-cols-3 lg:justify-start">
        {filter.map((food) => {
          // console.log(filter);
          return (
            <FoodCard
              key={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              addData={addData}
              food={food}
              id={food.id}
            />
          );
        })}
      </div>
      {filter.length == 0 && (
        <>
          <div className="flex justify-center items-center h-full">
            <img
              src="/img/error.png "
              alt="Error"
              className="w-1/2 sm:w-1/3  md:w-1/4 lg:w-1/5 max-w-full h-auto"
            />
          </div>
          <div className="w-full  pt-72 md:pt-20"></div>
        </>
      )}
    </>
  );
}

export default FoodItem;
