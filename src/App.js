import React from "react";
import { BrowserRouter } from "react-router-dom";
import PhantomRoutes from "./routes";


const App = () => {

    return (
        <BrowserRouter>
            <PhantomRoutes />
        </BrowserRouter>
    );
}

export default App
