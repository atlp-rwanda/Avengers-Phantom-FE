import React from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";
import Photo from "../../../static/dashboard_image/photo.jpeg";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";
import "./DriverAndOperator.css";

const drivers = [
  {
    name: "karera",
    role: "driver",
    car: "RAC 123D",
  },
  {
    name: "un francois",
    role: "driver",
    car: "RAC 023f",
  },
];
const operators = [
  {
    name: "amustrong",
    role: "operators",
    car: "RAC 123D",
  },
  {
    name: "un jeado",
    role: "operators",
    car: "RAC 023f",
  },
];
const DriverAndOperator = () => {
  return (
    <div>
      <DashNavbar style={{ position: "fixed" }} />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <h3>Driver and operators managment</h3>
          <hr />
          <div className="driver_operator">
            <div className="driver">
              <Link to="driver">
                <Button text="View driver" bcolor="#012241" />
              </Link>
              {drivers.map((driver, index) => (
                <div key={index} className="component">
                  <div className="component_photo">
                    <img src={Photo} alt="karera" />
                  </div>
                  <div className="component_contain">
                    <h3>{driver.name}</h3>
                    <p>{driver.role}</p>
                    <h4>{driver.car}</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="operator">
              <Link to="operator">
                <Button text="View operator" bcolor="#012241" />
              </Link>
              {operators.map((operator, index) => (
                <div key={index} className="component">
                  <div className="component_photo">
                    <img src={Photo} alt="karera" />
                  </div>
                  <div className="component_contain">
                    <h3>{operator.name}</h3>
                    <p>{operator.role}</p>
                    <h4>{operator.car}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverAndOperator;
