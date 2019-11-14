
import React, { Component } from "react";
import "./style.css";


function IsFav(props) {
    return <button onClick={props.onClick} className="heart" />;
}

function IsNotFav(props) {
    return <button onClick={props.onClick} className="toggledHeart" />;
}



class Btn extends Component {

    state = {
        isFaved: false,
    }
    componentDidMount() {
        fetch("/api/pets/favorites")
            .then(res => res.json())
            .catch(error => console.log(error))
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
            <div>
                <button className="button">
                    Favorite
                </button>
                
                {favBtn}
            </div>

        )
    }
}


export default Btn