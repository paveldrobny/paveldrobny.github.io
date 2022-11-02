import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import aboutData from "./aboutData";

const App = () => {
  const [cards, setCards] = useState(aboutData);

  return (
    <div className="App">
      <Header />
      <main id="main-content">
        <Carousel />
        <Cards />
        <div id="about">
          <div id="about-title">
            I like <i className="fas fa-heart"></i>
          </div>
          <div id="about-cards-content">
            {cards.map((card) => {
              return (
                <div className="about-cards">
                  <div className="about-cards-title">{card.title}</div>
                  <div className="about-cards-desc">{card.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
