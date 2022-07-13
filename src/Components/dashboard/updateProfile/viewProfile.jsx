import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserData,
  updateUserData,
} from "../../../redux/Action/fetchUserData.js";
import { useRadioGroup } from "@mui/material/RadioGroup";
import Drivers from "../operatorsanddriver/Drivers.jsx";
import "../Dashboard.css";
import "../updateProfile/style.css";
import UpdateProfileSkeleton from "./Skeletons/SkeletonElement.jsx";
import axios from "axios";
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
import Skeleton from "react-loading-skeleton";
import SkeletonElement from "./Skeletons/SkeletonElement.jsx";
import Avatar from "@mui/material/Avatar";
import DashboardLayout from "./../../../Layouts/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "@material-ui/core/Grid";


const UpdateProfile = ({ setEditMode }) => {
  const dispatch = useDispatch();
  const userData = useSelector(
    (state) => state.fetchUserData?.user?.data?.user
  );
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  // Preview Image
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };
  // upload Image
  const uploadImage = (base64EncodedImage) => {};
  const encodedImage = uploadImage(previewSource);
  // fetch data
  const handleFetchData = async () => {
    dispatch(fetchUserData());
  };

  useEffect(() => {
    setLoading(true);
    handleFetchData();
    setLoading(false);
  }, []);

  return (
    <DashboardLayout>
      <ToastContainer />
      {loading ? (
        <UpdateProfileSkeleton />
      ) : (
        <div className="dashboard">
          <div className="containt">
            <form action="" method="post">
              <div className="header block">
                <h2>Profile and visibility</h2>
                <em>
                  view and manage your personal information, and control which
                  information other people see and apps may access.
                </em>
              </div>
              <div className="flex-container">
                <div className="flex-item-left">
                  <div className="container-about">
                    <div className="left-about">
                      <h4>Your Info:</h4>
                      <div className="align-in">
                        <div className="in-left">
                          <InputLabel id="name">Full name</InputLabel>
                          <TextField
                            size="small"
                            name="name"
                            value={userData?.name}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                name: event.target.value,
                              })
                            }
                            type="text"
                            fullWidth="true"
                            disabled={true}
                          />
                        </div>
                      </div>
                      <div className="align-in">
                        <div className="in-left">
                          <InputLabel id="gender">Gender</InputLabel>
                          <TextField
                            id="select-gender"
                            value={userData?.gender}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                gender: event.target.value,
                              })
                            }
                            size="small"
                            fullWidth="true"
                            disabled={true}
                          />
                        </div>
                      </div>
                      <div className="align-in">
                        <div className="in-left">
                          <InputLabel id="idNumber">ID Number</InputLabel>
                          <TextField
                            size="small"
                            name="idNumber"
                            type="text"
                            value={userData?.idNumber}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                idNumber: event.target.value,
                              })
                            }
                            fullWidth="true"
                            disabled={true}
                          />
                        </div>
                      </div>
                      <div className="align-in">
                        <div className="in-left">
                          <InputLabel id="district">District</InputLabel>
                          <TextField
                            size="small"
                            name="district"
                            type="text"
                            value={userData?.district}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                district: event.target.value,
                              })
                            }
                            fullWidth="true"
                            disabled={true}
                          />
                        </div>
                      </div>
                      <div className="align-in">
                        <div className="in-left">
                          <InputLabel id="sector">Sector</InputLabel>
                          <TextField
                            size="small"
                            name="sector"
                            type="text"
                            value={userData?.sector}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                sector: event.target.value,
                              })
                            }
                            fullWidth="true"
                            disabled={true}
                          />
                        </div>
                      </div>
                      <div className="align-in">
                        <div className="in-left">
                          <InputLabel id="cell">Cell</InputLabel>
                          <TextField
                            size="small"
                            name="cell"
                            type="text"
                            value={userData?.cell}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                cell: event.target.value,
                              })
                            }
                            fullWidth="true"
                            disabled={true}
                          />
                        </div>
                      </div>
                      <div className="align-in">
                        <div className="in-left">
                          <InputLabel id="permitId">Permit ID</InputLabel>
                          <TextField
                            size="small"
                            name="permitId"
                            type="text"
                            value={userData?.permitId}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                permitId: event.target.value,
                              })
                            }
                            fullWidth="true"
                            disabled={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-item-center"></div>
                <div class="flex-item-right">
                  <div className="image">
                    {previewSource ? (
                      <img src={previewSource} alt="Chosen Profile" />
                    )  : userData?.profilePicture.length !== 0 ? (
                      <img
                        src={userData?.profilePicture[userData?.profilePicture?.length-1]}
                        alt="Ancient Profile Picture"
                      />
                    ): 
                    <Avatar
              className='profilePic'
              alt="profile"
              sx={{ width: 40, height: 40, bgcolor: "#012241" }}
            >
              {userData?.name.charAt(0).toUpperCase()}
            </Avatar>
                    }
                    <p>{userData?.name}</p>
                    <h5>{userData?.email}</h5>
                  </div>
                </div>
              </div>

              <div className="contact__info">
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    Contact Info
                  </Grid>
                  <Grid item xs={6}>
                    Assigned Car Info
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      <div className="contact-left-label">
                        <InputLabel id="telNumber">TelePhone Number</InputLabel>
                      </div>
                      <TextField
                        size="small"
                        name="telNumber"
                        type="text"
                        placeholder="TelePhone Number"
                        value={userData?.telNumber}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            telNumber: event.target.value,
                          })
                        }
                        fullWidth="true"
                        disabled={true}
                      />
                    </div>
                    <div>
                      <div className="contact-left-label">
                        <InputLabel id="telNumber">Email</InputLabel>
                      </div>
                      <TextField
                        size="small"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={userData?.email}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            email: event.target.value,
                          })
                        }
                        fullWidth="true"
                        disabled={true}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="contact-left-label">
                      <InputLabel id="carplate">Carplate</InputLabel>
                    </div>
                    <div>
                      <TextField
                        size="small"
                        name="carplate"
                        type="text"
                        value={userData?.carplate}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            carplate: event.target.value,
                          })
                        }
                        fullWidth="true"
                        disabled={true}
                      />
                    </div>
                    <div className="contact-left-label">
                      <InputLabel id="capacity">Capacity</InputLabel>
                    </div>
                    <div>
                      <TextField
                        size="small"
                        name="capacity"
                        type="text"
                        value={userData?.capacity}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            capacity: event.target.value,
                          })
                        }
                        fullWidth="true"
                        disabled={true}
                      />
                    </div>
                    <div className="contact-left-label">
                      <InputLabel id="vehicletype">Vehicletype</InputLabel>
                    </div>
                    <div>
                      <TextField
                        size="small"
                        name="vehicletype"
                        type="text"
                        value={userData?.vehicletype}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            vehicletype: event.target.value,
                          })
                        }
                        fullWidth="true"
                        disabled={true}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="contact">
                <div className="contact-left-save">
                  <div className="buttons">
                    <button
                      className="button-save"
                      type="submit"
                      onClick={setEditMode}
                    >
                      Edit Profile
                    </button>
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
                      <img src={userData?.profilePicture} alt="" />
                    </div>
                  </DialogContentText>
                </DialogContent>
                <DialogActions className="dialog-btn">
                  <button className="button" onClick={() => setOpen(false)}>
                    Back
                  </button>
                </DialogActions>
              </Dialog>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default UpdateProfile;
