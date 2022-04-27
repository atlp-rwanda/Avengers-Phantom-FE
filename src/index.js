import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store.js'
import ScrollToTop from './Components/Homepage/ScrollToTop.jsx'
import PhantomRoutes from "./Components/Routes";


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