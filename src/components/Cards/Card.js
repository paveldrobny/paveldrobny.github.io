import React from "react";

function Card({ card }) {
  return (
    <div className="card">
      <div className="card_img_Cont">
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${card.img})`,
          }}
        ></div>
      </div>
      <div className="card_view_content">
        <div className="card_title">{card.name}</div>
        <div className="card_info">
          <b>Using: {card.using} </b>
        </div>
        <div className="card_info">
          <b>Language: {card.language}</b>
        </div>
        <div className="card_info">
          <b>Update: {card.update}</b>
        </div>
        <div className="card_view">
          <a
            target="_blank"
            className={`btn_Demo ${card.isDemo ? "activeDemo" : ""}`}
            href={card.urlDemo}
          >
            DEMO
          </a>
          <a target="_blank" className="btn_Code" href={card.urlCode}>
            SOURCE CODE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
