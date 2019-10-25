import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import API from "../../../utils/api";
import Card from "../../../components/Card/Card";
import Wrapper from "../../../components/Wrapper";
import Form from "../../../components/form";

class birds extends Component {
    

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
          <Hero backgroundImage="https://i.imgur.com/lDnJ4Pb.jpg">
              <h1>Birds </h1>
          </Hero>

          <Container Style={{ marginTop: 30 }}>
            <Row>
            <Col size="md-8">
            About
            </Col>
            <Col size="md-4">
            Top pet bird types:
            </Col>            
        </Row>
        <Row>
                <Col size="md-8">     
                Pet birds can live about 10-15 years. Many birds can sing, talk, and enjoy  human interaction. Birds are versatile and can live in small environments. These are social creatures that will be happy to keep you company and may even hold a conversation!
                 </Col>
             <Col size="md-4">        
                <li>
                ♥ Parakeet
                </li>
                <li>
                ♥ Conure
                </li>
                <li>
                ♥ Dove
                </li>
                <li>
                ♥ Lovebird
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

        <Row >
            <Col size ="md-4" />
            <Col size="md-4">
            <li>Content can go here</li>
            </Col>
            <Col size ="md-4" />

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



export default birds;