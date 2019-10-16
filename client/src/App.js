import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import Barnyard from "./pages/Barnyard";
import Birds from "./pages/Birds";
import Horses from "./pages/Horses";
import Rabbits from "./pages/Rabbits";
import Scalesfinsother from "./pages/Scalesfinsother";
import Smallnfurry from "./pages/Smallnfurry";


import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dogs" component={Dogs} />
            <Route exact path="/cats" component={Cats} />
            <Route exact path="/barnyard" component={Barnyard} />
            <Route exact path="/birds" component={Birds} />
            <Route exact path="/horses" component={Horses} />
            <Route exact path="/rabbits" component={Rabbits} />
            <Route exact path="/scalesfinsother" component={Scalesfinsother} />
            <Route exact path="/smallnfurry" component={Smallnfurry} />
          </Wrapper>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;