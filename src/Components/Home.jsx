import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Webpack phantom landing page</h1>
      <Link to="about">About us</Link>
      <Link to="ResetPage">Reset Password</Link>
      <Link to="Create New Password">New Password</Link>
    </div>
  );
}

export default Home;
