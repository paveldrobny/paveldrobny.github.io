import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Card.css";

function CardsView() {
  const [cards, setCards] = useState([
    {
      name: "Ping-Pong with AI (Beta)",
      img: "Cards/cards_PingPong.jpg",
      urlDemo: "https://paveldrobny.github.io/JS-Game_PingPong/",
      urlCode: "https://github.com/paveldrobny/JS-Game_PingPong",
      isDemo: true,
      repoName: "JS-Game_PingPong",
      using: "Canvas, DOM",
      update: "Сan't get data!",
      language: "JavaScript",
    },
    {
      name: "Side game template",
      img: "Cards/cards_UE4_SideGame.jpg",
      urlDemo: "",
      urlCode: "https://github.com/paveldrobny/UE4_SideGame",
      isDemo: false,
      repoName: "UE4_SideGame",
      using: "Unreal Engine 4.25",
      update: "Сan't get data!",
      language: "C++",
    },
  ]);

  useEffect(() => {
    cards.map((o, index) => {
      update(o.repoName, index);
    });
  }, []);

  function update(repo, index) {
    let result = "";
    let urlUpdate = `https://api.github.com/repos/paveldrobny/${repo}`;
    fetch(urlUpdate)
      .then((res) => res.json())
      .then((out) => {
        result = out.updated_at.slice(0, 10);
        let newCards = [...cards];
        newCards[index].update = result;
        setCards(newCards);
      });
  }

  return (
    <div className="projects">
      <section>
        {cards.map((card, index) => {
          return <Card card={card} key={index}></Card>;
        })}
      </section>
    </div>
  );
}

export default CardsView;
