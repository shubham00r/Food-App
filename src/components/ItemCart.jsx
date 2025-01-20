import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
function ItemCart({ cartData, remove }) {
  return (
    <div
      // style={{
      //   maxHeight: "360px",
      //   overflowY: "scroll",
      // }}
      className="flex-col flex-wrap gap-12 p-2 mb-3 rounded-lg shadow-md flex-"
    >
      {cartData.map((item) => {
        return (
          <>
            <div className="flex items-center gap-2 ">
              <img src={item.img} alt="" className="w-11 h-11" />
              <div className="leading-5">
                <h2 className="font-bold text-gray-800"></h2>
                <div className="flex flex-col justify-between">
                  <span className="text-xs text-green-500 ">
                    {item.name.slice(0, 9) + "..."}
                  </span>
                  <span className="text-xs font-medium text-green-500">
                    {item.price}
                  </span>
                  <div className="absolute flex items-center justify-center gap-2 right-3">
                    <AiOutlineMinus className="p-1 text-xl text-gray-600 transition-all ease-linear border-2 border-gray-600 rounded-md cursor-pointer hover:text-white hover:bg-green-500 hover:border-none" />
                    <span>1</span>
                    <AiOutlinePlus className="p-1 text-xl text-gray-600 transition-all ease-linear border-2 border-gray-600 rounded-md cursor-pointer hover:text-white hover:bg-green-500 hover:border-none" />
                    <MdDelete
                      onClick={() => {
                        remove();
                      }}
                      className="text-gray-600 cursor-pointer "
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ItemCart;
