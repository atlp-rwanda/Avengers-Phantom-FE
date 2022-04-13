import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./components/App.css";

// ReactDOM.render(<App />, document.getElementById("app"));
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);