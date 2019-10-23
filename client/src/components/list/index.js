import React from "react";
// import "../css PetRow.css";
import { APIKEY, baseURL } from "../../App";

var myFavoritePets = [];

function IsFav(props) {
  return <button onClick={props.onClick} className="heart" />;
}

function IsNotFav(props) {
  return <button onClick={props.onClick} className="toggled heart" />;
}

class PetRow extends React.Component {
  constructor(props) {
    super(props);
    this.addFavorite = this.addFavorite.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.state = { isFaved: false };
  }

  viewPet() {
    const url = "https://api.petfinder.com/v2/animals/" + this.props.pet.id; //Is this correct URL?
    window.location.href = url;
  }

  addFavorite() {
    this.setState({ isFaved: true });
    const favPet = "".concat(
      baseURL,
      "pet/",
      this.props.pet.id,
      "?api_key=",       //Where is API Key?...........................................
      APIKEY
    );
    myFavoritePets.push(favPet);
  }

  deleteFavorite() {
    this.setState({ isFaved: false });
  }

  render() {
    const isFaved = this.state.isFaved;
    let favBtn;
    if (isFaved) {
      favBtn = <IsNotFav onClick={this.deleteFavorite} />;
    } else {
      favBtn = <IsFav onClick={this.addFavorite} />;
    }
    return (
      <div
        key={this.props.pet.id}
        className= "PetRow"
        favornot={this.state.isFaved.value}
      >
        <div>
          <img alt="poster" src={this.props.posterSrc} />
        </div>
        <div>
          <h3>{this.props.pet.name}</h3>
          <p>{this.props.pet.description}</p>
          <input
            type="button"
            onClick={this.viewPet.bind(this)}
            value="View"
          />

          {favBtn}
        </div>
      </div>
    );
  }
}
export { PetRow as default, myFavoritePets };