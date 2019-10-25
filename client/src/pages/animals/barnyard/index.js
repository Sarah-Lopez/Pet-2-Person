import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import API from "../../../utils/api";
import Card from "../../../components/Card/Card";
import Wrapper from "../../../components/Wrapper";
import Form from "../../../components/form";

class barnyard extends Component {
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
          <Hero backgroundImage="https://i.imgur.com/tTqkWSl.jpg">
              <h1>Barnyard </h1>
          </Hero>

          <Container Style={{ marginTop: 30 }}>
           <Row>
           <Col size="md-8">
           About
           </Col>
           <Col size="md-4">
           Top barnyard types:
           </Col>
       </Row>
       <Row>
               <Col size="md-8">
               Another word for barnyard animals is livestock. Not only are barnyard animals cute, they can provide you some options for eggs and milk. Many explain cows to have similar personalities and dogs. A rooster could allow you the perfect alarm clock, so you wake up the same time every day. Like horses, to own a barnyard animal you will need to have land and the resources to maintain their feed and care.   
              </Col>
            <Col size="md-4">
               <li>
               ♥ Cows
               </li>
               <li>
               ♥ Goats
               </li>
               <li>
               ♥ Chickens
               </li>
               <li>
               ♥ Pigs
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
                       image={pet.image}
                       type={pet.type}
                       location={pet.contact.address.state}
                       description={pet.description}
                   />
               ))}
           </Wrapper>
           </Container>
       </div>        );
     }
}

export default barnyard;