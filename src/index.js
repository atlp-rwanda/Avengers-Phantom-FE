import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from './redux/store.js'
import App from "./App.js";


// Create root Component
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)