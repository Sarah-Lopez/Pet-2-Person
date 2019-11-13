
import React, { Component } from "react";
import Container from "../../components/container";
import Row from "../../components/row";
import Col from "../../components/col";
import Hero from "../../components/hero";
import './home.css';
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
      <div>
        <Hero backgroundImage="https://i.imgur.com/e9XPyVA.jpg">
          <div className="text-box homePage">
            <h1 className="heading-primary">
              <span className="heading-primary-main">Welcome</span>
              <span className="heading-primary-sub">♥ Pet 2 Person ♥</span>
            </h1>


          </div>


        </Hero>

        <Container style={{ marginTop: 30, background:"white", marginBottom:30 }}>          <Row>
            <Col size="md-12">
              <h1 class="h1">Pet 2 Person ♥ Mission Statement</h1>
            </Col>
          </Row>
          <Row>


            <p>
              What is it?
        </p>
            <p>
              Pet 2 Person is a web application that allows the user to find their ‘ideal pet’! This application takes an approach like that of a dating site, where an algorithm is used to tailor an ideal match for the user. You will see a list of suggested pets based on their compatibility and show a link to the closest pet shelter in their area.
        </p>
            <p>
              Why is it valuable?
        </p>
            <p>
              According to The National Database Shelter Animals Count, millions of pets enter America’s shelters each year. More than half of them will never leave. Many of these pets are suffering in puppy mills, research labs, and factory farms.  The goal of this website is to bring pets one step closer to finding the right home. Each available animal is in need of a second chance.
        </p>


          </Row>
        </Container>
      </div>);
  }
}

export default Pets;