import React, { useState, useEffect } from "react";
import "./Slider.css";
import firebase from "firebase";
import SliderButton from "./SliderButton";
import SliderPhoto from "./SliderPhoto";
import Loading from "../Loading";
import SliderDots from "./SliderDots";
import ProgressBar from "../ProgressBar";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [navButtons, setNavButtons] = useState([
    {
      idT: "silder-btn-left",
      class: "fas fa-chevron-left",
      isLeft: true,
    },
    {
      idT: "silder-btn-right",
      class: "fas fa-chevron-right",
      isLeft: false,
    },
  ]);
  const [sliders, setSliders] = useState([]);
  const [isSliderMove, setSliderMove] = useState(true);
  const [progress, setProgress] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const db = firebase.firestore();
  const time = 5000;
  const numberToShow = 2;

  useEffect(() => {
    const slidersData = [];

    db.collection("Projects")
      .orderBy("update", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          slidersData.push(doc.data());
        });
        setSliders(slidersData.slice(0, numberToShow));
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const forward = (current + 1) % sliders.length;
    const id = setTimeout(() => setCurrent(forward), time);
    setProgress(0);
    return () => clearTimeout(id);
  }, [current, sliders.length]);

  useEffect(() => {
    const id = setTimeout(
      () => setProgress(progress + 1),
      time / 100 - time / 1000
    );
    return () => clearTimeout(id);
  }, [progress]);

  const sliderTimer = () => {
    setTimeout(() => setSliderMove(true), 500);
  };

  const changeSlide = (isBack) => {
    if (isSliderMove) {
      setSliderMove(false);
      sliderTimer();
      if (isBack) {
        setCurrent(current === 0 ? sliders.length - 1 : current - 1);
      } else {
        setCurrent(current === sliders.length - 1 ? 0 : current + 1);
      }
    }
  };

  return (
    <div className="slider-content">
      <div className="slider">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className={"slider-btn"}>
              {navButtons.map((navBtn, index) => {
                return (
                  <SliderButton
                    key={index}
                    id={navBtn.idT}
                    onClick={() => changeSlide(navBtn.isLeft)}
                    icon={navBtn.class}
                  ></SliderButton>
                );
              })}
            </div>
            <div id="slider-title">Lates updates</div>
            <div id="progressWrapper">
              <ProgressBar value={progress} styleType={"sliderV"} />
            </div>
            <div id="slider-imageCont">
              {sliders.map((slider, index) => {
                return (
                  <SliderPhoto
                    key={index}
                    index={index}
                    slider={slider}
                    currentT={current}
                  ></SliderPhoto>
                );
              })}
            </div>
            <div id="slider-dotsCont">
              {sliders.map((slider, index) => {
                return (
                  <SliderDots
                    key={index}
                    index={index}
                    currentT={current}
                    onClick={() => setCurrent(index)}
                  ></SliderDots>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
