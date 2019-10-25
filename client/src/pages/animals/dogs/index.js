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
                  <Col size="md-12">
                      <h1>Welcome to Hero 2 Person</h1>
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