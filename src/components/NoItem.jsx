import React from "react";

function NoItem({ setactiveCart, activeCart }) {
  return (
    <div>
      <div>
        <img
          src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
          alt=""
        />
      </div>
      <div className="text-center text">
        <p className="text-lg text-black">
          You don't have any items in your cart
        </p>
        <p className=" text-[#999CA6] text-sm">
          Your favourite items are just a click away
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setactiveCart(!activeCart)}
            id="btn"
            className="w-20 h-8 bg-green-900"
          >
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoItem;
