import React from "react";
import Logo from "../../assets/logo.svg";
import "./Header.css";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="top__Nav">
        <div className="nav-container">
          <div className="first-nav-section">
            <div className="first-logo-nav">
              <img src="assets/img/logo.png" alt="logo" />
            </div>
            <div className="nav-first-links">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/features">Features</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="second-nav-section">
            <a href="">Contact</a>
            <button className="button-Login">Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
