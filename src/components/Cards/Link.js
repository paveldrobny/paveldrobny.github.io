import React from "react";

const Link = ({ card, name, className }) => {
  return (
    <a target="_blank" rel="noreferrer" className={className} href={card}>
      {name}
    </a>
  );
};

export default Link;
