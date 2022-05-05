import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/dashboard/dashboard/Dashboard.jsx";
import Drivers from "../Components/dashboard/operatorsanddriver/Drivers.jsx";
import AddDrivers from "../Components/dashboard/operatorsanddriver/AddDrivers.jsx";
import Operators from "../Components/dashboard/operatorsanddriver/Operators.jsx";
import ResetPage from "../Components/reset/ResetPage.jsx";
import ResetPasswordPage from "../Components/reset/ResetPassword.jsx";
import AddOperator from "../Components/dashboard/operatorsanddriver/AddOperator.jsx";
import DriverAndOperator from "../Components/dashboard/operatorsanddriver/DriverAndOperator.jsx";
import Roles from "../Components/dashboard/roles&permission/Roles.jsx";
import Bus from "../Components/dashboard/buses/BusesList.jsx";
import Routecar from "../Components/dashboard/route/RoutesReport.jsx";
import AddRoutes from "../Components/dashboard/route/AddRoutes.jsx";
import SingleRoute from "../Components/dashboard/route/SingleRoutes.jsx";
import Home from "../Components/Homepage/Home.jsx";
import { useLocation } from "react-router-dom";
import "../Components/dashboard/Dashboard.css";
import About from "../Components/Homepage/About.jsx";
import Services from "../Components/Homepage/Services.jsx";
import Navbar from "../Components/navbar/Navbar.jsx";
import Testimonials from "../Components/Homepage/Testimonial.jsx";
import Agency from "../Components/Homepage/Agencies.jsx";
import RegisterBus from "../Components/dashboard/buses/RegisterBus.jsx";
import BusDetails from "../Components/dashboard/buses/BusDetail.jsx";
import BusUpdate from "../Components/dashboard/buses/updateBus.jsx";
import Footer from "../Components/Homepage/Footer.jsx";
import Manuals from "../Components/Homepage/Manuals.jsx";
import MapSection from "../Components/Homepage/MapSection.jsx";
import Contact from "../Components/Homepage/Contact.jsx";
import UpdateProfile from "../Components/dashboard/updateProfile/updateProfile.jsx";
import {Signin} from "../Components/signin/Signin.jsx";

const PhantomRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" index element={<Home />} />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Manuals />
              <MapSection />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Agency />
              <Testimonials />
              <Contact />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/signin"
          element={
            <>
              <Navbar />
              <Signin />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/reset"
          element={
            <>
              <Navbar />
              <ResetPage />
            </>
          }
        />
        <Route path="/resertpasswordpage" element={<ResetPasswordPage />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/routes" element={<Routecar />} />
        <Route path="/addroute" element={<AddRoutes />} />
        <Route path="/singleroute" element={<SingleRoute />} />
        <Route path="/driveroperator" element={<DriverAndOperator />} />
        <Route path="/driveroperator/driver" element={<Drivers />} />
        <Route
          path="/driveroperator/driver/adddriver"
          element={<AddDrivers />}
        />
        <Route path="/driveroperator/operator" element={<Operators />} />
        <Route
          path="/driveroperator/operator/addoperator"
          element={<AddOperator />}
        />
        <Route path="/bus" element={<Bus />} />
        <Route path="/rolepermission" element={<Roles />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/bus/register" element={<RegisterBus />} />
        <Route path="/bus/1" element={<BusDetails />} />
        <Route path="/bus/1/update" element={<BusUpdate />} />

        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/logout" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default PhantomRoutes;