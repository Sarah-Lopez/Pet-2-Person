import React from "react";
import './nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Pet 2 Person
      </a>
      <a className="navbar-brand" href="/dogs">
        Dogs
      </a>
      <a className="navbar-brand" href="/cats">
        Cats
      </a>
      <a className="navbar-brand" href="smallnfurry">
        Small n' furry
      </a>
      <a className="navbar-brand" href="/rabbits">
        Rabbits
      </a>
      <a className="navbar-brand" href="/birds">
        Birds
      </a>
      <a className="navbar-brand" href="/scalesfinsother">
        Scales, fins, other
      </a>
      <a className="navbar-brand" href="/horses">
        Horses
      </a>
      <a className="navbar-brand" href="/barnyard">
        Barnyard
      </a>
      <a className="navbar-brand" href="/favorites">
        Favorites
      </a>
      <a className="navbar-brand" href="/login">
        Login
      </a>
    </nav>
  );
}


export default Nav;
