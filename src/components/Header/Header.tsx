import "./Header.css";
import SettingsMenu from "../SettingsMenu";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const { t } = useTranslation();
  const [isShowMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">{t("title")}</div>
        <div className="header-nav-btn">
          <button
            className="header-btn"
            onClick={() => setShowMenu(!isShowMenu)}
          >
            <i className={"fas fa-cog"}></i>
          </button>
          <SettingsMenu isShow={isShowMenu} />
        </div>
      </div>
    </header>
  );
}

export default Header;
