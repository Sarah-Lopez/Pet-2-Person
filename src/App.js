import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
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
          </Wrapper>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;