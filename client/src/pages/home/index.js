
import React, { Component } from "react";
import API from "../../utils/api";


class Pets extends Component {
  state = {
    pets: [],
    species: "",
    name: "",
    type: "",
    gender: "",
    age: "",
    breed: ""

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
      <div>This is the home page!</div>
    )}
}

export default Pets;
