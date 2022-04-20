import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store.js";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Redux from "./Components/Redux.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redux />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
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
