import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import "./component.css";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div className="fullnav">
      <nav className="navbar navbar-expand-lg ">
        <NavLink className="navbar-brand" to="/">
         <p className="logo" style={{fontFamily:'courier' , color:'orange', }}>Employees Details</p>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-Supported-Content">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/create" style={{color: "black", backgroundColor:'orange'}}>
                Create Record
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
