import { ICardAction } from "../../interfaces";

function CardAction(props: ICardAction) {
  const { url, clsName, text, icon } = props;

  return (
    <a href={url} target="_blank" className={`card-btn ${clsName}`}>
      <div className="card-btn-text">{text}</div>
      <i className={`${icon}`}></i>
    </a>
  );
}

export default CardAction;
