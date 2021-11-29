import React from "react";
import "./LoadingCarousel.css";

const LoadingCarousel = () => {
  return (
    <div className="carousel-content LoadCarouselMain">
      <div id="carousel-title" className="LoadCarouselText"></div>
      <div className="carousel">
        <div id="carousel-image-content" className="LoadCarousel"></div>
      </div>
    </div>
  );
};

export default LoadingCarousel;
