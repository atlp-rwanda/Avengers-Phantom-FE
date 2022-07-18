import React from "react";
import { Outlet } from "react-router";
import { Signin } from "../Components/signin/Signin.jsx";

const Token = localStorage.getItem("token");
console.log("token", Token);
const privateRoutes = () => {
  return Token !== null ? <Outlet /> : <Signin />;
};
export default privateRoutes;
