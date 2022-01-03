import React from "react";

const New = ({ card }) => {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    getServerTime();
  }, []);

  const getServerTime = () => {
    // const url = "http://worldtimeapi.org/api/timezone/Europe/Moscow";
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((date) => {
    //     const unixtime = date.unixtime;
    //     let distance = unixtime * 1000 - card.publishData

    //     // get days
    //     let result = Math.floor(distance / (1000 * 60 * 60 * 24));

    //     setTime(result);
    //     console.log(`R: ${result}`)
    //   });
    const date = new Date().getTime();
    const distance = date - card.publishData;

    // get days
    let result = Math.floor(distance / (1000 * 60 * 60 * 24));

    setTime(result);
  };

  return time >= 0 && time <= 7 ? (
    <div className="card-new">NEW</div>
  ) : (
    ""
  );
};

export default New;
