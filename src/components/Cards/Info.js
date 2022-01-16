import React from "react";

const Info = ({ cardInfo }) => {
  return (
    <>
      {cardInfo.map((info, index) => {
        return (
          <div key={index} className="card-info">
            <div className="card-text">
              {info.name}: {info.property}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Info;
