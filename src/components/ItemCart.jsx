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
      className="flex-col flex-wrap gap-2 p-2 mb-3 rounded-lg shadow-md flex-"
    >
      {cartData.map((item) => {
        return (
          <>
            <div className="flex items-center gap-2 ">
              <img src={item.img} alt="" className="w-[50px] h-[50px]" />
              <div className="leading-5">
                <h2 className="font-bold text-gray-800"></h2>
                <div className="flex justify-between ">
                  <span className="font-bold text-green-500">120</span>
                  <div className="absolute flex items-center justify-center gap-2 right-7">
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
