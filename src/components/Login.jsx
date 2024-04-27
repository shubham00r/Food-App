import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";
const Login = ({ show, setshow, page, setpage }) => {
  const [loading, SetLoading] = useState(false);
  const Navigate = useNavigate();
  const [input, setinput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    let userData = JSON.parse(localStorage.getItem("user"));
    if (input.email == userData.email && input.password == userData.password) {
      SetLoading(true);
      setTimeout(() => {
        toast("Login SuccessFully", {
          type: "success",
          hideProgressBar: true,
        });

        localStorage.setItem("login", true);
        SetLoading(false);
        setshow(false);
        Navigate("/");
      }, 1000);
    } else {
      SetLoading(true);
      setTimeout(() => {
        toast("User not Found ", {
          type: "error",
          hideProgressBar: true,
          theme: "dark",
        });
        SetLoading(false);
      }, 1000);
    }
  };
  return (
    <div className="text-black">
      <div onClick={() => setshow(!show)} className="pl-6 mt-5 cursor-pointer ">
        <FaArrowLeft />
      </div>
      <div className="flex justify-center text-3xl font-bold ">
        <h1>LOGIN</h1>
      </div>
      <div className="pt-3 text-center text-black">
        <h3 className="pt-1 text-base ">Log in or Sign up</h3>
        <form onSubmit={handleLogin} className="px-12 pt-2">
          <input
            className="w-full pl-2 text-black border-2 border-solid rounded outline-none focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 h-11 "
            value={input.email}
            name="email"
            onChange={(e) =>
              setinput({ ...input, [e.target.name]: e.target.value })
            }
            type="email"
            placeholder="Enter your Email"
          />{" "}
          <br />
          <input
            className="w-full pl-2 mt-2 text-black border-2 border-solid rounded outline-none focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 h-11 "
            type="password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setinput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Enter your password"
          />{" "}
          <br />
          <button className="py-3 mt-3 rounded w-60 text-slate-50   bg-[#0C831F] ">
            {loading ? (
              <div className="flex justify-center ">
                <TailSpin color="white" height={25} />
              </div>
            ) : (
              "LOGIN"
            )}
          </button>
          <h1 className="mt-2">
            Dont have an account?{" "}
            <span
              onClick={() => setpage(!page)}
              className="text-[#87A1E3] cursor-pointer"
            >
              SignUp
            </span>
          </h1>
          <div className="h-7"></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
