import React from "react";
import New from "../Cards/New";

const CarouselPhoto = (props) => {
  return (
    <div id="carousel-image-content">
      {props.carousels.map((carousel, index) => {
        return (
          <div
            key={index}
            className={
              index === props.current
                ? "carousel-image is-active"
                : "carousel-image"
            }
            style={{
              backgroundImage: `url(${carousel.img})`,
              right: `${props.current * 100}%`,
            }}
          >
            <New card={carousel}/>
            <div className={
              index === props.current
                ? "project-info is-active"
                : "project-info"
            }>
              <div className="project-name">
                <i>
                  <b>{carousel.name}</b>
                </i>
                {carousel.using}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselPhoto;
