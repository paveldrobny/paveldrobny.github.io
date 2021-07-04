import React from "react";

const SliderButton = (props) => {
  return (
    <div className="slider-btn">
      {props.navButtons.map((navBtn, index) => {
        return (
          <button
            key={index}
            onClick={() => props.changeSlide(navBtn.isLeft)}
            id={navBtn.id}
          >
            <i className={navBtn.class}></i>
          </button>
        );
      })}
    </div>
  );
};

export default SliderButton;
