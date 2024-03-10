import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const elementoRoot = document.getElementById("root");
const root = ReactDOM.createRoot(elementoRoot); 

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
