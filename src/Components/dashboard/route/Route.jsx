import { Container } from "@mui/material";
import React from "react";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";

const Route = () => {
  return (
    <div>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <h1>Route</h1>
        </div>
      </div>
    </div>
  );
};

export default Route;
