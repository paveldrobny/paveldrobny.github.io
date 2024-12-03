import "./Card.css";
import { ICard } from "../../interfaces";
import CardInfo from "./CardInfo";
import CardAction from "./CardAction";
import { useTranslation } from "react-i18next";

function Card(props: ICard) {
  const { t } = useTranslation();

  const btnActions = [
    {
      url: props.urlDemo,
      clsName: "btn-demo",
      textCode: "demo",
      icon: "fas fa-play",
      isHide: props.urlDemo.length === 0,
    },
    {
      url: props.urlCode,
      clsName: "btn-code",
      textCode: "sourceCode",
      icon: "fab fa-github",
      isHide: false,
    },
  ];

  const { image, title } = props;

  return (
    <div className="card">
      <img className="card-img" src={image} alt={title} />
      <h1 className="card-title">{title}</h1>
      <CardInfo {...props} />
      <div className="card-btn-content">
        {btnActions.map((b) => {
          return !b.isHide ? (
            <CardAction key={b.textCode} text={t(b.textCode)} {...b} />
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Card;
