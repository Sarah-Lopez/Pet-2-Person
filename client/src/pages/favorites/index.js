  


// *************************** Consult Chaa'llisa on this page***********************************


import React, { Component } from "react";
import PetRow, { myFavoritePets } from "../../components/list/index";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    if (myFavoritePets.length > 0) {
      const petRows = [];
      const data = [{
        name: "Pupper",
        type: "Dog",
        location: "Miami, Fl",
        description: "A good boi",
        id: 1
      },
      {
        name: "Catter",
        description: "It's a cat, what can I say.",
        type: "Cat",
        location: "Raleigh, NC",
        id: 2
      }]
      for (var i = 0; i < data.length; i++) {
        // fetch(myFavoritePets[i])
        // .then(res => res.json())
        // .then(data => {

          const petRow = (
            <PetRow
            key = {
              data.id
            }
            pet={data[i]}
            favornot
            />
            );
            petRows.push(petRow);
            this.setState({ rows: petRows });
          // });
        }
      }
    }
    
    render() {
      return (
        <div className="Favorites">
        {this.state.rows ? (
          this.state.rows
          ) : (
            <h1>
            {
              "You can view your favorite pets here. If you open a new session your favorite pets will delete."
            }
          </h1>
        )} */}
      </div>
    );
  }
}

export default Favorite;