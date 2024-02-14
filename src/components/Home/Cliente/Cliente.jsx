import React from "react";
import "./Cliente.css";
import Testimonial from "./Testimonial/Testimonial";
import Sponser from "./Sponser";
const Cliente = () => {
  return (
    <div className="Cliente-container">
      <Sponser />
      <Testimonial />
    </div>
  );
};

export default Cliente;
