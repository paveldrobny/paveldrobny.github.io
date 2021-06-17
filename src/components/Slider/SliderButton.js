import React from "react";

const SliderButton = ({ id, icon, onClick }) => {
  return (
    <button onClick={onClick} id={id}>
      <i className={icon}></i>
    </button>
  );
};

export default SliderButton;
