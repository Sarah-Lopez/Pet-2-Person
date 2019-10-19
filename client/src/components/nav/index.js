import React from "react";

// import DrawerToggleButton from "../sidedrawer/drawerToggleButton";
import "./navbar.css";
// import './nav.css';


function Nav() {
  return (
    <header className="taskbar">
    <nav className="taskbar-navigation">

      <div>
        {/* <DrawerToggleButton /> */}
      </div>

      {/* ------------  Logo ------------ */}
      <div className="taskbar-logo">
        <a href="/">
          Pet 2 Person
        </a>
      </div>

        {/* the nav-spacer div will help with positioning of navbar elements */}
      <div className="nav-spacer" />

      {/* ------------  Links  ------------ */}

      <div className="taskbar-nav-items">
        <ul>
          {/* ------------ DOGS ------------ */}
          <li>    
            <a href="/dogs">
            Dogs
            </a>
          </li>

          {/* ------------ CATS  ------------ */}
          <li>
            <a href="/cats">
            Cats
            </a>
          </li>

          {/* ------------ SMALL N' FURRY ------------ */}
          <li>
            <a href="smallnfurry">
            Small n' furry
            </a>
          </li>
          
          {/* ------------ RABBITS ------------ */}
          <li>        
            <a href="/rabbits">
            Rabbits
          </a>
          </li>

          {/* ------------ BIRDS ------------ */}
          <li>        
            <a href="/birds">
            Birds
          </a>
          </li>

          {/* ------------ SCALES, FINS, OTHER ------------ */}
          <li>        
            <a href="/scalesfinsother">
            Scales, fins, other
          </a>
          </li>

          {/* ------------ HORSES ------------ */}
          <li>        
            <a href="/horses">
            Horses
          </a>
          </li>

          {/* ------------ BARNYARD ------------ */}
          <li>        
            <a href="/barnyard">
            Barnyard
          </a>
          </li>

          {/* ------------ FAVORITES ------------ */}
          <li>        
            <a href="/favorites">
            Favorites
          </a>
          </li>

          {/* ------------ LOGIN ------------ */}
          <li>        
            <a href="/login">
            Login
          </a>
          </li> 

        </ul>
      </div>
    </nav>
   </header> 
  );
}


export default Nav;
