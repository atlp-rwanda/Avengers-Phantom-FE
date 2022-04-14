import { Container } from "@mui/material";
import React from "react";
<<<<<<< HEAD
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import RoutesReport from "./RoutesReport.jsx";
import "../Dashboard.css";

const Route = () => {
  return (
    <div>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">{/* <RoutesReport /> */}</div>
      </div>
    </div>
=======

const Route = () => {
  return (
    <Container>
      <h1>Route</h1>
    </Container>
>>>>>>> 07ad962e (ft signin rebase)
  );
};

export default Route;
