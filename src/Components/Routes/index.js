import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import About from "../Homepage/About.jsx";
import Home from "../Homepage/Home.jsx";
import Agencies from "../Homepage/Agencies.jsx";
import Contact from "../Homepage/Contact.jsx";
import Error from "../Error.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../Homepage/Footer.jsx";
import Services from "../Homepage/Services.jsx";




const PhantomRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<><Navbar /><About /><Contact /></>} />
            {/* </Route> */}
            <Route path="/agencies" element={<><Navbar /><Agencies /><Contact /></>} />
            <Route path="/contacts" element={<><Navbar /><Contact /></>} />
            <Route path="/services" element={<><Navbar /><Services /> <Contact /></>} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default PhantomRoutes;
