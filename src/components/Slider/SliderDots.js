import React from "react";

const SliderDots = (props) => {
  return (
    <div id="slider-dots-content">
      {props.sliders.map((slider, index) => {
        return (
          <div
            key={index}
            className={
              index === props.current ? "slider-dots is-active" : "slider-dots"
            }
            onClick={() => props.setCurrent(index)}
          ></div>
        );
      })}
    </div>
  );
};

export default SliderDots;
