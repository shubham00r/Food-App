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
        {/* Background Image */}
        <img
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          alt="Background"
          className="object-cover w-full h-screen"
        />

        {/* Login & Signup Buttons */}
        <div className="absolute flex gap-4 right-4 top-4">
          <button
            style={{
              border: "1px solid white",
              transition: "0.5s ease-in-out",
            }}
            onClick={handleLogin}
            className="w-20 p-2 font-bold text-white bg-transparent rounded hover:bg-green-600"
          >
            Login
          </button>
          <button
            style={{
              border: "1px solid white",
              transition: "0.5s ease-in-out",
            }}
            onClick={handleSignup}
            className="w-20 p-2 font-bold text-white bg-transparent rounded hover:bg-green-600"
          >
            Signup
          </button>
        </div>

        {/* Center Text */}
        <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            YummyYard
          </h1>
          <p className="text-sm leading-snug text-white sm:text-base sm:leading-relaxed md:text-xl lg:text-2xl xl:text-3xl">
            Find the best restaurants, cafés, and{" "}
            <br className="hidden sm:block" /> bars in India
          </p>
        </div>
      </div>

      {/* Model Component */}
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
