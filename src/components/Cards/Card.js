import React, { useState } from "react";
import Info from "./Info";
import Link from "./Link";
import Title from "./Title";

const Card = ({ card }) => {
  const [cardInfo, setCardInfo] = useState([
    { name: "Using", property: card.using },
    { name: "Language", property: card.language },
    { name: "Update", property: card.update },
  ]);

  return (
    <div className="card">
      <div className="card-img-content">
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${card.img})`,
          }}
        ></div>
      </div>
      <div className="card-view-content">
        <Title card={card} />
        <Info cardInfo={cardInfo} />
        <div className="card-view">
          <Link
            card={card.urlDemo}
            name="DEMO"
            className={`card-btn btn-demo ${card.isDemo ? "is-active" : ""}`}
          />
          <Link
            card={card.urlCode}
            name="SOURCE CODE"
            className="card-btn btn-code"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
