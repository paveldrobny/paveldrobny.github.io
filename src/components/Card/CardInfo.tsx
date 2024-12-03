import { useTranslation } from "react-i18next";
import { ICard, ICardInfoText } from "../../interfaces";

type CardInfoProps = Pick<ICard, "using" | "language" | "updated">;

function CardInfo(props: CardInfoProps) {
  const { t } = useTranslation();
  const { using, language, updated } = props;

  const cardInfoData = [
    {
      title: "using",
      content: using,
    },
    {
      title: "language",
      content: language,
    },
    {
      title: "updated",
      content: updated,
    },
  ];

  const CardInfoText = (props: ICardInfoText) => {
    const { title, content } = props;
    return (
      <li className="card-text">
        {t(title)}: {content}
      </li>
    );
  };

  return (
    <ul className="card-list">
      {cardInfoData.map((c) => (
        <CardInfoText key={c.title} title={t(c.title)} content={c.content} />
      ))}
    </ul>
  );
}

export default CardInfo;
