import React from "react";
import "./ThemeMessage.css";

function ThemeMessage({isActive}) {
  return (
    <div id="themeMessage" className={isActive ? "active" : ""}>
      <div id="msgTextMain">NEW THEME!</div>
      <div id="msgText">Dark theme available.</div>
      <div id="msgText">
        Click on the <i className="fas fa-moon"></i> to switch theme.
      </div>
    </div>
  );
}

export default ThemeMessage;
