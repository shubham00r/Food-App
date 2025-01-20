import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import ItemCart from "./ItemCart";
import { MdShoppingCart } from "react-icons/md";
import FoodData from "../Data/FoodData";
import NoItem from "./NoItem";
// console.log(FoodData);
function Cart({ cartData, count, remove }) {
  console.log(cartData);
  const [activeCart, setactiveCart] = useState(false);

  const TotalCount = cartData.reduce((acc, item) => acc + item.price, 0);
  console.log(TotalCount);
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full md:w-[20vw] h-full  bg-slate-50 ${
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

            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-slate-800">
              <h3 className="font-semibold"></h3>
              <hr className="w-[90vw] md:w-[18vw]  my-2" />
              <button className="px-3 py-2 font-bold bg-green-500 rounded-lg text-slate-100 w-[90vw] md:w-[18vw] mb-5">
                Checkout
              </button>
            </div>

            <div className="max-w-md p-4 mx-auto bg-white rounded-lg shadow-md">
              {/* Bill Details Section */}
              <div className="mb-6">
                <h3 className="mb-4 text-lg font-bold">Bill details</h3>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-gray-600">Total Amount</span>
                  </div>
                  <div>
                    <span className="font-bold">{TotalCount}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-gray-600">Total Item:</span>
                  </div>
                  <div>
                    <span className="font-bold">{cartData.length}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-gray-600">Delivery charge</span>
                  </div>
                  <div>
                    <span className="mr-2 text-gray-500 line-through">₹25</span>
                    <span className="font-bold text-green-500">FREE</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-gray-600">Handling charge</span>
                    <span
                      className="ml-1 text-gray-400 cursor-pointer"
                      title="Handling charges include packaging and delivery adjustments."
                    >
                      ℹ️
                    </span>
                  </div>
                  <span className="font-bold">₹5</span>
                </div>
              </div>

              {/* Cancellation Policy Section */}
              {/* <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="mb-1 font-bold ">Cancellation Policy</h3>
                <p className="text-sm text-gray-600">
                  Orders cannot be cancelled once packed for delivery. In case
                  of unexpected delays, a refund will be provided, if
                  applicable.
                </p>
              </div> */}
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
