import React from "react";
import { BrowserRouter } from "react-router-dom";
import PhantomRoutes from "./routes/route";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <PhantomRoutes />
    </BrowserRouter>
  );
};

export default App;
