import React, { Component } from "react";
import Container from "../../components/container";
import Row from "../../components/row";
import Col from "../../components/col";
import Hero from "../../components/hero";
// import API from "../../../utils/api";
// import Card from "../../../components/Card/Card";
// import Wrapper from "../../../components/Wrapper";
// import Form from "../../../components/form";


class Favorite extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  
  // componentDidMount() {
  //   if (myFavoritePets.length > 0) {
  //     var petRows = [];
  //     for (var i = myFavoritePets.length - 1; i >= 0; i--) {
  //       fetch(myFavoritePets[i])
  //       .then(res => res.json())
  //       .then(data => {
  //         data.poster_src =
  //         "https://image.tmdb.org/t/p/w185" + data.poster_path;
  //         const petRow = (
  //           <PetRow
  //           key={data.id}
  //           pet={data}
  //           posterSrc={data.poster_src}
  //           favornot
  //           />
  //           );
  //           petRows.push(petRow);
  //           this.setState({ rows: petRows });
  //         });
  //       }
  //     }
  //   }
    
    // render() {
      // return (
      //   <div className="Favorite">
        // {/* {this.state.rows ? (
        //   this.state.rows
        //   ) : (
        //     <h1>
        //     {
        //       "You can view your favorite pets here. If you open new session you're favorite pets will delete."
        //     }
        //   </h1>
        // )} */}


        render() {
          return (
            <div>
            <Hero backgroundImage="https://i.imgur.com/aHowLUJ.jpg">
                <h1>Favorites</h1>
            </Hero>
  
            <Container Style={{ marginTop: 30 }}>
             <Row>
             <Col size="md-8">
             
             </Col>
             <Col size="md-4">
             
            
             </Col>
         </Row>
         <Row>
                 <Col size="md-8">

                 </Col>
              <Col size="md-4">
                 
                 </Col>
        </Row>
  
             </Container>
         </div>        );
       }
  }
  

export default Favorite;