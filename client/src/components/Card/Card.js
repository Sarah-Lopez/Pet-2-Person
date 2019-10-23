import React from "react";
import "./style.css";
import Thumbnail from "./Thumbnail";

function Card({thumbnail, name, type, city, state, description, href}) {
  // console.log(thumbnail);
  return (
    <div className="card">
      <div className="img-container">
        <Thumbnail src={thumbnail || "no picture avail"} />
         {/* <img alt={props.name} src={props.image} /> */}
         {console.log(thumbnail)}
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Type:</strong> {type}
          </li>
          <li>
            <strong>Location:</strong> {city}, {state}
          </li>
          <li>
            <strong>Description:</strong> {description}
            <a rel="noreferrer noopener" target="_blank" href={href}>...Read More!</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
