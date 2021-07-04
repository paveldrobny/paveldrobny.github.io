import React from "react";

const SliderPhoto = (props) => {
  return (
    <div id="slider-image-content">
      {props.sliders.map((slider, index) => {
        return (
          <div
            key={index}
            className={
              index === props.current ? "slider-image active" : "slider-image"
            }
            style={{
              backgroundImage: `url(${slider.img})`,
              right: `${props.current * 100}%`,
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
      })}
    </div>
  );
};

export default SliderPhoto;
