import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import API from "../../../utils/api";
import Card from "../../../components/Card/Card";
import Wrapper from "../../../components/Wrapper";
import Form from "../../../components/form";

class cats extends Component {

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
            <Hero backgroundImage="https://i.imgur.com/w1pcCMG.jpg">
                <h1>Cats </h1>
            </Hero>

            <Container style={{ marginTop: 30 }}>
            <Row>
            <Col size="md-8">
            About
            </Col>
            <Col size="md-4">
            Top cat breeds:
            </Col>            
        </Row>
        <Row>
                <Col size="md-8">            
                There are about 38 different species of cats. Most domestic cats weigh about 6 to 20 pounds, making this little creature a good fit for any home size. Cats make good napping buddies as they sleep most of the day. Cats are most active from dawn to dusk, perfect match if you are a night owl. If you have a busy lifestyle, then a cat is low maintenance and does not need much to be happy!
                </Col>
             <Col size="md-4">        
                <li>
                ♥ Siamese
                </li>
                <li>
                ♥ Persian
                </li>
                <li>
                ♥ Maine Coon
                </li>
                <li>
                ♥ Bengal
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






export default cats;



