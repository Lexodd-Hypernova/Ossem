import React from "react";
import Logo from "../../assets/logo.svg";
import "./Header.css";
const Navbar = () => {
  return (
    <>
      <nav className="top__Nav">
        <div className="nav-container">
          <div className="first-nav-section">
            <div className="first-logo-nav">
              <img src={Logo} alt="logo" />
            </div>
            <div className="nav-first-links">
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Features</a></li>
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
