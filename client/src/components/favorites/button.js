
import React, { Component } from "react";


class Btn extends Component {

    state = {
        isFaved: false,
    }
    componentDidMount() {
        fetch("/api/pets/favorites")
        .then (res=>res.json())
        .catch(error=>console.log(error))
    }


render() {
    return (
        <button>
            Fave
        </button>
    )
}
}

export default Btn