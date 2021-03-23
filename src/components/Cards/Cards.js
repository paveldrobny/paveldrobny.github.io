import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Card from "./Card";
import "./Card.css";

function Cards() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const db = firebase.firestore();

  useEffect(() => {
    const cardsData = [];

    db.collection("Projects")
      .orderBy("id", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          cardsData.push(doc.data());
          updateProjectData(doc.data().repoName, doc.id);
        });
        setCards(cardsData);
        setLoading(false);
      });
  }, []);

  function updateProjectData(repo, index) {
    let result = "";
    let urlUpdate = `https://api.github.com/repos/paveldrobny/${repo}`;
    fetch(urlUpdate)
      .then((res) => res.json())
      .then((out) => {
        result = out.updated_at.slice(0, 10);
        
        db.collection("Projects").doc(index).update({
          update: result,
        });
      });
  }

  return (
    <div className="projects">
      <section>
        {isLoading ? (
          <div id="cardsLoading">Loading projects...</div>
        ) : (
          cards.map((card, index) => {
            return <Card card={card} key={index}></Card>;
          })
        )}
      </section>
    </div>
  );
}

export default Cards;
