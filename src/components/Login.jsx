import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
const Login = ({ show, setshow }) => {
  const [detail, setdetail] = useState({
    phone: "",
    // otp: "",
  });

  const handlechange = (e) => {
    const { phone, value } = e.target;
    setdetail((prev) => {
      return { ...prev, [phone]: value };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(detail);
  };

  return (
    <div className="">
      <div
        onClick={() => setshow(!show)}
        className="text-black pl-6 mt-5 cursor-pointer"
      >
        <FaArrowLeft />
      </div>
      <div className="flex justify-center pt-5 ">
        <img
          src="https://cdn.grofers.com/layout-engine/2023-11/app_logo.svg"
          alt="fvhu"
        />
      </div>
      <div className="pt-3 text-center text-black">
        <h1 className="pt-3 text-2xl font-extrabold ">
          India's last minute app
        </h1>
        <h3 className="pt-1 text-base ">Log in or Sign up</h3>
        <form onSubmit={handelSubmit} className="pt-2  ">
          <input
            className="h-11 pl-2 text-black border-2 border-solid rounded outline-none w-[250px]  "
            type="tel"
            name="phone"
            placeholder="Enter your number"
            onChange={handlechange}
          />{" "}
          <br />
          <button className="py-3 mt-3 rounded w-60 text-slate-50   bg-[#0C831F] ">
            Continue
          </button>
          <div className="h-7"></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
