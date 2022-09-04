import React, { useState, useEffect } from "react";
import "./Header.css";
import ThemeMessage from "../HelpMessages/Theme";
import ProgressBar from "../ProgressBar";

const Header = () => {
  const [percentage, setPercentage] = useState(0);
  const [active, setActive] = useState(true);
  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.getItem("isDarkTheme") ? true : false
  );
  // const [isMessageTheme, setMessageTheme] = useState(
  //   localStorage.getItem("isMessageTheme") ? false : true
  // );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getValue();
  });

  const handleScroll = () => {
    let scrollStart =
        document.body.scrollTop || document.documentElement.scrollTop,
      scrollHeight =
        document.body.scrollHeight - document.documentElement.clientHeight;

    let percentValue = (scrollStart / scrollHeight) * 100;
    setPercentage(percentValue);

    // window.scrollY >= 15 ? setActive(true) : setActive(false);
  };

  const changeTheme = () => {
    store();
    //setMessageTheme(false);
    getValue();
  };

  const store = () => {
    localStorage.setItem("isDarkTheme", isDarkTheme);
    //localStorage.setItem("isMessageTheme", isMessageTheme);
  };

  const getValue = () => {
    let bodyClass = document.body.classList,
      htmlClass = document.documentElement.classList;

    if (!localStorage.isDarkTheme) {
      store();
    }
    if (localStorage.getItem("isDarkTheme") === "true") {
      bodyClass.add("dark-theme");
      htmlClass.add("dark-theme");
      setDarkTheme(false);
    } else if (localStorage.getItem("isDarkTheme") === "false") {
      bodyClass.remove("dark-theme");
      htmlClass.remove("dark-theme");
      setDarkTheme(true);
    }
    // if (localStorage.getItem("isMessageTheme") === "false") {
    //   setMessageTheme(false);
    // }
  };

  return (
    <header id="header" className="is-active">
      {/* <ProgressBar value={percentage} styleType={"_header"} /> */}
      <div className="header-content">
        <div className="header-title">Pavel Drobny</div>
        <div className="header-nav-btn">
          <ul>
            <li id="theme-btn" onClick={changeTheme}>
              <i
                className={`${isDarkTheme ? "fas fa-moon" : "fas fa-sun"} `}
              ></i>
            </li>
          </ul>
        </div>
      </div>
      {/* <ThemeMessage isActive={isMessageTheme}></ThemeMessage> */}
    </header>
  );
};

export default Header;
