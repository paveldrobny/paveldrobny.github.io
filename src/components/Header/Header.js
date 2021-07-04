import React, { useState, useEffect } from "react";
import "./Header.css";
import ThemeMessage from "../HelpMessages/Theme";
import ProgressBar from "../ProgressBar";

const Header = () => {
  const [percentage, setPercentage] = useState(0);
  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.getItem("isDarkTheme") ? true : false
  );
  const [isMessageTheme, setMessageTheme] = useState(
    localStorage.getItem("isMessageTheme") ? false : true
  );

  let headerActive = "";

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    getValue();
  });

  if (window.scrollY >= 15) {
    headerActive += "active";
  }

  const handleScroll = () => {
    let scrollStart =
        document.body.scrollTop || document.documentElement.scrollTop,
      scrollHeight =
        document.body.scrollHeight - document.documentElement.clientHeight;

    let percentValue = (scrollStart / scrollHeight) * 100;
    setPercentage(percentValue);
  };

  const changeTheme = () => {
    store();
    setMessageTheme(false);
    getValue();
  };

  const store = () => {
    localStorage.setItem("isDarkTheme", isDarkTheme);
    localStorage.setItem("isMessageTheme", isMessageTheme);
  };

  const getValue = () => {
    let bodyClass = document.body.classList,
      htmlClass = document.documentElement.classList;

    if (!localStorage.isDarkTheme) {
      store();
    }
    if (localStorage.getItem("isDarkTheme") === "true") {
      bodyClass.add("darkTheme");
      htmlClass.add("darkTheme");
      setDarkTheme(false);
    } else if (localStorage.getItem("isDarkTheme") === "false") {
      bodyClass.remove("darkTheme");
      htmlClass.remove("darkTheme");
      setDarkTheme(true);
    }
    if (localStorage.getItem("isMessageTheme") === "false") {
      setMessageTheme(false);
    }
  };

  return (
    <div id="header" className={headerActive}>
      <ProgressBar value={percentage} styleType={"header"} />
      <div className="header-cont">
        <div className="header-title">Pavel Drobny</div>
        <div className="header-navBtn">
          <ul>
            <li id="themeBtn" onClick={changeTheme}>
              <i className="fas fa-moon"></i>
            </li>
          </ul>
        </div>
      </div>
      <ThemeMessage isActive={isMessageTheme}></ThemeMessage>
    </div>
  );
};

export default Header;
