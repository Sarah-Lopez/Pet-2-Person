import React from "react";
import "./pet.css";

function Pet  (props) {
  return (
    <div className="pet text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Pet;
