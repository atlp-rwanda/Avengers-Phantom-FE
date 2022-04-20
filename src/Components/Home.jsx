import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Webpack phantom landing page</h1>
      <Link to="about">About us</Link>
    </div>
  );
}

export default Home;
