import React, { useState } from "react";
import SliderButton from "./SliderButton";
import SliderPhoto from "./SliderPhoto";
import "./Slider.css";

function Slider() {
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);
  const [navButtons, setNavButtons] = useState([
    {
      idT: "silder-btn-left",
      class: "fas fa-chevron-left",
      isLeft: true,
      isShow: true,
    },
    {
      idT: "silder-btn-right",
      class: "fas fa-chevron-right",
      isLeft: false,
      isShow: false,
    },
  ]);
  const [sliders, setSliders] = useState([
    {
      img: "Cards/cards_UE4_SideGame.jpg",
      newProject: false,
      updateProject: false,
    },
    {
      img: "Slides/slide_1.jpg",
      newProject: false,
      updateProject: false,
    },
  ]);

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
    </div>
  );
}

export default Slider;
