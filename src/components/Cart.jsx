import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import ItemCart from "./ItemCart";
import { MdShoppingCart } from "react-icons/md";
import FoodData from "../Data/FoodData";
import NoItem from "./NoItem";
// console.log(FoodData);
function Cart({ cartData, count, remove }) {
  // console.log(count);
  const [activeCart, setactiveCart] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full md:w-[20vw] h-full bg-slate-50 ${
          activeCart ? "translate-x-0 " : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between px-3 my-3">
          <span className="text-xl font-bold text-slate-900 ">My order</span>
          <AiFillCloseCircle
            onClick={() => setactiveCart(!activeCart)}
            className="p-1 text-2xl font-bold text-gray-600 border-2 border-gray-600 rounded-md cursor-pointer hover:text-red-900"
          />
        </div>
        {count > 0 ? (
          <div>
            <ItemCart cartData={cartData} remove={remove} />
            <div className="absolute bottom-0 text-slate-800">
              <h3 className="font-semibold">Item</h3>
              <h3 className="font-semibold">Total Amount:</h3>
              <hr className="w-[90vw] md:w-[18vw]  my-2" />
              <button className="px-3 py-2 font-bold bg-green-500 rounded-lg text-slate-100 w-[90vw] md:w-[18vw] mb-5">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <NoItem setactiveCart={setactiveCart} activeCart={activeCart} />
        )}
      </div>

      <div
        onClick={() => setactiveCart(!activeCart)}
        className="fixed flex items-center w-auto p-3 text-5xl bg-green-600 rounded shadow-md cursor-pointer bottom-4 right-4"
      >
        <MdShoppingCart className="text-4xl"></MdShoppingCart>
        {count > 0 ? (
          <span className="text-base font-bold text-slate-50 ">
            {count} items
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Cart;
