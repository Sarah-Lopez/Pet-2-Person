import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import API from "../../../utils/api";
import Card from "../../../components/Card/Card";
import Wrapper from "../../../components/Wrapper";
import Form from "../../../components/form";

class rabbits extends Component {

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
                <Hero backgroundImage="https://i.imgur.com/fqbSEz4.jpg">
                    <h1>Rabbits</h1>
                </Hero>

                <Container style={{ marginTop: 30 }}>
        <Row>
            <Col size="md-8">
            About
            </Col>
            <Col size="md-4">
            Features
            </Col>            
        </Row>
        <Row>
                <Col size="md-8">            
                If you love cuddly creatures then this may be the soul mate for you!                
                Rabbits can live in many different environments. They come in a variety of sizes which can range from around 1 to 10 pounds.                
                You may be a good match for this little creature if you enjoy a plant-based diet and are social! Rabbits enjoy a varity of vegtables and fruit. They enjoy living in large colonies.
                </Col>
             <Col size="md-4">        
                <li>
                ♥ fluffy
                </li>
                <li>
                ♥ short tails
                </li>
                <li>
                ♥ whiskers
                </li>
                <li>
                ♥ distinctive long ears
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
        </div>);
    }
}
export default rabbits;