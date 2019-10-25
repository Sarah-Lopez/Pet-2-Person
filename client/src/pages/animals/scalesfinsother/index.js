import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import API from "../../../utils/api";
import Card from "../../../components/Card/Card";
import Wrapper from "../../../components/Wrapper";
import Form from "../../../components/form";

class scalesfinsother extends Component {

    state = {
        pets: []
      };
    
      componentDidMount() {
        this.loadPets();
      }
    
      loadPets = () => {
        API.getPet("cat")
          .then(res => this.setState({ pets: res.data }))
          .catch(err => console.log(err));
      };

    render() {
        return (
<div>
            <Hero backgroundImage="https://i.imgur.com/ufvdgn0.jpg">
                <h1>Scales, fins, and others </h1>
            </Hero>

            <Container Style={{ marginTop: 30 }}>
           <Row>
           <Col size="md-8">
           About
           </Col>
           <Col size="md-4">
           Top pets with scales and fins:
           </Col>
       </Row>
       <Row>
               <Col size="md-8">
               Fish and reptiles are popular pets. Reptiles are the most ancient species on Earth. They eat a variety of food based on their type. This can include being herbivores, insectivores, or carnivores. It is important to do research on reptiles as pets. Some need a special diet and maintain a certain temperature to live. Fish can be calming to watch; they are easy to care for and are an affordable option for those looking for a pet with inexpensive care. Like other animals that live in enclosures, reptiles and fish can be easy to maintain and can allow children to help with their care. 
               
               </Col>
            <Col size="md-4">
               <li>
               ♥ snakes
               </li>
               <li>
               ♥ fish
               </li>
               <li>
               ♥ lizards
               </li>
               <li>
               ♥ turtles
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
       </div>        );
     }
}

export default scalesfinsother;