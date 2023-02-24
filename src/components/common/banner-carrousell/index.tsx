import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Movie } from "./types";
import './style.scss';
import { img_url } from "../../../constants";


const BannerCarousel: FC<Movie> = ({items}) => {
  return (
    <Carousel className="mb-5" fade>
      {items?.map((items: any) => (
        <Carousel.Item key={items.id}>
          <img
            className="d-block w-100 card-img-top"
            src={`${ img_url + items.backdrop_path }`}
            alt="First slide"/>
            <Carousel.Caption>
              <h3>{items.title}</h3>
              <p>{items.overview}</p>
            </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export { BannerCarousel };
