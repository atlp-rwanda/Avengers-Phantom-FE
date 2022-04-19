import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './redux/store.js'
import Home from './Components/Home.jsx';
import Redux from './Components/Redux.jsx';
import Navbar from './Components/navbar/Navbar.jsx';
import ResetPassword from "./Components/reset/ResetPassword.jsx";
import ResetPage from "./Components/reset/ResetPage.jsx";





export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
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
