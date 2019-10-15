import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Pet2Person</Link>
          </div>


          <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/about"
                  className={
                  window.location.pathname === "/" || window.location.pathname === "/about" 
                    ? "active" 
                    : "nav-link"}
                  >About
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link to="/dogs"
                  className={window.location.pathname === "/dogs" ? "active" : "nav-link"}
                  >
                Dogs</Link>
                </li>


                <li className="nav-item">
                  <Link to="/cats"
                  className={window.location.pathname === "/cats" ? "active" : "nav-link"}
                  >                    
                    Cats</Link>
                </li>

                <li className="nav-item">
                  <Link to="/rodent"
                  className={window.location.pathname === "/rodent" ? "active" : "nav-link"}
                  >                    
                    Rodent</Link>
                </li>
                
                
                <li className="nav-item">
                  <Link to="/birds"
                  className={window.location.pathname === "/birds" ? "active" : "nav-link"}
                  >                   
                    Birds</Link>
                </li>
                
                
                
                <li className="nav-item">
                  <Link to="/reptiles"
                  className={window.location.pathname === "/reptiles" ? "active" : "nav-link"}
                  >                    
                    Reptiles</Link>
                </li>



                <li className="nav-item">
                  <Link to="/fish"
                  className={window.location.pathname === "/fish" ? "active" : "nav-link"}
                  >                    
                    Fish</Link>
                </li>
                
            
            </ul >
          </div >
        </div >
      </nav >
    );
  }
}

export default Navbar;