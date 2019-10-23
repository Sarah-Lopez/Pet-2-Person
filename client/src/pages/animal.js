import React, { Component } from "react";
import API from "../utils/api";
import Card from "../components/Card/Card";
import Wrapper from "../components/Wrapper";


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
        <Wrapper>
          {this.state.pets.map(pet => (
            <Card 
                key={pet.id}
                name={pet.name}
                image={pet.image}
                type={pet.type}
                location={pet.contact.address.state}
                description={pet.description}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default dogs;