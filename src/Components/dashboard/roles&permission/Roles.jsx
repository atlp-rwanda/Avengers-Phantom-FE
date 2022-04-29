import React from "react";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";

const Roles = () => {
  return (
    <div>
      <DashNavbar style={{ position: "fixed" }} />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <h1>Role</h1>
        </div>
      </div>
    </div>
  );
};

export default Roles;
