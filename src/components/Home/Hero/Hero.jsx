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
          <div id="btn_container">
            <button className="learn-more-btn">
              <span className="circle-btn" aria-hidden="true">
                <span className="icon-btn arrow-btn"></span>
              </span>
              <span class="button-text">Learn More</span>
            </button>
          </div>
        </div>
      </div>
      <SubHero />
    </>
  );
};

export default Hero;
