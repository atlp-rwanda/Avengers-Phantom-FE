import React from "react";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";

const Buses = () => {
  return (
    <div>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <h1>Buses</h1>
        </div>
      </div>
    </div>
  );
};

export default Buses;
