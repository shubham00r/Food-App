import React, { useState } from "react";
import Model from "./Model";

const Default = ({ setpage, page }) => {
  const [show, setshow] = useState(false);
  const [open, setOpen] = useState(true);
  const handleSignup = () => {
    setpage(false);
    setshow(!show);
  };
  const handleLogin = () => {
    setpage(true);
    setshow(!show);
  };

  return (
    <div className="Default">
      <div className="relative">
        <img
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          alt=""
        />
        <div className="absolute top-2">
          <button
            onClick={handleLogin}
            className="bg-[#16A34A] p-[9px] w-20 rounded mr-5"
          >
            Login
          </button>
          <button
            onClick={handleSignup}
            className="bg-[#16A34A] p-[9px] w-20 rounded mr-5"
          >
            Signup
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
        <Model
          setOpen={setOpen}
          open={open}
          show={show}
          setshow={setshow}
          setpage={setpage}
          page={page}
        />
      )}
    </div>
  );
};

export default Default;
