import React, { useEffect } from "react";
import "./hero.css";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".ft_ttl-txt span", 1.8, {
      y: 0,
      ease: "power4.out",
      delay: 0.5,
      skewY: 0,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);
  return (
    <div className="ft_Hero-wrap">
      <div className="ft_Hero-sec">
        <div className="ft_Hr-ttl">
          <div className="ft_ttl-txt">
            <span>One Stop</span>
          </div>
          <div className="ft_ttl-txt">
            <span>Solution for</span>
          </div>
          <div className="ft_ttl-txt">
            <span>Educational</span>
          </div>
          <div className="ft_ttl-txt">
            <span>Management -</span>
          </div>
          <div className="ft_ttl-txt">
            <span>Feature Odyssey</span>
          </div>
        </div>
        <div className="fet__Mb-ttl">
          <h1>
            One Stop<br></br>
            Solution for<br></br>
            Educational<br></br>
            Management -  Feature Odyssey.
          </h1>
        </div>
        <div className="ft_Hr-img">
          <img src="assets/img/hr-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
