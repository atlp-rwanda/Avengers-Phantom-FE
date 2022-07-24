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
import Grid from "@material-ui/core/Grid";
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
import DashboardLayout from "./../../../Layouts/Dashboard";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [formData, setFormData] = useState({
    uuid: userData && userData?.uuid,
    name: userData && userData?.name,
    profilePicture: userData && userData?.profilePicture,
    gender: userData && userData?.gender,
    idNumber: userData && userData?.idNumber,
    district: userData && userData?.district,
    sector: userData && userData?.sector,
    cell: userData && userData?.cell,
    email: userData && userData?.email,
    permitId: userData && userData?.permitId,
    telNumber: userData && userData?.telNumber,
    carplate: userData && userData?.carplate,
    capacity: userData && userData?.capacity,
    vehicletype: userData && userData?.vehicletype,
  });

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
  // if(!previewSource) return;
  const encodedImage = uploadImage(previewSource);
  // handle upload button
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setFileInputState(previewSource);
    setFormData({
      ...formData,
      profilePicture: encodedImage,
    });
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    dispatch(updateUserData(formData.uuid, formData));
    setEditMode(false);
  };

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
    <ToastContainer autoClose={500} limit={2} transition={Slide}/>
      {loading ? (
        <UpdateProfileSkeleton />
      ) : (
        <div className="dashboard">
          <div className="containt">
            <form action="" method="post">
              <div className="header block">
                <h2>Profile and visibility</h2>
                <em>
                  Manage your personal information, and control which
                  information other people see and apps may access.
                </em>
              </div>
              <div className="flex-container">
                <div className="flex-item-left">
                  <div className="container-about">
                    <div className="left-about">
                      <h4>User Info:</h4>
                      <div className="align-in">
                        <div className="in-left">
                          <InputLabel id="name">Full name</InputLabel>
                          <TextField
                            size="small"
                            name="name"
                            defaultValue={formData?.name}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                name: event.target.value,
                              })
                            }
                            type="text"
                            fullWidth="true"
                          />
                        </div>
                      </div>

                      <div className="align-in">
                        <div className="in-left">
                          <InputLabel id="gender">Gender</InputLabel>
                          <Select
                            id="select-gender"
                            value={formData?.gender}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                gender: event.target.value,
                              })
                            }
                            size="small"
                            fillWidth
                          >
                            <MenuItem value={"male"}>Male</MenuItem>
                            <MenuItem value={"female"}>Female</MenuItem>
                          </Select>
                        </div>
                      </div>
                      <div className="align-in">
                        <div className="in-left">
                          <InputLabel id="idNumber">ID Number</InputLabel>
                          <TextField
                            size="small"
                            name="idNumber"
                            type="text"
                            value={formData?.idNumber}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                idNumber: event.target.value,
                              })
                            }
                            fullWidth="true"
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
                            value={formData?.district}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                district: event.target.value,
                              })
                            }
                            fullWidth="true"
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
                            value={formData?.sector}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                sector: event.target.value,
                              })
                            }
                            fullWidth="true"
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
                            value={formData?.cell}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                cell: event.target.value,
                              })
                            }
                            fullWidth="true"
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
                            value={formData?.permitId}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                permitId: event.target.value,
                              })
                            }
                            fullWidth="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-item-center"></div>
                <div class="flex-item-right">
                  <div className="image">
                    {(previewSource && (
                      <img src={previewSource} alt="Chosen Profile" />
                    )) || (
                        <img
                          src={formData?.profilePicture}
                          alt="Ancient Profile Picture"
                        />
                      ) || <Skeleton height={100} width={100} />}
                    {<p>{formData?.name}</p> || <Skeleton />}
                    {<h5>{formData?.email}</h5> || <Skeleton />}

                    <div className="buttons">
                      <input
                        type="file"
                        id="upload"
                        onChange={handleFileInputChange}
                        value={setFileInputState}
                        hidden
                      />
                      <label for="upload">Upload</label>
                    </div>
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
                      className="button"
                      onClick={() => setEditMode(false)}
                    >
                      Cancel
                    </button>
                    <button className="button-save" type="submit">
                      Save
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
                      <img src={previewSource} alt="" />
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
      )}
    </DashboardLayout>
  );
};

export default UpdateProfile;
