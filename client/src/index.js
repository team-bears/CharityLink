import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import IndexApp from "./IndexApp";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
