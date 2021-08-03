import React from "react";

const Title = ({ card }) => {
  return (
    <div className="card-title">
      <i>{card.name}</i>
    </div>
  );
};

export default Title;
