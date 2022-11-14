import React from "react";

const CarouselDotsImg = (props) => {
  return (
    <div id="carousel-dots-content">
      {props.carousels.map((carousel, index) => {
        return (
          <img
            className={
              index === props.current
                ? "carousel-dots-img is-active"
                : "carousel-dots"
            }
            src={carousel.img}
            alt="?"
            onClick={() => props.setCurrent(index)}
          />
        );
      })}
    </div>
  );
};

export default CarouselDotsImg;
