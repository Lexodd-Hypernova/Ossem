import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonialData = [
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
];

function Testimonial() {
  const settings = {
    dots: true,
    arrows: false, // Remove arrows
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000, // Change the time as needed (in milliseconds)
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial-carousel">
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <h4>{testimonial}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
