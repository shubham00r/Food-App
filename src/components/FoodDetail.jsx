import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodData from "../Data/FoodData";

function FoodDetail() {
  const { id } = useParams();
  const [product, setproduct] = useState({});

  useEffect(() => {
    const ProduDetail = FoodData.filter((e) => e.id == id);
    setproduct(ProduDetail[0]);

    // console.log(ProduDetail);
  });
  console.log(product);
  return (
    <div className="">
      <div className="flex justify-between ">
        <div className="w-96">
          <img src={product.img} alt="" />
        </div>
        <div>
          <h1>{product.name}</h1>
          <h1>12 MINS</h1>
          <hr />
          <div className="flex justify-between">
            <div className="">
              <h1></h1>
              <h1>MRP{product.price}</h1>
              <p>Inclusive of all taxes</p>
            </div>
            <div>
              <button className="p-1  text-sm h-9 text-white bg-green-400 rounded-md hover:bg-green-700">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetail;
