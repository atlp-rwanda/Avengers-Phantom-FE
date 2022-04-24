import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Webpack phantom landing page</h1>
      <Link to="about">About us</Link>
      <Link to="ResetPage">Reset Password</Link>
      <Link to="Create New Password">New Password</Link>
      <Link to="dashboard">dashboard</Link>
    </div>
  );
}

export default Home;
