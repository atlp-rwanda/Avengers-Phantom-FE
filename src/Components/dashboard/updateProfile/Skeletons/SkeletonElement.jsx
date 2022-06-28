import React from 'react';
import '../style.css'; 
import Skeleton from "react-loading-skeleton";
import { Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, TextField, Select, MenuItem, InputLabel, } from "@mui/material";

 
const UpdateProfileSkeleton = ()  => {
    return (
        <div className="dashboard">
    <div className="containt">
        <div className="header block">
            <h2>Profile and visibility</h2>
            <em>
                Manage your personal information, and control which information
                other people see and apps may access.
            </em>
        </div>
    <h3 className="header">About You</h3>
    <div className="flex-container">
        {/* About you Division */}
        <div className="flex-item-left">
            <div className="container-about">
                <div className="left-about">
                       <h4> <Skeleton /></h4>
                    <h4 className="whocanseethis">
                            <Skeleton width={150}/>
                    </h4>
                    {/* INPUTS */}
                    <div className="align-in">
                        <div className="in-left">
                            <InputLabel id="name">
                                <Skeleton width={200}/>
                            </InputLabel>
                            <Skeleton height={35} />
                        </div>
                        <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                    <Skeleton />
                                </div>
                                <div className="any-left">
                                    <h4>
                                        <Skeleton />
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="align-in">
                        <div className="in-left">
                            <InputLabel id="gender">
                                <Skeleton width={200}/>
                            </InputLabel>
                            <Skeleton width={80} height={35} />
                        </div>
                        <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                <Skeleton />
                                </div>
                                <div className="any-left">
                                        <Skeleton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="align-in">
                        <div className="in-left">
                            <InputLabel id="idNumber">
                                <Skeleton width={200}/>
                            </InputLabel>
                            <Skeleton height={35} />
                        </div>
                        <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                <Skeleton />
                                </div>
                                <div className="any-left">
                                        <Skeleton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="align-in">
                        <div className="in-left">
                            <InputLabel id="district">
                                <Skeleton width={200}/>
                            </InputLabel>
                            <Skeleton height={35} />
                        </div>
                        <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                <Skeleton />
                                </div>
                                <div className="any-left">
                                <Skeleton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="align-in">
                        <div className="in-left">
                            <InputLabel id="sector">
                                <Skeleton width={200}/>
                            </InputLabel>
                            <Skeleton height={35} />
                        </div>
                        <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                <Skeleton />
                                </div>
                                <div className="any-left">
                                        <Skeleton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="align-in">
                        <div className="in-left">
                            <InputLabel id="cell">
                                <Skeleton width={200}/>
                            </InputLabel>
                            <Skeleton height={35} />
                        </div>
                        <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                <Skeleton />
                                </div>
                                <div className="any-left">
                                        <Skeleton />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="align-in">
                        <div className="in-left">
                            <InputLabel id="permitId">
                                <Skeleton width={200}/>
                            </InputLabel>
                            <Skeleton height={35} />
                        </div>
                        <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                <Skeleton />
                                </div>
                                <div className="any-left">
                                        <Skeleton />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* END OF INPUTS */}
                </div>
            </div>
        </div>
        {/* end off about */}
        <div class="flex-item-center"></div>
        {/* Upload image */}
        <div class="flex-item-right">
            <div className="image">
                <Skeleton height={200} width={200} />
                <Skeleton width={200}/>
                <Skeleton width={200}/>
                <Skeleton width={100}/>
            </div>
        </div>
        {/* End of Upload image */}
        </div>
    <h3 className="header">Contact Info:</h3>
            <div className="contact">
              <div className="contact-left">
                <div className="contact-left-label">
                  {" "}
                  <InputLabel id="telNumber"><Skeleton width={200}/></InputLabel>
                </div>
                <div className="contact-left-input">
                  {" "}
                  <Skeleton height={35}/> 
                </div>
                {/* email */}
                <div className="contact-left-label">
                  {" "}
                  <InputLabel id="email"><Skeleton width={200}/></InputLabel>
                </div>
                <div className="contact-left-input">
                  {" "}
                  <Skeleton height={35}/>
                </div>
              </div>
            </div>

 {/* carplate */}
 <h3 className="header">Asigned Car Info:</h3>
            <div className="contact">
              <div className="contact-left">
                <div className="contact-left-label">
                  <InputLabel id="carplate"><Skeleton width={200}/></InputLabel>
                </div>
                <div className="contact-left-input">
                   <Skeleton height={35}/>
                </div>
                {/* capacity */}
                <div className="contact-left-label">
                  {" "}
                  <InputLabel id="capacity"><Skeleton width={200}/></InputLabel>
                </div>
                <div className="contact-left-input">
                  {" "}
                  <Skeleton height={35}/>
                </div>
                {/* vehicletype */}
                <div className="contact-left-label">
                  <InputLabel id="vehicletype"><Skeleton width={200}/></InputLabel>
                </div>
                <div className="contact-left-input">
                  <Skeleton height={35}/>
                </div>
              </div>
            </div>
    </div>
</div>
    )}

export default UpdateProfileSkeleton;
