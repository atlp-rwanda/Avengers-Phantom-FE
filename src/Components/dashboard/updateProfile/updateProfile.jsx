import React from "react";
import Drivers from "../operatorsanddriver/Drivers.jsx";
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
} from "@mui/material";
import { useState } from "react";
import SkeletonElement from "./Skeletons/SkeletonElement.jsx";
import DashboarLayout from "./../../../Layouts/Dashboard";

const UpdateProfile = () => {
  const [open, setOpen] = useState(false);
  return (
    <DashboarLayout>
      <div className="dashboard">
        <div className="containt">
          <form action="" method="post">
            <div className="header">
              <h2>Profile and visibility</h2>
              <p>Manage your personal information, and control which</p>
              <p>information other people see and apps may access.</p>
            </div>
            <h3 className="header">About You</h3>
            <div class="flex-container">
              {/* About you Division */}
              <div class="flex-item-left">
                <div className="container-about">
                  <div className="left-about">
                    <h4>User Info:</h4>
                    <h4 className="whocanseethis">
                      <b>who can see this ?</b>
                    </h4>
                    {/* INPUTS */}

                    <div className="align-in">
                      <div className="in-left">
                        <label htmlFor="Full name">Full name</label>
                        <br></br>
                        <TextField
                          size="small"
                          name="fullname"
                          type="text"
                          fullWidth
                        />
                      </div>
                      <div className="in-right">
                        <div className="flex-container">
                          <div className="any-right">
                            <img
                              src="https://thumbs.dreamstime.com/z/earth-icon-globe-symbol-isolated-transparent-background-planet-112427230.jpg"
                              alt=""
                            />
                          </div>
                          <div className="any-left">
                            <h4>Anyone</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="align-in">
                      <div className="in-left">
                        <label htmlFor="Full name">Public name</label>
                        <br></br>
                        <TextField
                          size="small"
                          name="fullname"
                          type="text"
                          fullWidth
                        />
                      </div>
                      <div className="in-right">
                        <div className="flex-container">
                          <div className="any-right">
                            <img
                              src="https://thumbs.dreamstime.com/z/earth-icon-globe-symbol-isolated-transparent-background-planet-112427230.jpg"
                              alt=""
                            />
                          </div>
                          <div className="any-left">
                            <h4>Anyone</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="align-in">
                      <div className="in-left">
                        <label htmlFor="Full name">Based in</label>
                        <br></br>
                        <TextField
                          size="small"
                          name="fullname"
                          type="text"
                          fullWidth
                        />
                      </div>
                      <div className="in-right">
                        <div className="flex-container">
                          <div className="any-right">
                            <img
                              src="https://thumbs.dreamstime.com/z/earth-icon-globe-symbol-isolated-transparent-background-planet-112427230.jpg"
                              alt=""
                            />
                          </div>
                          <div className="any-left">
                            <h4>Anyone</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="align-in">
                      <div className="in-left">
                        <label htmlFor="Full name">Based in</label>
                        <br></br>
                        <TextField
                          size="small"
                          name="fullname"
                          type="text"
                          fullWidth
                        />
                      </div>
                      <div className="in-right">
                        <div className="flex-container">
                          <div className="any-right">
                            <img
                              src="https://thumbs.dreamstime.com/z/earth-icon-globe-symbol-isolated-transparent-background-planet-112427230.jpg"
                              alt=""
                            />
                          </div>
                          <div className="any-left">
                            <h4>Anyone</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="align-in">
                      <div className="in-left">
                        <label htmlFor="Full name">Based in</label>
                        <br></br>
                        <TextField
                          size="small"
                          name="fullname"
                          type="text"
                          fullWidth
                        />
                      </div>
                      <div className="in-right">
                        <div className="flex-container">
                          <div className="any-right">
                            <img
                              src="https://thumbs.dreamstime.com/z/earth-icon-globe-symbol-isolated-transparent-background-planet-112427230.jpg"
                              alt=""
                            />
                          </div>
                          <div className="any-left">
                            <h4>Anyone</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* END OF INPUTS */}
                  </div>
                </div>
              </div>
              {/* end off about  */}
              <div class="flex-item-center"></div>
              <div class="flex-item-right">
                <div className="image">
                  <img
                    src="http://products.metalloinvest.com/upload/iblock/b5b/userProfileIcon_gray.png"
                    alt=""
                  />
                  <p>Ben Iraa</p>
                  <h5>beniraa50@gmail.com</h5>

                  <div className="buttons">
                    <button className="button" onClick={() => setOpen(true)}>
                      View
                    </button>
                    <input type="file" id="upload" hidden />
                    <label for="upload">Update</label>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="header">Contact Info:</h3>
            <div className="contact">
              <div className="contact-left">
                <div className="contact-left-label">
                  {" "}
                  <label htmlFor="email-address">Email address</label>
                </div>
                <div className="contact-left-input">
                  {" "}
                  <TextField size="small" name="email" type="email" fullWidth />
                </div>
                <div className="contact-left-label">
                  {" "}
                  <label htmlFor="Phone number">Phone Number</label>
                </div>
                <div className="contact-left-input">
                  {" "}
                  <TextField size="small" name="phone" type="email" fullWidth />
                </div>
              </div>
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

            <Dialog
              className="dialog"
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="dialog-title"
              aria-describedby="dialog-description"
            >
              <DialogTitle id="dialog-title"></DialogTitle>
              <DialogContent>
                <DialogContentText id="dialog-description">
                  <div className="image-dialoge">
                    <img
                      src="http://products.metalloinvest.com/upload/iblock/b5b/userProfileIcon_gray.png"
                      alt=""
                    />
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions className="dialog-btn">
                <button className="button" onClick={() => setOpen(false)}>
                  Cancel
                </button>
                <button
                  className="button-delete"
                  onClick={() => setOpen(false)}
                >
                  Delete
                </button>
              </DialogActions>
            </Dialog>
          </form>
        </div>
      </div>
    </DashboarLayout>
  );
};

export default UpdateProfile;
