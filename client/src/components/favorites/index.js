import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import Favorite from "../../pages/favorites";


ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

export default Favorite;
