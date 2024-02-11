import React from "react";
import "./Footer.css";
import FooterVector from "../../assets/FooterVector.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="Footer-container">
      <h1>
        We Are Ossem <img src={FooterVector} alt="Footervector" />
      </h1>
      <div className="Footer-second-section">
        <button>Let's Connect {"->"}</button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempo
        </p>
      </div>
      <div className="Footer-third-section">
        <div className="Footer-third-first-section">
          <h4>Ed tech solutions for all educational organizations .</h4>
          <h5>
            We’ll listen to your needs, identify the best approach, and then
            create a bespoke smart ERP solution that’s right for you.
          </h5>
        </div>
        <div className="Footer-social-networks">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
