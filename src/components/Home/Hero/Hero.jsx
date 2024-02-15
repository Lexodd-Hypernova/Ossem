import React from "react";
import "./Hero.css";
import ArrowHead from "../../../assets/arrowhead.svg";
import SubHero from "./SubHero";
const Hero = () => {
  return (
    <>
      <div className="Hero-container">
        <div className="hero__Ttl">
          <h1>CRAFTED AND EMPOWERED, DIGITALLY.</h1>
        </div>
        <div className="hero__Cta">
          <button>
            Know more <img src={ArrowHead} alt="arrow" />
          </button>
        </div>
      </div>
      <SubHero />
    </>
  );
};

export default Hero;
