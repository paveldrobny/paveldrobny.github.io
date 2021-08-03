import React from "react";
import "./Theme.css";

const Theme = ({ isActive }) => {
  return (
    <div id="theme-message" className={isActive ? "is-active" : ""}>
      <div id="msg-text-main">DARK THEME</div>
      <div id="msg-text">
        Click on the <i className="fas fa-moon"></i> to switch.
      </div>
    </div>
  );
};

export default Theme;