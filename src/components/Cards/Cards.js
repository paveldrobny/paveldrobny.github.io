import React, { useState, useEffect } from "react";
// import firebase from "firebase";
import Card from "./Card";
import LoadingCard from "../Loadings/Card";
import "./Card.css";
import data from "../../cardsData";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const db = firebase.firestore();

  useEffect(() => {
    const cardsData = [];

    setCards(data);
    setLoading(false);
    //   });
  }, []);

  const updateProjectData = (repo, index) => {
    let result = "";
    let urlUpdate = `https://api.github.com/repos/paveldrobny/${repo}`;
    fetch(urlUpdate)
      .then((res) => res.json())
      .then((out) => {
        result = out.updated_at.slice(0, 10);

        // db.collection("Projects").doc(index).update({
        //   update: result,
        // });
      });
  };

  return (
    <div className="projects">
      {isLoading ? (
        <LoadingCard />
      ) : (
        cards
          .sort((a, b) => b.id - a.id)
          .map((card, index) => {
            return <Card card={card} key={index}></Card>;
          })
      )}
    </div>
  );
};

export default Cards;
