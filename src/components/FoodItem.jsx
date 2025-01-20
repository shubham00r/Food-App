import React, { useState } from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData";
import CategoryManu from "./CategoryManu";

function FoodItem({ addData, filter, same, setFilter, filterData, search }) {
  // const [filteredFoods, setFilteredFoods] = useState([filterData]);

  return (
    <>
      <CategoryManu same={same} setFilter={setFilter} />
      <div className="flex flex-wrap justify-center gap-10 mx-6 my-10 lg:justify-start">
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
    </>
  );
}

export default FoodItem;
