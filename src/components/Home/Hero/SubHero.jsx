import React from "react";
import "./Hero.css";
import SubHeroImg from "../../../assets/SubHero.svg";
import MacIng from "../../../assets/macimg.svg";
import { Fade } from "react-awesome-reveal";
{/* <Fade direction="up" triggerOnce>

</Fade> */}
const SubHero = () => {
  return (
    <>
      <div className="Sub-Hero">
        <div className="sb_hr_Row1">

          <p>
            <Fade direction="up" triggerOnce>
              Our mission is to make management easy and effective
              for everyone, providing specially curated learning
              resources and a transformative platform.

            </Fade>
          </p>
          <div className="sb_hr-img">
            <img src={SubHeroImg} alt="" />
          </div>
        </div>
      </div>

      <div className="build__Sec">
        <div className="bld__Ttl">
          <h2>
            With <span className="ttl_stl1">Ossem</span> You
            <br></br>
            <span className="ttl_stl2">Build to </span><span className="ttl_stl3">Scale</span>
          </h2>
          <p>
            Our mission is to make management easy and effective for everyone,
            providing specially curated learning resources and a transformative platform.
          </p>
        </div>
        <div className="bld__hr-img">
          <img src={MacIng} alt="mac" />
        </div>
        <div className="bld_ext-p">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

export default SubHero;
