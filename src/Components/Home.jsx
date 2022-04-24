import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx";
import ResetForm from "./ResetPassword/ResetForm.jsx";


function Home() {
  return (
    // <div>
    //   <h1>Webpack phantom landing page</h1>
    //   <Link to="about">About us</Link>
    //   <br />
    //   <Link to="reset">Reset Password</Link>
    // </div>
    <React.Fragment>
      <Navbar />
      <ResetForm />
    </React.Fragment>
  );
}

export default Home;
