import React from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";
import "../Dashboard.css";
import "./DriverAndOperator.css";
import Drivers from "./Drivers.jsx";
import Operators from "./Operators.jsx";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import TabPanel from "@mui/lab/TabPanel";
import DashboardLayout from "../../../Layouts/Dashboard.js";

const DriverAndOperator = ({ sidestyle }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DashboardLayout>
      <div className="dashboard">
        <div className="containt">
          <Box>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  padding: "0 0 0 50px",
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Drivers" value="1" />
                  <Tab label="Operators" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ width: "100%" }}>
                <Drivers />
              </TabPanel>
              <TabPanel value="2">
                <Operators />
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DriverAndOperator;
