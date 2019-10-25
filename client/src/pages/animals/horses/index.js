import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import API from "../../../utils/api";
import Card from "../../../components/Card/Card";
import Wrapper from "../../../components/Wrapper";
import Form from "../../../components/form";

class horses extends Component {

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
          <Hero backgroundImage="https://i.imgur.com/HuZOK2f.jpg">
              <h1>Horses</h1>
          </Hero>

          <Container style={{ marginTop: 30 }}>
           <Row>
           <Col size="md-8">
           About
           </Col>
           <Col size="md-4">
           Top horse breeds:
           </Col>
       </Row>
       <Row>
               <Col size="md-8">
               Horses are wonderful creatures, but they are not for everyone. If you consider adopting a horse, then you will need plenty of space. Horses can be expensive to maintain but there are many benefits of adopting a horse. Horses encourage physical activity as they need to be groomed and walked. Many horses are used for therapy reasons. They can help to reduce stress and improve mood. 
               </Col>
            <Col size="md-4">
               <li>
               ♥ American Quarter Horse
               </li>
               <li>
               ♥ Arabians
               </li>
               <li>
               ♥ Thoroughbreds
               </li>
               <li>
               ♥ Appaloosa
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

export default horses;