
//************ This component will only be used on the favorites page **************************

import React from "react";
import "./style.css";

let myFavoritePets = [{

}
];

function IsFav(props) {
    return <button onClick={props.onClick} className="heart" />;
}

function IsNotFav(props) {
    return <button onClick={props.onClick} className="toggled heart" />;
}

class PetRow extends React.Component {
    constructor(props) {
        super(props);
        // this.addFavorite = this.addFavorite.bind(this);
        // this.deleteFavorite = this.deleteFavorite.bind(this);
        this.state = { isFaved: false };
    }


    //   viewPet() {
    //     const url = "https://api.petfinder.com/v2/animals/" + this.props.pet.id; //Is this correct URL?
    //     window.location.href = url;
    //   }

    //   addFavorite() {
    //     this.setState({ isFaved: true });
    //     const favPet = "".concat(
    //     //   baseURL,
    //     //   "pet/",
    //     //   this.props.pet.id,
    //     //   "?api_key=",       //No api key, use tokens instead
    //     //   APIKEY
    //     );
    //     myFavoritePets.push(favPet);
    //   }

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
                className="PetRow"
                favornot={this.state.isFaved.value}
            >
                <div className="petImgDiv">
                    <img className="petImage" alt="dog"></img>
                </div>
                <div className="petInfoDiv">
                    <h3 style={{ "marginTop": "15px" }}>{this.props.pet.name}</h3>
                    {/* Play with style of above line */}
                    <p>{this.props.pet.type}</p>
                    <p>{this.props.pet.location}</p>
                    <p>{this.props.pet.description}</p>
                    <input
                        type="button"
                        // onClick={this.viewPet.bind(this)}
                        value="View"
                    />
                    {favBtn}
                </div>
            </div>
        );
    }
}


export function Input({ children }) {
    return (
        <div className="input-group input-group-lg">
            <input className="form-control" type="text" {...children} />
        </div>
    );
}


export function Button({ type = "default", className, children, onClick }) {
    return (
        <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}

export { PetRow as default, myFavoritePets };