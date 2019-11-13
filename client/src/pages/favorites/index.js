
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

// *************************** Consult Chaa'llisa on this page***********************************

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (myFavoritePets.length > 0) {
      const petRows = [];
      const data = [{
        name: "Walter White",
        type: "Dog",
        location: "Albuquerque, NM",
        description: "He is the danger. Usually very mild-mannered, but too smart for his own good.",
        id: 1
      },
      {
        name: "Bacon",
        description: "A really crispy purr machine. This guy needs a home that cooks bacon frequently, as he has developed a taste for it that we can no longer accommodate. Not good with kids.",
        type: "Cat",
        location: "Two Egg, FL",
        id: 2
      }]
      for (var i = 0; i < data.length; i++) {
        // fetch(myFavoritePets[i])
        // .then(res => res.json())
        // .then(data => {
        const petRow = (
          <PetRow
            key={
              data.id
            }
            pet={data[i]}
            favornot
          />
        );
        petRows.push(petRow);
        this.setState({ rows: petRows });
      }
    }
  }

  render() {
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
    );
  }
}

export default Favorite;