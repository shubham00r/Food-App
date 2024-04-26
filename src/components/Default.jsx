import React, { useState } from "react";
import Model from "./Model";

const Default = () => {
  const [show, setshow] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <div className="Default">
      <div className="relative">
        <img
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          alt=""
        />
        <div className="absolute top-2">
          <button
            onClick={() => setshow(!show)}
            className="bg-[#16A34A] p-[9px] w-20 rounded mr-5"
          >
            Login
          </button>
        </div>
        <div className="absolute top-32  text-center right-[370px]">
          <h1>Flavoro</h1>
          <p className="text-3xl font-normal leading-10 ">
            Find the best restaurants, cafés and <br /> bars in India
          </p>
        </div>
      </div>
      {show && (
        <Model setOpen={setOpen} open={open} show={show} setshow={setshow} />
      )}
    </div>
  );
};

export default Default;
