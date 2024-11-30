import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.getItem("isDarkTheme") ? true : false
  );

  useEffect(() => {
    getValue();
  });

  const changeTheme = () => {
    store();
    //setMessageTheme(false);
    getValue();
  };

  const store = () => {
    localStorage.setItem("isDarkTheme", isDarkTheme.toString());
    //localStorage.setItem("isMessageTheme", isMessageTheme);
  };

  const getValue = () => {
    const bodyClass = document.body.classList;
    const htmlClass = document.documentElement.classList;

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
    <header className="header">
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
    </header>
  );
}

export default Header;
