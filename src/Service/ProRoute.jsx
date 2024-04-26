import React from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import Default from "../components/Default";
const ProRoute = () => {
  const auth = localStorage.getItem("login");
  return <>{auth ? <Outlet /> : <Navigate to={"/default"} />}</>;
};

export default ProRoute;
