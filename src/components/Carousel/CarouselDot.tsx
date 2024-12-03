import { ICarouselDotProps } from "../../interfaces";

function CarouselDot(props: ICarouselDotProps) {
  const { current, index, setCurrent } = props;

  return (
    <div
      className={`carousel-dot ${current === index ? "is-active" : ""} `}
      onClick={setCurrent}
    ></div>
  );
}

export default CarouselDot;
