import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import API from "../../../utils/api";
import Card from "../../../components/Card/Card";
import Wrapper from "../../../components/Wrapper";
import Form from "../../../components/form";
class smallnfurry extends Component {
    
    state = {
        pets: [],
        petSearch: "",
        params: {}
      };
    
      componentDidMount() {
        this.loadPets();    
      }
    
      loadPets = () => {
        API.getPet("furry")
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
            <Hero backgroundImage="https://i.imgur.com/HtsoNY8.jpg">
                <h1>Small n' furry</h1>
            </Hero>

            <Container style={{ marginTop: 30, background:"white", marginBottom:30 }}>            <Row>
            <Col size="md-8">
            About
            </Col>
            <Col size="md-4">
            Top types of small n furry:
            </Col>            
        </Row>
        <Row>
                <Col size="md-8">            
                Small rodent animals have a long history of domestication and are known for being calm and tame. This is a good pet for children as they stay in an enclosure. Kids can learn responsibility by helping with their care such as feeding and cleaning. It is important to do research on rodent pets as some are social and some prefer to live alone. These little creatures are low maintenance and an ideal fit for a pet if you live in an apartment or small home. 
                </Col>
             <Col size="md-4">        
                <li>
                ♥ Hamster
                </li>
                <li>
                ♥ Gerbil
                </li>
                <li>
                ♥ Mouse
                </li>
                <li>
                ♥ Rats
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
                    type={pet.species}
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

export default smallnfurry;