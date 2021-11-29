import React, { useState, useEffect } from "react";
import "./Carousel.css";
import firebase from "firebase";
import CarouselButton from "./CarouselButton";
import CarouselPhoto from "./CarouselPhoto";
import LoadingCarousel from "../Loadings/Carousel";
import CarouselDots from "./CarouselDots";
import ProgressBar from "../ProgressBar";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [navButtons, setNavButtons] = useState([
    {
      id: "silder-btn-left",
      class: "fas fa-chevron-left",
      isLeft: true,
    },
    {
      id: "silder-btn-right",
      class: "fas fa-chevron-right",
      isLeft: false,
    },
  ]);
  const [carousels, setCarousels] = useState([]);
  const [isCarouselMove, setCarouselMove] = useState(true);
  const [progress, setProgress] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const db = firebase.firestore();
  const time = 5000;
  const numberToShow = 3;

  useEffect(() => {
    const carouselsData = [];

    db.collection("Projects")
      .orderBy("update", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          carouselsData.push(doc.data());
        });
        setCarousels(carouselsData.slice(0, numberToShow));
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const forward = (current + 1) % carousels.length;
    const id = setTimeout(() => setCurrent(forward), time);
    setProgress(0);
    return () => clearTimeout(id);
  }, [current, carousels.length]);

  useEffect(() => {
    const id = setTimeout(
      () => setProgress(progress + 1),
      time / 100 - time / 1000
    );
    return () => clearTimeout(id);
  }, [progress]);

  const carouselTimer = () => {
    setTimeout(() => setCarouselMove(true), 500);
  };

  const changeSlide = (isBack) => {
    if (isCarouselMove) {
      setCarouselMove(false);
      carouselTimer();
      if (isBack) {
        setCurrent(current === 0 ? carousels.length - 1 : current - 1);
      } else {
        setCurrent(current === carousels.length - 1 ? 0 : current + 1);
      }
    }
  };

  return (
    <div className="carousel-content">
      <div className="carousel">
        {isLoading ? (
          <LoadingCarousel />
        ) : (
          <div>
            <div id="carousel-title">Lates updates</div>
            <div id="progress-wrapper">
              <ProgressBar value={progress} styleType={"_carousel"} />
            </div>
            <CarouselPhoto carousels={carousels} current={current} />
            <CarouselButton navButtons={navButtons} changeSlide={changeSlide} />
            <CarouselDots
              carousels={carousels}
              current={current}
              setCurrent={setCurrent}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
