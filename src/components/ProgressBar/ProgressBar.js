import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ value, styleType }) => {
  return (
    <div id="progress-content">
      <div
        className={`progress-value ${styleType}`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
