import React from "react";

function SliderPhoto({ slider, index, current, name }) {
  return (
    <div
      className={index === current ? "slider-image active" : "slider-image"}
      style={{
        backgroundImage: `url(${slider.img})`,
        right: `${current * 100}%`,
      }}
    >
    <div className="projectInfo">
       <div className="projectName"><i>{name}</i></div>
    </div>
    </div>
  );
}

export default SliderPhoto;
