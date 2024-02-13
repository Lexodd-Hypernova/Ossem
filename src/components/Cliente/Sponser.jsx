import React from "react";
import Slider from "react-slick";
import logo1 from "../../assets/sreenidhi-logo 1.svg";
import logo2 from "../../assets/Logo_Anurag_University 1.svg";
import logo3 from "../../assets/sponser3.svg";
import "./Sponser.css";

const clientLogos = [logo1, logo2, logo3];

function Sponser() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the autoplay speed as needed (in milliseconds)
    speed: 500,
    slidesToShow: 4, // Adjust the number of logos to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="client-logos">
      <h2>Our Clientele</h2>
      <Slider {...settings}>
        {clientLogos.map((logo, index) => (
          <div key={index} className="logo-container">
            <img src={logo} alt={`Client Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sponser;
