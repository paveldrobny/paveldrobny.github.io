import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import cards from "./data/cards";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Title from "./components/Title";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    backend: {
      loadPath: "/i18n/{{lng}}/{{ns}}.json",
    },
    ns: ["translation"],
    defaultNS: "translation",
  });

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />

      <Title text={t("latestUpdate")} icon="fa-regular fa-newspaper" />
      <Carousel />

      <Title text={t("projectList")} icon="fa-solid fa-list" />
      <div className="cards-wrapper">
        {cards.map((c) => {
          return <Card key={c.id} {...c} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
