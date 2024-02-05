import React from "react";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="first-nav-section">
        <div className="first-logo-nav">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-first-links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Features</a>
        </div>
      </div>
      <div className="second-nav-section">
        <button className="button-Contact">Contact</button>
        <button className="button-Login">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
