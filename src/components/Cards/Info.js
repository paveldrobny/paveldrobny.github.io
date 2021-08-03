import React from "react";

const Info = ({ cardInfo }) => {
  return (
    <>
      {cardInfo.map((info, index) => {
        return (
          <div key={index} className="card-info">
            <b>
              {info.name}: {info.property}
            </b>
          </div>
        );
      })}
    </>
  );
};

export default Info;
