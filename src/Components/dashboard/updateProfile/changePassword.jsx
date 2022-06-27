import React from "react";
import { useRadioGroup } from "@mui/material/RadioGroup";
import Drivers from "../operatorsanddriver/Drivers.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";
import "../updateProfile/style.css";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import SkeletonElement from "./Skeletons/SkeletonElement.jsx";

const ChangePassword = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div>
      <DashNavbar />

      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <form action="" method="post">
            <div className="header">
              <h2>Change Password</h2>

            </div>
            <h3 className="header">Security</h3>
            <div className="contact">
              <div className="contact-left">
                <h5>Change Password*</h5>
                <div className="contact-left-label">
                  {" "}
                  <label htmlFor="email-address">Current Password</label>
                </div>
                <div className="contact-left-input">
                  {" "}
                  <TextField
                    size="small"
                    name="password"
                    type="password"
                    fullWidth
                  />
                </div>
                <div className="contact-left-label">
                  {" "}
                  <label htmlFor="Phone number">New Password</label>
                </div>
                <div className="contact-left-input">
                  {" "}
                  <TextField
                    size="small"
                    name="password"
                    type="password"
                    fullWidth
                  />
                </div>
                <div className="contact-left-label">
                  {" "}
                  <label htmlFor="Phone number">Confirm New Password</label>
                </div>
                <div className="contact-left-input">
                  {" "}
                  <TextField
                    size="small"
                    name="password"
                    type="password"
                    fullWidth
                  />
                </div>
              </div>
            </div>
            <div className="contact">
              <div className="contact-left-save">
                <div className="buttons">
                  <button className="button">Cancel</button>
                  <button className="button-save">Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
