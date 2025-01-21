import React, { useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";
const Signup = ({ show, setshow, page, setpage }) => {
  const [loading, SetLoading] = useState(false);

  const navigate = useNavigate();
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
  });
  // let cart = [];
  // const check = () => {
  //   if (input.password.length < 5) {
  //     console.log("no");
  //   } else {
  //     console.log("yes");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetLoading(true);
    if (input.name == "" || input.email == "" || input.password == "") {
      setTimeout(() => {
        toast("Please fill the Form", {
          type: "error",
          hideProgressBar: true,
          theme: "dark",
        });
        // check();
        SetLoading(false);
      }, 1000);
    } else if (input.password.length < 6) {
      SetLoading(true);
      setTimeout(() => {
        toast("Please enter 6 digit password ", {
          type: "error",
          hideProgressBar: true,
          theme: "dark",
        });
        SetLoading(false);
      }, 1000);
    } else {
      SetLoading(true);
      setTimeout(() => {
        localStorage.setItem("user", JSON.stringify(input));
        localStorage.setItem("login", true);

        navigate("/");
        toast("SignUp SuccessFull", {
          type: "success",
          hideProgressBar: true,
        });

        setshow(false);
        SetLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="text-black">
      <div onClick={() => setshow(!show)} className="pl-6 mt-5 cursor-pointer ">
        <FaArrowLeft />
      </div>
      <div className="pt-2 text-3xl font-bold text-center ">
        <h1>SIGNUP</h1>
      </div>
      <div className="pt-3 text-center text-black">
        <h3 className="pt-1 text-base ">Log in or Sign up</h3>
        <form onSubmit={handleSubmit} className="px-12 pt-2">
          <input
            className="w-full pl-2 text-black border-2 border-solid rounded outline-none focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 h-11 "
            type="text"
            name="name"
            value={input.name}
            onChange={(e) =>
              setinput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Enter your Name"
          />{" "}
          <input
            className="w-full pl-2 mt-2 text-black border-2 border-solid rounded outline-none focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 h-11 "
            type="email"
            name="email"
            value={input.email}
            onChange={(e) =>
              setinput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Enter your Email"
          />{" "}
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
              "SIGNUP"
            )}
          </button>
          <h1 className="mt-2">
            Dont have an account?{" "}
            <span
              onClick={() => setpage(!page)}
              className="text-[#87A1E3] cursor-pointer"
            >
              Login
            </span>
          </h1>
          <div className="h-7"></div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
