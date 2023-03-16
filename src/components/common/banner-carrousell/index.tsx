import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import './style.scss';
import { IMG_URL } from "../../../constants";

export type Movie = {
  movies: Movie[]
}

const BannerCarousel: FC<Movie> = ({movies}) => {
  return (
    <Carousel className="mb-5" fade>
      {movies?.map((movies: any) => (
        <Carousel.Item key={movies.id}>
          <img
            className="d-block w-100 card-img-top"
            src={`${ IMG_URL + movies.backdrop_path }`}
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
