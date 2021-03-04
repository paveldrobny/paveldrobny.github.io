import React from "react";

function SliderPhoto({ slider, index, current }) {
  return (
    <div
      className={index === current ? "slider-image active" : "slider-image"}
      style={{
        backgroundImage: `url(${slider.img})`,
        right: `${current * 100}%`,
      }}
    >
      <div className="projectInfo">
        <div className="projectName">
          <i><b>{slider.name}</b></i>
          {slider.using}
        </div>
      </div>
    </div>
  );
}

export default SliderPhoto;
