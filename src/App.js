import { ImportantDevices } from "@mui/icons-material";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import PhantomRoutes from "./routes";
import skeletonElement from "./skeleton/SkeletonElement.js";

const App = () => {

    return (

        <BrowserRouter>
            <PhantomRoutes />
        </BrowserRouter>
    );
}

export default App
