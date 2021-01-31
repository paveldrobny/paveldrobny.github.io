import React from "react";

function SliderPhoto({ slider, index, current }) {
  return (
    <div
      className={index === current ? "slider-image active" : "slider-image"}
      style={{
        backgroundImage: `url(${
          require("../../assets/" + slider.img).default
        })`,
        right: `${current * 100}%`,
      }}
    >
      <div className="projectCont">
        <div className={`newProject ${slider.newProject ? "isNew" : ""}`}>
          NEW!
        </div>
        <div
          className={`updateProject ${slider.updateProject ? "isUpdate" : ""}`}
        >
          UPDATE!
        </div>
      </div>
    </div>
  );
}

export default SliderPhoto;
