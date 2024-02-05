import React from "react";
import "./Hero.css";
import ArrowHead from "../../assets/arrowhead.svg";
import SubHero from "./SubHero";
const Hero = () => {
  return (
    <>
      <div className="Hero-container">
        {/* <img src={HeroImg} alt="img" /> */}
        <h1>
          {" "}
          A Digital Platform <br />
          Crafted to Empower
        </h1>
        <button>
          Know more <img src={ArrowHead} alt="arrow" />
        </button>
      </div>
      <SubHero />
    </>
  );
};

export default Hero;
