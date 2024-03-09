import React, { useState } from "react";
// import Logo from "../../assets/logo.svg";
import "./Header.css";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import MobileModal from "../menu/MobileModal";

// import MenuModal from "../menu/MenuModal";

const Navbar = () => {
  // const [isMobModalOpen, setIsMobModalOpen] = useState(false);

  // const openMobModal = () => {
  //   setIsMobModalOpen(true);
  //   // setModalContent(content);
  //   // document.body.style.overflow = 'hidden';
  // };

  // const closeMobModal = () => {
  //   setIsMobModalOpen(false);
  //   // if (!isModalOpen) {
  //   //     document.body.style.overflow = 'auto';
  //   // }
  //   // else if (isMobileMenuOpen && isModalOpen) {
  //   //     document.body.style.overflow = 'hidden';
  //   // }
  //   // else {
  //   //     document.body.style.overflow = 'auto';
  //   // }
  //   // setModalContent(null);
  // };

  const [open, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };


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
            <a href="#connect">Contact</a>
            <button className="button-Login">Login</button>
          </div>
        </div>
      </nav>
      <div className="mob_Navbar">
        <div className="mob_Logo-con">
          <div className="mob-logo">
            <img src="assets/img/logo.png"></img>
          </div>
        </div>
        <div className="mob_ham-con">
          {/* onClick={openMobModal} */}
          <div className="mob_ham" onClick={toggleDrawer(true)}>
            <img src="assets/img/ham.png" alt="Menu" className="menu-image" />
          </div>
        </div>
      </div>

      {/* <CloseIcon onClick={toggleDrawer(false)} /> */}

      <Drawer
        //from which side the drawer slides in
        anchor="right"
        //if open is true --> drawer is shown
        open={open}
        //function that is called when the drawer should close
        onClose={toggleDrawer(false)}
        //function that is called when the drawer should open
        onOpen={toggleDrawer(true)}
      >
        <div className="mob__Nav-wrap">
          <div className="mob__Nav">
            <div className="mob_logo-div">
              <div className="mob_lg-icon">
                <img src="assets/img/logo.png" alt="logo"></img>
              </div>
            </div>
            <div className="mob__Links">
              <ul>
                <li><Link to="/">Home</Link ></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li>
                  <a href="#connect">
                    Contact
                  </a>
                </li>
                <li>
                  <a>
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button className="mb__Close-btn" onClick={toggleDrawer(false)} >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>



      </Drawer>
      {/* <MenuModal isOpen={isMobModalOpen} onClose={closeMobModal}></MenuModal> */}
      {/* <MobileModal isOpen={isMobModalOpen} onClose={closeMobModal}></MobileModal> */}
    </>
  );
};

export default Navbar;
