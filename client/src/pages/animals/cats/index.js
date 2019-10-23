import React, { Component } from "react";
import Container from "../../../components/container";
import Row from "../../../components/row";
import Col from "../../../components/col";
import Hero from "../../../components/hero";
import API from "../../../utils/api";
import Card from "../../../components/Card/Card";
import Wrapper from "../../../components/Wrapper";

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

            <Container Style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome to Pet 2 Person</h1>
                    </Col>
                </Row>
                <Row>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur tempus sapien ac sagittis. Etiam efficitur urna non metus pretium vulputate. Quisque nunc nibh, finibus sit amet lacinia at, tempus in lorem. Cras laoreet elit a turpis mattis sagittis non vel lorem. Ut quis lacus eu arcu imperdiet accumsan. Phasellus et elit nec orci maximus tincidunt. Aliquam ut interdum risus, id vulputate nisl. Nunc pellentesque arcu felis, sed consequat sem vehicula at.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur tempus sapien ac sagittis. Etiam efficitur urna non metus pretium vulputate. Quisque nunc nibh, finibus sit amet lacinia at, tempus in lorem. Cras laoreet elit a turpis mattis sagittis non vel lorem. Ut quis lacus eu arcu imperdiet accumsan. Phasellus et elit nec orci maximus tincidunt. Aliquam ut interdum risus, id vulputate nisl. Nunc pellentesque arcu felis, sed consequat sem vehicula at.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur tempus sapien ac sagittis. Etiam efficitur urna non metus pretium vulputate. Quisque nunc nibh, finibus sit amet lacinia at, tempus in lorem. Cras laoreet elit a turpis mattis sagittis non vel lorem. Ut quis lacus eu arcu imperdiet accumsan. Phasellus et elit nec orci maximus tincidunt. Aliquam ut interdum risus, id vulputate nisl. Nunc pellentesque arcu felis, sed consequat sem vehicula at.
                    </p>
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