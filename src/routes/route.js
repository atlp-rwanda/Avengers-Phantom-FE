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
import Bus from "../Components/dashboard/buses/Buses.jsx";
import Routecar from "../Components/dashboard/route/Route.jsx";
import Home from "../Components/Homepage/Home.jsx";
import { useLocation } from "react-router-dom";
import "../Components/dashboard/Dashboard.css";
import About from "../Components/Homepage/About.jsx";
import Services from "../Components/Homepage/Services.jsx";
import Navbar from "../Components/navbar/Navbar.jsx";
import Contact from "../Components/Homepage/Contact.jsx";
import Signin from "../Components/signin/Signin.jsx";

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
              <Contact />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Contact />
            </>
          }
        />
        <Route
          path="/contact%20US"
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
        <Route path="/logout" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default PhantomRoutes;
