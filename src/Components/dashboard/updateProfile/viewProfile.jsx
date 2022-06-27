import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData, updateUserData } from "../../../redux/Action/fetchUserData.js"; 
import { useRadioGroup } from "@mui/material/RadioGroup";
import Drivers from "../operatorsanddriver/Drivers.jsx";
import "../Dashboard.css";
import "../updateProfile/style.css";
import UpdateProfileSkeleton from "./Skeletons/SkeletonElement.jsx";
import axios from "axios";
import { Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, TextField, Select, MenuItem, InputLabel, } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import SkeletonElement from "./Skeletons/SkeletonElement.jsx";
import DashboardLayout from "./../../../Layouts/Dashboard"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UpdateProfile = ({setEditMode}) => {
  const dispatch = useDispatch(); 
  const userData = useSelector(state => state.fetchUserData?.user?.data?.user) 
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("") 

  // Preview Image 
  const previewFile = (file) => {
    const reader =new FileReader();
    reader.readAsDataURL(file); 
    reader.onload = () =>{
      setPreviewSource(reader.result);
    }
  }
  // upload Image
  const uploadImage = (base64EncodedImage) => {
  }  
  const encodedImage = uploadImage(previewSource);
    // fetch data
  const handleFetchData = async () => {
    dispatch(fetchUserData()) 
  };

  useEffect(() => {
  setLoading(true)
  handleFetchData();
    setLoading(false);
  },[]); 

  return (
    <DashboardLayout>
      <ToastContainer />
      { loading ? <UpdateProfileSkeleton /> : (
      <div className="dashboard">
        <div className="containt">
          <form action="" method="post">
            <div className="header block">
              <h2>Profile and visibility</h2>
              <em>
                view and manage your personal information, and control which information
                other people see and apps may access.
              </em>
            </div>
            <h3 className="header">About You</h3>
            <div className="flex-container">
              {/* About you Division */}
              <div className="flex-item-left">
                <div className="container-about">
                  <div className="left-about">
                    <h4>Your Info:</h4>
                    <h4 className="whocanseethis">
                      <b>who can see this ?</b>
                    </h4>
                    {/* INPUTS */}
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
                      <div className="in-right">
                        <div className="flex-container">
                          <div className="any-right">
                            {(
                              <img
                                src="https://thumbs.dreamstime.com/z/earth-icon-globe-symbol-isolated-transparent-background-planet-112427230.jpg"
                                alt=""
                              />
                            ) || <Skeleton />}
                          </div>
                          <div className="any-left">
                            <h4>Anyone</h4>
                          </div>
                        </div>
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
              {/* Upload image */}
              <div class="flex-item-right">
                <div className="image">
                  {previewSource && (<img
                    src={previewSource}
                    alt="Chosen Profile" 
                  />) || (<img src= {userData?.profilePicture} alt="Ancient Profile Picture" />)}
                  <p>{userData?.name}</p>
                  <h5>{userData?.email}</h5>
                </div>
              </div>
               {/* End of Upload image */}
            </div>
            <h3 className="header">Contact Info:</h3>
            <div className="contact">
              <div className="contact-left">
                <div className="contact-left-label">
                  {" "}
                  <InputLabel id="telNumber">TelePhone Number</InputLabel>
                </div>
                <div className="contact-left-input">
                  {" "}
                  <TextField
                    size="small"
                    name="telNumber"
                    type="text"
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
                {/* email */}
                <div className="contact-left-label">
                  {" "}
                  <InputLabel id="email">Email</InputLabel>
                </div>
                <div className="contact-left-input">
                  {" "}
                  <TextField
                    size="small"
                    name="email"
                    type="email"
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
              </div>
            </div>

            {/* carplate */}
            <h3 className="header">Asigned Car Info:</h3>
            <div className="contact">
              <div className="contact-left">
                <div className="contact-left-label">
                  <InputLabel id="carplate">Carplate</InputLabel>
                </div>
                <div className="contact-left-input">
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
                {/* capacity */}
                <div className="contact-left-label">
                  {" "}
                  <InputLabel id="capacity">Capacity</InputLabel>
                </div>
                <div className="contact-left-input">
                  {" "}
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
                {/* vehicletype */}
                <div className="contact-left-label">
                  <InputLabel id="vehicletype">Vehicletype</InputLabel>
                </div>
                <div className="contact-left-input">
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
              </div>
            </div>
            <div className="contact">
              <div className="contact-left-save">
                <div className="buttons">
                  <button className="button-save" type="submit" onClick={setEditMode}>
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
                    <img
                      src={userData?.profilePicture}
                      alt=""
                    />
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
