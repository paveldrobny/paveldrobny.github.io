import { useState, useEffect } from "react";
import "./Carousel.css";
import cards from "../../cards";
import ICard from "../../interfaces";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [navButtons, setNavButtons] = useState([
    {
      id: "carousel-btn-left",
      icon: "fa-chevron-left",
      isForward: true,
    },
    {
      id: "carousel-btn-right",
      icon: "fa-chevron-right",
      isForward: false,
    },
  ]);

  const [carousels, setCarousels] = useState(cards);
  //   const [isCarouselMove, setCarouselMove] = useState(true);
  //   const [progress, setProgress] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const numberToShow = 3;

  useEffect(() => {
    setCarousels(
      cards
        .sort((a: ICard, b: ICard) => {
          a.updateData = a.updateData.split(".").reverse().join("");
          a.updateData = b.updateData.split(".").reverse().join("");
          return a < b ? 1 : a > b ? -1 : 0;
        })
        .slice(0, numberToShow)
    );
    setLoading(false);
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
          {carousels.map((c, index: number) => {
            return (
              <div
                className={`carousel-image ${
                  current === index ? "is-active" : ""
                }`}
                style={{
                  backgroundImage: `url(${c.image})`,
                }}
              >
                <div className="carousel-info">
                  <div className="carousel-info-title">{c.title}</div>
                  <div className="carousel-info-date">{c.updateData}</div>
                </div>
              </div>
            );
          })}

          <div className="carousel-btn-content">
            {navButtons.map((n) => {
              return (
                <button
                  className="carousel-btn"
                  onClick={() => changeSlide(!n.isForward)}
                >
                  <i className={`fas ${n.icon}`}></i>
                </button>
              );
            })}
          </div>
        </div>
        <div className="carousel-dot-content">
          {carousels.map((c, index: number) => {
            return (
              <div
                className={`carousel-dot ${
                  current === index ? "is-active" : ""
                } `}
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
