import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './redux/store.js'
<<<<<<< HEAD
<<<<<<< HEAD
import Home from './Components/Homepage/Home.jsx';
=======
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
>>>>>>> Add Navbar with Dummy Link
=======
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
>>>>>>> Add Navbar with Dummy Link
import Redux from './Components/Redux.jsx';
import Navbar from './Components/navbar/Navbar.jsx';
import ScrollToTop from './Components/Homepage/ScrollToTop.jsx'
import PhantomRoutes from "./Components/Routes/index.js";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <PhantomRoutes />
      </ScrollToTop>
    </BrowserRouter>
  );
}

// Create root Component
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)