import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        VLS
      </a>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/user"
              >Home
               <span className="sr-only">(current)</span></a
            >
                    </li>
           <li className="nav-item active">
            <a className="nav-link" href="/login"
              >Log Out
               <span className="sr-only">(current)</span></a
            >
                    </li>
          <li className="nav-item">
            <a className="nav-link" href="/update">Update Profile</a>
            {/* <Link to="/login">Sign Out</Link> */}
          </li>

        </ul>
    </nav>
  );
}

export default Nav;
