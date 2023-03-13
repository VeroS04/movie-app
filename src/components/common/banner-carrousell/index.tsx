import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import './style.scss';
import { img_url } from "../../../constants";

type Movie = {
  movies: Movie[]
}

const BannerCarousel: FC<Movie> = ({movies}) => {
  return (
    <Carousel className="mb-5" fade>
      {movies?.map((movie: any) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100 card-img-top"
            src={`${ img_url + movie.backdrop_path }`}
            alt="First slide"/>
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export { BannerCarousel };
