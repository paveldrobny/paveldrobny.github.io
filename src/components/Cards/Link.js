import React from "react";

const Link = ({ card, name, className, FA_icon }) => {
  return (
    <a target="_blank" rel="noreferrer" className={className} href={card}>
      <div className="card-btn-text">{name}</div>
      <i className={`fas fa-${FA_icon}`}></i>
    </a>
  );
};

export default Link;
