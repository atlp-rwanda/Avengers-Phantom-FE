import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './redux/store.js'
import Home from './Components/Homepage/Home.jsx';
// import Redux from './Components/Redux.jsx';
import Navbar from './Components/navbar/Navbar.jsx';
import ScrollToTop from './Components/Homepage/ScrollToTop.jsx'
import  {Signin} from "./Components/signin/Signin.jsx";
import  {Roles} from "./Components/Roles&permision/Roles.jsx";
import  ResetPage from "./Components/reset/ResetPage.jsx";
import  {MaterialUI} from "./Components/Dashboardcont/container.jsx";



export default function App() {
  return (
    <BrowserRouter>
    {/* <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        </Route>
        
      </Routes>
    </ScrollToTop> */}
    <Routes>
      <Route path="/" element={<Navbar />}>
       <Route index element={<Home/>} />
       <Route path='/HOME' element={<Home/>}/>
       <Route path='/reset' element={<ResetPage/>}/>
       <Route path='/signin' element={<Signin/>}/>
       <Route path='/SERVICES' element={<Roles/>}/>
       
       
      </Route>
      <Route path="/dashboard" element={<MaterialUI/>}>
         <Route path='/dashboard/roles' element={<Roles/>}/>
         <Route path='/dashboard/buses' element={<Roles/>}/>
         <Route path='/dashboard/operation' element={<Roles/>}/>
         <Route path='/dashboard/routes' element={<Roles/>}/>
         <Route path='/dashboard/dashboard' element={<MaterialUI/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("app")
);