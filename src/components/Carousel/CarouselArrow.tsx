import { ICarouselArrowProps } from "../../interfaces";

function CarouselArrow(props: ICarouselArrowProps) {
  const { changeSlide, icon } = props;

  return (
    <button className="carousel-btn" onClick={changeSlide}>
      <i className={`fas ${icon}`}></i>
    </button>
  );
}

export default CarouselArrow;
