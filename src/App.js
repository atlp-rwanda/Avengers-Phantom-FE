import React from "react";
import { BrowserRouter } from "react-router-dom";
import PhantomRoutes from "./routes/route";
import "./App.css";
import ScrollToTop from "./Components/Homepage/ScrollToTop.jsx";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
// require('dotenv').config()
const App = () => {
  return (
    <SkeletonTheme baseColor="#e9e9e9" highlightColor="#8e8b8b">
    <BrowserRouter>
      <ScrollToTop>
        <PhantomRoutes />
      </ScrollToTop>
    </BrowserRouter>
    </SkeletonTheme>
  );
};

export default App;
