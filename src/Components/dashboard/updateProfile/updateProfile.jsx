import React from "react";
import Drivers from '../operatorsanddriver/Drivers.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import DashNavbar from '../dashnavbar/DashNavBar.jsx';
import '../Dashboard.css';
import '../updateProfile/style.css';
import Button from '../operatorsanddriver/Button.jsx';

const UpdateProfile = () => {
  return (
    <div>
      <DashNavbar />
      <div className='dashboard'>
        <div className='generalmenubar'>{<Sidebar />}</div>
        <div className='containt'>
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
                       <h4 className="whocanseethis"><b>who can see this ?</b></h4>
                       {/* INPUTS */}
                        <div className="align-in">
                            <div className="in-left">
                                <label htmlFor="Full name">Full name</label><br></br>
                                <input type="text" name="fullname"  />
                            </div>
                            <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                    <img src="https://thumbs.dreamstime.com/z/earth-icon-globe-symbol-isolated-transparent-background-planet-112427230.jpg" alt="" />
                                </div>
                                <div className="any-left"><h4>Anyone</h4></div>
                            </div>    
                                
                            </div>
                        </div> 

                        <div className="align-in">
                            <div className="in-left">
                                <label htmlFor="Full name">Public name</label><br></br>
                                <input type="text" name="fullname"  />
                            </div>
                            <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                    <img src="https://thumbs.dreamstime.com/z/earth-icon-globe-symbol-isolated-transparent-background-planet-112427230.jpg" alt="" />
                                </div>
                                <div className="any-left"><h4>Anyone</h4></div>
                            </div>  
                            </div>
                        </div> 
                        <div className="align-in">
                            <div className="in-left">
                                <label htmlFor="Full name">Based in</label><br></br>
                                <input type="text" name="fullname"  />
                            </div>
                            <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                    <img src="https://thumbs.dreamstime.com/z/earth-icon-globe-symbol-isolated-transparent-background-planet-112427230.jpg" alt="" />
                                </div>
                                <div className="any-left"><h4>Anyone</h4></div>
                            </div>  
                            </div>
                        </div> 
                        <div className="align-in">
                            <div className="in-left">
                                <label htmlFor="Full name">Based in</label><br></br>
                                <input type="text" name="fullname"  />
                            </div>
                            <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                    <img src="https://thumbs.dreamstime.com/z/earth-icon-globe-symbol-isolated-transparent-background-planet-112427230.jpg" alt="" />
                                </div>
                                <div className="any-left"><h4>Anyone</h4></div>
                            </div>  
                            </div>
                        </div> 
                        <div className="align-in">
                            <div className="in-left">
                                <label htmlFor="Full name">Based in</label><br></br>
                                <input type="text" name="fullname"  />
                            </div>
                            <div className="in-right">
                            <div className="flex-container">
                                <div className="any-right">
                                    <img src="https://thumbs.dreamstime.com/z/earth-icon-globe-symbol-isolated-transparent-background-planet-112427230.jpg" alt="" />
                                </div>
                                <div className="any-left"><h4>Anyone</h4></div>
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
                    <img src="http://products.metalloinvest.com/upload/iblock/b5b/userProfileIcon_gray.png" alt="" />
                    <p>Ben Iraa</p>
                    <h5>beniraa50@gmail.com</h5>

                    <div className="buttons">
                       <button className="button">View</button>
                       <input type="file" id="upload" hidden/>
                       <label for="upload">Update</label>

                    </div>
                </div>
              
            </div>
         </div>
         <h3 className="header">Contact Info:</h3>
         <div className="contact">
            <div className="contact-left">
                <div className="contact-left-label"> <label htmlFor="email-address">Email address</label></div>
                <div className="contact-left-input"> <input type="email" name="email-address" /></div>
                <div className="contact-left-label"> <label htmlFor="Phone number">Phone Number</label></div>
                <div className="contact-left-input"> <input type="text" name="phone" /></div>
               
            </div> 
        </div> 
        <h3 className="header">Security</h3>
        <div className="contact">
            <div className="contact-left">
                <h5>Change Password</h5>
                <div className="contact-left-label"> <label htmlFor="email-address">Current Password</label></div>
                <div className="contact-left-input"> <input type="email" name="email-address" /></div>
                <div className="contact-left-label"> <label htmlFor="Phone number">New Password</label></div>
                <div className="contact-left-input"> <input type="text" name="phone" /></div>
               
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
        
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
