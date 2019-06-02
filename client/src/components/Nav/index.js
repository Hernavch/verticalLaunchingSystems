import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import UserContext from '../../utils/UserContext';

function Nav(props) {
  return (
<UserContext.Consumer>
      {({user}) => (
        //  <p> the User is {props.isloggedIn ? "" : "login"}</p>
    <nav className="navbar navbar-expand-lg navbar-dark main-nav sm-12">
  
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        {user ?(
         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <a className="navbar-brand justify-content-end" href="/login">
                VLS
               </a>
            <li className="nav-item active">
                <a className="nav-link" href="/user"
                   >Home
             <span className="sr-only">(current)</span></a>
                  </li>
            <li className="nav-item active">
                <a className="nav-link" href="/login"
                    >Log Out
                 <span className="sr-only">(current)</span></a>
                  </li>
            <li className="nav-item">
                <a className="nav-link" href="/update">Update Profile</a>
                  </li>


        </ul>
        ) :   (
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <a className="navbar-brand justify-content-end" href="/login">
              VLS
            </a>
            <li className="nav-item active">
               <a className="nav-link" href="/login"
                 >LogIn
                <span className="sr-only">(current)</span></a>
                  </li>
           <li className="nav-item active">
          <a className="nav-link" href="/signup"
            >Sign Up
             <span className="sr-only">(current)</span></a
          >
                  </li>
        
        </ul>

        )
        
        }
      

      </ul>
  </nav>
      )
      }
      </UserContext.Consumer>


  );
}

export default Nav;
