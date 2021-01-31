import React from "react";
import "./ProgressBar.css";

function ProgressBar({ value }) {
  return (
    <div id="progressCont">
      <div id="progressValue" style={{ width: `${value}%` }}></div>
    </div>
  );
}

export default ProgressBar;
