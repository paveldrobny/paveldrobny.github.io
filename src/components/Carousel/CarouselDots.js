import React from "react";

const CarouselDots = (props) => {
  return (
    <div id="carousel-dots-content">
      {props.carousels.map((carousel, index) => {
        return (
          <div
            key={index}
            className={
              index === props.current ? "carousel-dots is-active" : "carousel-dots"
            }
            onClick={() => props.setCurrent(index)}
          ></div>
        );
      })}
    </div>
  );
};

export default CarouselDots;