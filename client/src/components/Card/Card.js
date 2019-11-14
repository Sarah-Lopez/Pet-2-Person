import React, { Component } from "react";
import "./style.css";
import Thumbnail from "./Thumbnail";
import Btn from "../favorites/button";

function Card({thumbnail, name, type, city, state, description, href}) {

// class Card extends Component {
//   // console.log(thumbnail);

//   constructor(props) {
//     super(props);

//     this.state = {
//       thumbnail: '',
//       name: '',
//       type: '',
//       city: '',
//       state: '',
//       description: '',
//       href: ''
//     };

//     this.onThumbnailReceived = this.onThumbnailReceived.bind(this);
//     this.onNameReceived = this.onNameReceived.bind(this);
//   }

//     componentDidMount() {

//     }

//     onThumbnailReceived(event) {
//       this.setState({
//         thumbnail: event.target.value,
//       });
//     }

//     onNameReceived(event) {
//       this.setState({
//         name: event.target.value,
//       });
//     }



//   render() {
//     const {
//       thumbnail,
//       name,
//       type,
//       city,
//       state,
//       description,
//       href,
//     } = this.state;

  return (
    <div className="card">
      <div className="img-container">
        {thumbnail.map(pic => (
          <Thumbnail key={name} src={thumbnail[0].small || name} />

        ))}
         {/* <img alt={props.name} src={props.image} /> */}
         {/* {console.log(thumbnail)} */}
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
          <li><Btn /></li>
        </ul>
      </div>
    </div>
  );
}
// }
export default Card;
