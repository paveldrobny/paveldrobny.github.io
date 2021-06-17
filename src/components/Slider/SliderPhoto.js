import React from "react";

const SliderPhoto = ({ slider, index, currentT }) => {
  return (
    <div
      className={index === currentT ? "slider-image active" : "slider-image"}
      style={{
        backgroundImage: `url(${slider.img})`,
        right: `${currentT * 100}%`,
      }}
    >
      <div className="projectInfo">
        <div className="projectName">
          <i>
            <b>{slider.name}</b>
          </i>
          {slider.using}
        </div>
      </div>
    </div>
  );
};

export default SliderPhoto;
