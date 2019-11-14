
import React, { Component } from "react";
import Container from "../../components/container";
import Row from "../../components/row";
import Col from "../../components/col";
import Hero from "../../components/hero";
import PetRow, { myFavoritePets } from "../../components/list/index";
// import API from "../../../utils/api";
// import Card from "../../../components/Card/Card";
// import Wrapper from "../../../components/Wrapper";
// import Form from "../../../components/form";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {data: {}};
    
  }

//   componentDidMount() {
//     if (myFavoritePets.length > 0) {
//       const petRows = [];
//     //   const data = [{


        
//     //   }]
//       for (var i = 0; i < data.length; i++) {
//         fetch(myFavoritePets[i])
//         .then(res => res.json())
//         .then(data => {
//         const petRow = (
//           <PetRow
//             key={
//               data.id
//             }
//             pet={data[i]}
//             favornot
//           />
//         );
//         petRows.push(petRow);
//         this.setState({ rows: petRows });
//       })
//     }
//   }
//   }

  render() {
//     if (!data) {
//       return (
//         <div>No pets favorited!</div>
//       )
//     }
//     if (favorite = true) {
//       return (
//         "Here is where your favorite pets go!"
//       )
//     }
    return (
      <div>
        <Hero backgroundImage="https://i.imgur.com/aHowLUJ.jpg">
          <h1>Favorites</h1>
        </Hero>

        <Container style={{ marginTop: 30, background:"white", marginBottom:30 }}>          <Row>
            <Col size="md-12">
              Feature comming soon!
             </Col>
            <Col size="md-12">
            </Col>
          </Row>
          <Row>
            <Col size="md-10">
              <div className="Favorites">
                {this.state.rows ? (
                  this.state.rows
                ) : (
                    <h1>
                      {
                        "You can view your favorite pets here. If you open a new session your favorite pets will delete."
                      }
                    </h1>
                  )}
              </div>
            </Col>
            <Col size="md-4">

            </Col>
          </Row>

        </Container>
      </div>
    )
  };
}

export default Favorite;