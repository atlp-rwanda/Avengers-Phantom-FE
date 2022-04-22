import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './redux/store.js'
<<<<<<< HEAD
import Home from './Components/Homepage/Home.jsx';
=======
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
>>>>>>> Add Navbar with Dummy Link
import Redux from './Components/Redux.jsx';
import Navbar from './Components/navbar/Navbar.jsx';
import ScrollToTop from './Components/Homepage/ScrollToTop.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>

        </Routes>
      </ScrollToTop>
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
