import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Succes from "./pages/Succes";
import Error from "./pages/Error";
import Cart from "./components/Cart";
import FoodCard from "./components/FoodCard";
import FoodDetail from "./components/FoodDetail";
import { ToastContainer } from "react-toastify";
import ProRoute from "./Service/ProRoute";
import Default from "./components/Default";

function App() {
  const [bgColor, setbgColor] = useState("black");
  const [color, setColor] = useState("white");
  const [toggle, settoggle] = useState(true);

  const togglebtn = () => {
    settoggle(!toggle);
    if (toggle) {
      setbgColor("#ffff");
      setColor("black");
      // document.querySelectorAll("body").style.backgroundColor = "#cbc5c5";
    } else {
      setbgColor("black");
      setColor("#ffff");
      // document.querySelectorAll("body").style.backgroundColor = "#cbc5c5";
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProRoute />}>
            <Route
              path="/"
              element={
                <Home
                  bgcolor={setbgColor}
                  color={setColor}
                  toggle={toggle}
                  togglebtn={togglebtn}
                />
              }
            />

            <Route path="/product/:id/" element={<FoodDetail />} />

            <Route path="/success" element={<Succes />} />
            <Route path="/*" element={<Error />} />
            <Route
              path="/cart"
              element={<Cart setbgColor={setbgColor} setColor={setColor} />}
            />
          </Route>
          <Route path="/default" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
