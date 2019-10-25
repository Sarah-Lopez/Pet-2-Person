import React, { Component } from "react";


class Favorite extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  
  componentDidMount() {
    if (myFavoritePets.length > 0) {
      var petRows = [];
      for (var i = myFavoritePets.length - 1; i >= 0; i--) {
        fetch(myFavoritePets[i])
        .then(res => res.json())
        .then(data => {
          data.poster_src =
          "https://image.tmdb.org/t/p/w185" + data.poster_path;
          const petRow = (
            <PetRow
            key={data.id}
            pet={data}
            posterSrc={data.poster_src}
            favornot
            />
            );
            petRows.push(petRow);
            this.setState({ rows: petRows });
          });
        }
      }
    }
    
    render() {
      return (
        <div className="Favorite">
        {this.state.rows ? (
          this.state.rows
          ) : (
            <h1>
            {
              "You can view your favorite pets here. If you open new session you're favorite pets will delete."
            }
          </h1>
        )} */}
      </div>
    );
  }
}



export default Favorite;