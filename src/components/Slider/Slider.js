import React, { useState, useEffect } from "react";
import firebase from "firebase";
import SliderButton from "./SliderButton";
import SliderPhoto from "./SliderPhoto";
import "./Slider.css";
import Loading from "../Loading/Loading";

function Slider() {
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
  const [isLoading, setLoading] = useState(true);

  const db = firebase.firestore();

  useEffect(() => {
    const slidersData = [];

    db.collection("Sliders")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          slidersData.push(doc.data());
        });
        setSliders(slidersData);
        setLoading(false);
      });
  }, []);

  function changeSlide(isBack) {
    if (isBack) {
      setCurrent(current === 0 ? sliders.length - 1 : current - 1);
    } else {
      setCurrent(current === sliders.length - 1 ? 0 : current + 1);
    }
  }

  return (
    <div className="slider-content">
      <div className="slider">
        {isLoading ? (
          <Loading/>
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
            <div id="slider-imageCont">
              {sliders.map((slider, index) => {
                return (
                  <SliderPhoto
                    key={index}
                    index={index}
                    slider={slider}
                    current={current}
                  ></SliderPhoto>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Slider;