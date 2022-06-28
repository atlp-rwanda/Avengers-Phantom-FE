import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllroutes } from "../redux/Action/routes";

import { Routes, Route } from "react-router-dom";
// import Dashboard from "../Components/dashboard/dashboard/Dashboard.jsx";
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
import MapSection from "../Components/Homepage/ClientMap";
import Contact from "../Components/Homepage/Contact.jsx";
import UpdateProfile from "../Components/dashboard/updateProfile"; 

import ChangePassword from "../Components/dashboard/updateProfile/changePassword.jsx";
import { Signin } from "../Components/signin/Signin.jsx";
import ListBuses from "../Components/buses redux/busess.jsx";
import Simulation from "../Components/Simulation/Simulation.js";
import Dashboard from "../Layouts/Dashboard";

const PhantomRoutes = (prop) => {
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
        <Route
          path={`/resertpasswordpage/:${prop.token}`}
          element={<ResetPasswordPage />}
        />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/routes" element={<Routecar />} />
        <Route path="/dashboard/addroute" element={<AddRoutes />} />
        <Route path="/dashboard/singleroute" element={<SingleRoute />} />
        <Route
          path="/dashboard/driveroperator"
          element={<DriverAndOperator />}
        />
        <Route path="/driveroperator/driver" element={<Drivers />} />
        <Route
          path="/dashboard/driveroperator/adddriver"
          element={<AddDrivers />}
        />
        <Route path="/driveroperator/operator" element={<Operators />} />
        <Route
          path="/dashboard/driveroperator/addoperator"
          element={<AddOperator />}
        />
        <Route path="/dashboard/bus" element={<Bus />} />
        <Route path="/dashboard/rolepermission" element={<Roles />} />
        <Route path="/dashboard/buses" element={<Bus />} />
        <Route path="/assign" element={<ListBuses />} />
        <Route path="/dashboard/bus/register" element={<RegisterBus />} />
        <Route path="/dashboard/bus" element={<BusDetails />} />
        <Route path="/dashboard/bus/update" element={<BusUpdate />} />
        <Route path="/dashboard/updateprofile" element={<UpdateProfile />} />
        <Route path="/dashboard/simulation" element={<Simulation />} />
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
      </Routes>
    </div>
  );
};

export default PhantomRoutes;
