import React from "react";

const SliderDots = ({ index, currentT, onClick }) => {
  return (
    <div
      className={index === currentT ? "slider-dots active" : "slider-dots"}
      onClick={onClick}
    ></div>
  );
};

export default SliderDots;