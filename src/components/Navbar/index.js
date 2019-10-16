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
                <li className="nav-item nav-link">
                  <Link to="/about"
                  className={
                  window.location.pathname === "/" || window.location.pathname === "/about" 
                    ? "active" 
                    : "nav-link"}
                  >About
                  </Link>
                </li>
                
                <li className="nav-item nav-link">
                  <Link to="/dogs"
                  className={window.location.pathname === "/dogs" ? "active" : "nav-link"}
                  >
                Dogs</Link>
                </li>


                <li className="nav-item nav-link">
                  <Link to="/cats"
                  className={window.location.pathname === "/cats" ? "active" : "nav-link"}
                  >                    
                    Cats</Link>
                </li>

                <li className="nav-item nav-link">
                  <Link to="/smallnfurry"
                  className={window.location.pathname === "/smallnfurry" ? "active" : "nav-link"}
                  >                    
                    Smallnfurry</Link>
                </li>
                
                
                <li className="nav-item nav-link">
                  <Link to="/birds"
                  className={window.location.pathname === "/birds" ? "active" : "nav-link"}
                  >                   
                    Birds</Link>
                </li>
                
                
                
                <li className="nav-item nav-link">
                  <Link to="/horses"
                  className={window.location.pathname === "/horses" ? "active" : "nav-link"}
                  >                    
                    Horses</Link>
                </li>



                <li className="nav-item nav-link">
                  <Link to="/banyard"
                  className={window.location.pathname === "/banyard" ? "active" : "nav-link"}
                  >                    
                    Banyard</Link>
                </li>


                <li className="nav-item nav-link">
                  <Link to="/scalesfinsother"
                  className={window.location.pathname === "/scalesfinsother" ? "active" : "nav-link"}
                  >                    
                    Scalesfinsother</Link>
                </li>
                
            
            </ul >
          </div >
        </div >
      </nav >
    );
  }
}

export default Navbar;