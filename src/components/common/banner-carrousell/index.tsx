import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Movie } from "./types";
import './style.scss';
import { img_url } from "../../../constants";


const BannerCarousel: FC<Movie> = ({movies}) => {
  return (
    <Carousel className="mb-5" fade>
      {movies?.map((movies: any) => (
        <Carousel.Item key={movies.id}>
          <img
            className="d-block w-100 card-img-top"
            src={`${ img_url + movies.backdrop_path }`}
            alt="First slide"/>
            <Carousel.Caption>
              <h3>{movies.title}</h3>
              <p>{movies.overview}</p>
            </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export { BannerCarousel };
