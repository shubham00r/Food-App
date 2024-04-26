import React from "react";
import Navbar from "../components/Navbar";
import CategoryManu from "../components/CategoryManu";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";
import FoodData from "../Data/FoodData";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Model from "../components/Model";

// import { BrowserRouter, Router, Route } from "react-router-dom";
function Home({ color, bgColor, toggle, togglebtn }) {
  // const [open, setOpen] = useState(true);
  const [filter, setFilter] = useState(FoodData);
  const [cartData, setCartData] = useState([]);
  // const [show, setshow] = useState(false);
  const addData = (data) => {
    setCartData([...cartData, data]);
    toast("Add To Cart Your Food", {
      type: "success",
      hideProgressBar: true,
    });
    console.log(cartData);
  };

  const remove = (key) => {
    const news = [...cartData];
    news.splice(key, 1);
    setCartData([...news]);
  };

  const same = (category) => {
    const elm = FoodData.filter((e) => e.category == category);

    setFilter(elm);
  };
  return (
    <>
      <Navbar
        bgColor={bgColor}
        color={color}
        toggle={toggle}
        togglebtn={togglebtn}
      />
      {/* <CategoryManu /> */}
      {/* <CategoryManu  /> */}

      {/* {show && (
        <Model setOpen={setOpen} open={open} show={show} setshow={setshow} />
      )} */}
      <FoodItem
        addData={addData}
        filter={filter}
        same={same}
        setFilter={setFilter}
      />
      <Cart
        cartData={cartData}
        count={cartData.length}
        bgColor={bgColor}
        color={color}
        remove={remove}
      />
    </>
  );
}

export default Home;
