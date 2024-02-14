import React from "react";
import "./Hero.css";
import SubHeroImg from "../../../assets/SubHero.svg";
import MacIng from "../../../assets/macimg.svg";
const SubHero = () => {
  return (
    <>
      <div className="Sub-Hero">
        <h3>
          Our mission is to make management easy and effective for everyone,
          providing specially curated learning resources and a transformative
          platform.
        </h3>
        <img src={SubHeroImg} alt="" />
      </div>
      <div className="Sub-span-title">
        <h2>
          Lorem ipsum <span>dolor</span> sit amet, <br />
          adipiscing <span>Consectetur</span>
        </h2>
        <h5>
          Our mission is to make management easy and effective for everyone,
          providing specially curated learning resources and a transformative
          platform.
        </h5>
        <img src={MacIng} alt="mac" />
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h4>
      </div>
    </>
  );
};

export default SubHero;
