import React from "react";
import "./LoadingSlider.css";

const LoadingSlider = () => {
  return (
    <div className="slider-content LoadSliderMain">
      <div id="slider-title" className="LoadSliderText"></div>
      <div className="slider">
        <div id="slider-image-content" className="LoadSlider"></div>
      </div>
    </div>
  );
};

export default LoadingSlider;
