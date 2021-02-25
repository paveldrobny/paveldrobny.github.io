import React from "react";

function SliderDots({index, current, onClick}) {
  return (
    <div
      className={index === current ? "slider-dots active" : "slider-dots"}
      onClick={onClick}
    >
    </div>
  );
}

export default SliderDots;
