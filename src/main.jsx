import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as AppRouter } from "react-router-dom";
import "./styles/App.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppRouter>
    <App />
  </AppRouter>
);
