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
            Features
            </Col>            
        </Row>
        <Row>
                <Col size="md-8">            
                If you love cuddly creatures then this may be the soul mate for you!                
                Rabbits can live in many different environments. They come in a variety of sizes which can range from around 1LB to 10LBs.                
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