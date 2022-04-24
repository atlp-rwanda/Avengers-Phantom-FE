import React from "react";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About phantom project</h1>
      <a href="/">Home</a>
      <Outlet />

    </div>
  );
}

export default About;
