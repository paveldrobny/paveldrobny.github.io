import { useState, useEffect } from "react";
import "./Carousel.css";
import cards from "../../data/cards";
import { ICard } from "../../interfaces";
import CarouselDot from "./CarouselDot";
import CarouselArrow from "./CarouselArrow";
import CarouselImage from "./CarouselImage";
import { slideToShow } from "../../data/config";
import { sliderBtnData } from "../../data/lists";

function Carousel() {
  const [current, setCurrent] = useState(0);

  const [carousels, setCarousels] = useState(cards);

  useEffect(() => {
    setCarousels(
      cards
        .sort((a: ICard, b: ICard) => {
          return b.publishData - a.publishData;
        })
        .slice(0, slideToShow)
    );
  }, []);

  const changeSlide = (isForward: boolean) => {
    if (isForward) {
      setCurrent(current === carousels.length - 1 ? 0 : current + 1);
    } else {
      setCurrent(current === 0 ? carousels.length - 1 : current - 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-content">
        <div className="carousel-image-wrapper">
          {carousels.map((c: ICard, index: number) => {
            return (
              <CarouselImage
                key={c.title}
                current={current}
                index={index}
                {...c}
              />
            );
          })}

          <div className="carousel-btn-content">
            {sliderBtnData.map((n) => {
              return (
                <CarouselArrow
                  key={n.icon}
                  icon={n.icon}
                  changeSlide={() => changeSlide(!n.isForward)}
                />
              );
            })}
          </div>
        </div>

        <div className="carousel-dot-content">
          {carousels.map((c, index: number) => {
            return (
              <CarouselDot
                key={c.id}
                current={current}
                index={index}
                setCurrent={() => setCurrent(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
