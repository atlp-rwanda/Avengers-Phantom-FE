import React from "react";
import { BrowserRouter } from "react-router-dom";
import PhantomRoutes from "./routes/route";
import "./App.css";
import ScrollToTop from "./Components/Homepage/ScrollToTop.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <PhantomRoutes />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
