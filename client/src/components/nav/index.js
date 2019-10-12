import React from "react";

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
      {/* Grab all animal categories */}
      <a className="navbar-brand" href="/">
        Small n' furry
      </a>
    </nav>
  );
}

export default Nav;
