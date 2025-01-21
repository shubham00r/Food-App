import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CategoryManu from "../components/CategoryManu";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";
import FoodData from "../Data/FoodData";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Model from "../components/Model";
import { json } from "react-router-dom";

const getData = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
// import { BrowserRouter, Router, Route } from "react-router-dom";
function Home({ color, bgColor, toggle, togglebtn }) {
  // const [open, setOpen] = useState(true);
  const [filter, setFilter] = useState(FoodData);
  const [cartData, setCartData] = useState(getData());
  const [input, SetInput] = useState("");
  const [search, SetSearch] = useState([]);

  // const [show, setshow] = useState(false);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(cartData));
  }, [cartData]);

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

  const toggleDarkMode = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.add("dark");
    }
  }, []);

  const handelSearch = () => {
    const filterData = FoodData.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilter(filterData);

    console.log(filterData);

    if (filterData.length === 0) {
      console.log("data not found");
    }
  };
  // useEffect(() => {
  //   SetSearch(filterData);
  //   console.log(search);
  // }, [filterData]);
  return (
    <>
      <Navbar
        same={same}
        input={input}
        SetInput={SetInput}
        toggleDarkMode={toggleDarkMode}
        handelSearch={handelSearch}
      />
      {/* <CategoryManu /> */}
      {/* <CategoryManu  /> */}

      {/* {show && (
        <Model setOpen={setOpen} open={open} show={show} setshow={setshow} />
      )} */}
      <FoodItem
        // search={search}
        addData={addData}
        filter={filter}
        same={same}
        setFilter={setFilter}
      />
      <Cart cartData={cartData} count={cartData.length} remove={remove} />
    </>
  );
}

export default Home;
