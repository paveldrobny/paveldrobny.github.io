import { ICarouselInfoProps } from "../../interfaces";

function CarouselInfo(props: ICarouselInfoProps) {
  const { title, updated } = props;

  return (
    <div className="carousel-info">
      <div className="carousel-info-title">{title}</div>
      <div className="carousel-info-date">{updated}</div>
    </div>
  );
}

export default CarouselInfo;
