import { ICarouselImageProps, ICarouselInfoProps } from "../../interfaces";
import CarouselInfo from "./CarouselInfo";

function CarouselImage(props: ICarouselImageProps & ICarouselInfoProps) {
  const { current, index, image } = props as ICarouselImageProps;
  const { title, updated } = props as ICarouselInfoProps;

  return (
    <div
      className={`carousel-image ${current === index ? "is-active" : ""}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <CarouselInfo title={title} updated={updated} />
    </div>
  );
}

export default CarouselImage;
