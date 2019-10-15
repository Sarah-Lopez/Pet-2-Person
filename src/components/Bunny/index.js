import React from "react";
import "./style.css";

function Bunny  (props) {
  return (
    <div className="bunny text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Bunny;
