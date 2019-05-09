import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#"
              >Home<span className="sr-only">(current)</span></a
            >
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Update Profile</a>
          </li>
        </ul>
    </nav>
  );
}

export default Nav;
