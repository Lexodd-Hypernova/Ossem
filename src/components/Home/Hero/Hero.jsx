import React from "react";
import "./Hero.css";
import ArrowHead from "../../../assets/arrowhead.svg";
import SubHero from "./SubHero";
import { Fade } from "react-awesome-reveal";
const Hero = () => {
  return (
    <>
      <div className="Hero-container">
        <div className="hero__Ttl">
          <Fade direction="up" triggerOnce>
            <h1>CRAFTED AND EMPOWERED, DIGITALLY.</h1>
          </Fade>
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
