import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ value, styleType }) => {
  return (
    <div id="progressCont">
      <div
        id="progressValue"
        className={styleType}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
