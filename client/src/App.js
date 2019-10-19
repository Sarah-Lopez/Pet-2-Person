import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Pets from "./pages/Pets";
import Nav from "./components/nav";
// import SideDrawer from "./components/sidedrawer";
// import Backdrop from "./components/backdrop";
//list in every page but login and app.js.


// import Footer from "./components/footer";

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
import login from "./pages/login"

function App() {
      return (
        <div style={{height: '100%'}}>
          <Nav />
          {/* <SideDrawer/> */}
          {/* <Backdrop/> */}
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
        </div>
      );
}

export default App;
