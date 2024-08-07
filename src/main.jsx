import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./Components/AppContext.jsx";
import toast, { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContext>
      <App />
      <Toaster />
    </AppContext>
  </BrowserRouter>
);
