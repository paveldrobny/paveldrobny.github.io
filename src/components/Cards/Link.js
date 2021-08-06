import React from "react";

const Link = ({ card, name, className, FA_icon }) => {
  return (
    <a target="_blank" rel="noreferrer" className={className} href={card}>
      <i className={`fas fa-${FA_icon}`}></i> {name}
    </a>
  );
};

export default Link;
