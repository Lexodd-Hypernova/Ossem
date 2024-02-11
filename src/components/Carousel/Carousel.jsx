import React from "react";
import "./Carousel.css";
const Carousel = () => {
  return (
    <div className="Carousel-container">
      <div
        id="carousel-example"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carousel-example"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#carousel-example" data-bs-slide-to="1"></li>
          <li data-bs-target="#carousel-example" data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="#">
              <img src="http://placekitten.com/1600/600" alt="Kitten 1" />
            </a>
            <div className="carousel-caption">
              <h3>Meow</h3>
              <p>Just Kitten Around</p>
            </div>
          </div>
          <div className="carousel-item">
            <a href="#">
              <img src="http://placekitten.com/1600/600" alt="Kitten 2" />
            </a>
            <div className="carousel-caption">
              <h3>Meow</h3>
              <p>Just Kitten Around</p>
            </div>
          </div>
          <div className="carousel-item">
            <a href="#">
              <img src="http://placekitten.com/1600/600" alt="Kitten 3" />
            </a>
            <div className="carousel-caption">
              <h3>Meow</h3>
              <p>Just Kitten Around</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel-example"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel-example"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
