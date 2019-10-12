
//****************The following code comes from example activity ************************/
import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Pets extends Component {
  state = {
    pets: []
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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>PetPetPet</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Pet</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Pets On My List</h1>
            </Jumbotron>
            {this.state.pets.length ? (
              <List>
                {this.state.pets.map(pet => (
                  <ListItem key={pet._id}>
                    <a href={"/pets/" + pet._id}>
                      <strong>
                        {pet.title} by {pet.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Pets;
