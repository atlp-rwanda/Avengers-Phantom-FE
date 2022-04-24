import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./../Components/Home.jsx";
import About from "./../Components/About.jsx";
import UN from "../Components/UN.jsx";
import ResetForm from "./../Components/ResetPassword/ResetForm.jsx"

const PhantomRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}>
                <Route path="us" element={<About />}>
                    <Route path="un" element={<UN />}></Route>
                </Route>
            </Route>
            <Route path="/about/login" element={<About />} />
        </Routes>
    );
};

export default PhantomRoutes;
