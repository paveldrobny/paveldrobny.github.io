import React from "react";
import "./Theme.css";

const Theme = ({ isActive }) => {
  return (
    <div id="themeMessage" className={isActive ? "active" : ""}>
      <div id="msgTextMain">DARK THEME</div>
      <div id="msgText">
        Click on the <i className="fas fa-moon"></i> to switch.
      </div>
    </div>
  );
};

export default Theme;
