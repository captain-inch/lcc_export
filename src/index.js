import React from "react";
import ReactDOM from "react-dom";
import "tachyons";

import "./styles/index.scss";

import App from "./components/App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
