import React from "react";
import Drivers from "../operatorsanddriver/Drivers.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
