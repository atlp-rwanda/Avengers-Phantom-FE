import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/dashboard/dashboard/Dashboard.jsx';
import Drivers from '../Components/dashboard/operatorsanddriver/Drivers.jsx';
import AddDrivers from '../Components/dashboard/operatorsanddriver/AddDrivers.jsx';
import Operators from '../Components/dashboard/operatorsanddriver/Operators.jsx';
import ResetPage from '../Components/reset/ResetPage.jsx';
import ResetPasswordPage from '../Components/reset/ResetPassword.jsx';
import AddOperator from '../Components/dashboard/operatorsanddriver/AddOperator.jsx';
import DriverAndOperator from '../Components/dashboard/operatorsanddriver/DriverAndOperator.jsx';
import Roles from '../Components/dashboard/roles&permission/Roles.jsx';
import Bus from '../Components/dashboard/buses/Buses.jsx';
import Routecar from '../Components/dashboard/route/Route.jsx';
import AppBar from '../Components/dashboard/dashnavbar/DashNavBar.jsx';
import DashboardSidebar from '../Components/dashboard/sidebar/Sidebar.jsx';
import Home from '../Components/Homepage/Home.jsx';
import { useLocation } from 'react-router-dom';
import '../Components/dashboard/Dashboard.css';

const PhantomRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route path='/' index element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/resertpassword' element={<ResetPage />} />
        <Route path='/resertpasswordpage' element={<ResetPasswordPage />} />
      </Routes>
      {location.pathname === '/dashboard' && (
        <>
          <AppBar />
          <div className='dashboard'>
            <div className='generalmenubar'>{<DashboardSidebar />}</div>

            <div className='containt'>
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/routes' element={<Routecar />} />
                <Route path='/driveroperator' element={<DriverAndOperator />} />
                <Route path='/driveroperator/driver' element={<Drivers />} />
                <Route
                  path='/driveroperator/driver/adddriver'
                  element={<AddDrivers />}
                />
                <Route
                  path='/driveroperator/operator'
                  element={<Operators />}
                />
                <Route
                  path='/driveroperator/operator/addoperator'
                  element={<AddOperator />}
                />
                <Route path='/bus' element={<Bus />} />
                <Route path='/rolepermission' element={<Roles />} />
                <Route path='/bus' component={<Bus />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PhantomRoutes;
