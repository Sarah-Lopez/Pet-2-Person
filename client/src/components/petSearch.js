import React, { Component } from "react";
import API from "../../../utils/api";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";

export default class Animals extends Component {

    state = {
        pets: []
      };
    
      componentDidMount() {
        this.loadPets();
      }
    
      loadPets = () => {
        API.getPet(props)
          .then(res => this.setState({ pets: res.data }))
          .catch(err => console.log(err));
      };

      render() {
        return (
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
        );
      }
}

// export default animals;