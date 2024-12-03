import { useEffect, useState } from "react";
import "./SettingsMenu.css";
import { useTranslation } from "react-i18next";
import { languageUIData } from "../../data/lists";
import SettingsRadio from "./SettingsRadio";
import SettingsItem from "./SettingsItem";

function SettingsMenu({ isShow }: { isShow: boolean }) {
  const { t, i18n } = useTranslation();

  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.getItem("isDarkTheme") ? true : false
  );

  useEffect(() => {
    getValue();
    getValue_i18n();
  }, []);

  const changeTheme = () => {
    store();
    getValue();
  };

  const store = () => {
    localStorage.setItem("isDarkTheme", isDarkTheme.toString());
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
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    store_i18n(language);
  };

  const store_i18n = (lang: string) => {
    localStorage.setItem("i18n", lang);
  };

  const getValue_i18n = () => {
    if (!localStorage.i18n) {
      changeLanguage("en");
    } else {
      changeLanguage(localStorage.i18n);
    }
  };

  return (
    <div className={`settings-menu ${isShow ? "is-show" : ""}`}>
      <SettingsItem
        text={t("darkTheme")}
        isActive={localStorage.isDarkTheme == "true"}
        click={changeTheme}
      />

      <div className="settings-row">
        {languageUIData.map((c) => {
          return (
            <SettingsRadio
              key={c.code}
              text={t(c.title)}
              isActive={localStorage.i18n == c.code}
              click={() => changeLanguage(c.code)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SettingsMenu;
