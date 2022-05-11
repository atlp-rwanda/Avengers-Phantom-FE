import { Container } from "@mui/material";
import React from "react";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import RoutesReport from "./RoutesReport.jsx";
import "../Dashboard.css";
​
const Route = () => {
  return (
    <div>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">{/* <RoutesReport /> */}</div>
      </div>
    </div>
  );
};
​
export default Route;