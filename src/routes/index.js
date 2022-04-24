import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../Components/Home.jsx";
import About from "./../Components/About.jsx";
import UN from "../Components/UN.jsx";

const PhantomRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
                <Route path="un" element={<UN />}></Route>
            </Route>

        </Routes>
    );
};

export default PhantomRoutes;
