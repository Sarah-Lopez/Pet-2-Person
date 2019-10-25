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
        // petSearch: {"type": ""}
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
        API.getPet(this.state.petSearch)
          .then(res => this.setState({ pets: res.data }))
          .catch(err => console.log(err));
      };


    render() {
        return (
          <div>
          <Hero backgroundImage="https://i.imgur.com/IqpB8Fj.jpg">
              <h1>Dogs </h1>
          </Hero>

          <Container Style={{ marginTop: 30 }}>
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

        <Row >
            <Col size ="md-4" />
            <Col size="md-4">
            <li>Content can go here</li>
            </Col>
            <Col size ="md-4" />

        </Row>
              <Wrapper>
              {/* <Input
                        name="petSearch"
                        value={this.state.petSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Pet"
                      />


                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button> */}


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
      </div>
        );
      }
}
// import { List, ListItem } from "./components/list";
// import API from "./utils/api";

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


//   render() {
//     return (
//       <div>This is a page for dogs!
//         <p>
//           {this.state.pets.map(pet => (
//             // <ListItem key={pet._id}>
//               <a href={"/dogs/" + pet._id}>
//                 <strong>
//                   {pet.type} by {pet.name}
//                 </strong>
//               </a>
            
//           ))}
//         </p>
//       </div>
//     );
//   }

export default dogs;