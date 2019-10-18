import React, { Component } from "react";
// import { List, ListItem } from "./components/list";
import API from "./utils/api";

class dogs extends Component {

  state = {
    pets: []
  };

  componentDidMount() {
    this.loadPets();
  }

  loadPets = () => {
    API.getPets()
      .then(res => this.setState({ pets: res.data }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>This is a page for dogs!
        <p>
          {this.state.pets.map(pet => (
            // <ListItem key={pet._id}>
              <a href={"/dogs/" + pet._id}>
                <strong>
                  {pet.type} by {pet.name}
                </strong>
              </a>
            
          ))}
        </p>
      </div>
    );
  }
}

export default dogs;