import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import API from "../../../utils/api";
import Card from "../../../components/Card/Card";
import Wrapper from "../../../components/Wrapper";
import Form from "../../../components/form";

// import { Input, Button } from "../../../components/list";

class dogs extends Component {

    state = {
        pets: [],
        petSearch: "",
        params: {}
      };
    
      componentDidMount() {
        this.loadPets();    
      }
    
      loadPets = () => {
        API.getPet("dog")
          .then(res => this.setState({ pets: res.data }))
          .catch(err => console.log(err));
      };

      handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getSearchPet(this.state.petSearch)
          .then(res => this.setState({ pets: res.data }))
          .catch(err => console.log(err));
      };


    render() {
        return (
          <div>
          <Hero backgroundImage="https://i.imgur.com/IqpB8Fj.jpg">
              <h1>Dogs </h1>
          </Hero>

          <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-8">
            About
            </Col>
            <Col size="md-4">
            Most Popular Dog Breeds
            </Col>            
        </Row>
        <Row>
                <Col size="md-8">            
                Dogs are known as “mans best friend” and have bonded with humans for over 12,000 years. This is a versatile type of pet that can fit nearly all lifestyles. Some breeds prefer a more athletic lifestyle while others are ok with more of a low energy lifestyle. Since dogs come in many sizes, there may be an adoptable dog out there that can be compatible for you! 
                </Col>
             <Col size="md-4">        
                <li>
                ♥ Labrador Retriever
                </li>
                <li>
                ♥ German Shepherd
                </li>
                <li>
                ♥ Golden Retriever
                </li>
                <li>
                ♥ French Bulldog
                </li>
                </Col>
       </Row>

<Row>
<br />
<br />
</Row>

       <Row>
            <Col size="md-6">
                <Form />
            </Col>
           <Col size="md-3" />
            <Col size="md-3" />
        </Row>

              <Wrapper>
                  {this.state.pets.map(pet => (
                    <Card 
                    key={pet.id}
                    // id={pet.id}
                    name={pet.name}
                    thumbnail={pet.photos}
                    type={pet.type}
                    city={pet.contact.address.city}
                    state={pet.contact.address.state}
                    description={pet.description}
                    href={pet.url}
                    />
                ))}
            </Wrapper>
          </Container>
      </div>
        );
      }
}

// class dogs extends Component {

//   state = {
//     pets: []
//   };

//   componentDidMount() {
//     this.loadPets();
//   }

//   loadPets = () => {
//     API.getPets()
//       .then(res => this.setState({ pets: res.data }))
//       .catch(err => console.log(err));
//   };


export default dogs;