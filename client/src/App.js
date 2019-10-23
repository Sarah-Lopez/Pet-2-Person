<<<<<<< HEAD
import React from "react";

// import Pets from "./pages/Pets";
import Nav from "./components/nav";
//list in every page but login and app.js to prevent navbar from showing on the welcome page.

// import Footer from "./components/footer"; won't be necessary in the app.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


=======
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Pets from "./pages/Pets";
import Nav from "./components/nav";
import SideDrawer from "./components/sidedrawer";
import Backdrop from "./components/backdrop";
//list in every page but login and app.js.
// import { List, ListItem } from "./components/list";
// import API from "./utils/api";

import Footer from "./components/footer";
>>>>>>> 4255899256cdb05c92a8582240059d2c011f444f

import home from "./pages/home"
import dogs from "./pages/animals/dogs"
import cats from "./pages/animals/cats"
import smallnfurry from "./pages/animals/smallnfurry"
import birds from "./pages/animals/birds"
import rabbits from "./pages/animals/rabbits"
import horses from "./pages/animals/horses"
import barnyard from "./pages/animals/barnyard"
import scalesfinsother from "./pages/animals/scalesfinsother"
import favorites from "./pages/favorites"
// import login from "./pages/login"


<<<<<<< HEAD
function App() {
  return (
    <div>
      {/* <Pets /> */}
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/dogs" component={dogs} />
          <Route exact path="/cats" component={cats} />
          <Route exact path="/smallnfurry" component={smallnfurry} />
          <Route exact path="/birds"  component={birds} />
          <Route exact path="/rabbits" component={rabbits} />
          <Route exact path="/horses" component={horses} />
          <Route exact path="/barnyard" component={barnyard} />
          <Route exact path="/scalesfinsother" component={scalesfinsother} />
          <Route exact path="/favorites" component={favorites} />
          {/* <Route exact path="/login" component={login} /> */}
        </Switch>
      </Router>
    </div>
  );
=======
// function App() {
  class App extends Component {

  //  line 30 through 51 deal with side drawer
    state = {
      sideDrawerOpen: false
    };
  
    drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return { sideDrawerOpen: !prevState.sideDrawerOpen }
      });
    };
  
    backdropClickHandler = () => {
      this.setState({ sideDrawerOpen: false })
    };
      render (){
        let backdrop;
    
        if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />
        }
      return (
        <div style={{height: '100%'}}>
          <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          {/* <Pets /> */}
          <main style={{marginTop: '65px'}}>
          <Router>
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/dogs" component={dogs} />
              <Route exact path="/cats" component={cats} />
              <Route exact path="/smallnfurry" component={smallnfurry} />
              <Route exact path="/birds"  component={birds} />
              <Route exact path="/rabbits" component={rabbits} />
              <Route exact path="/horses" component={horses} />
              <Route exact path="/barnyard" component={barnyard} />
              <Route exact path="/scalesfinsother" component={scalesfinsother} />
              <Route exact path="/favorites" component={favorites} />
              <Route exact path="/login" component={login} />
            </Switch>
          </Router>
          </main>
          <Footer />
        </div>
      );
    }  
>>>>>>> 4255899256cdb05c92a8582240059d2c011f444f
}

export default App;
