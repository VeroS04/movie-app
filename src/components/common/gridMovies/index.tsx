import { FC } from "react";
import { IMG_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../../types";
import "./style.scss";

type Props = {
  movies: Movie[]
  text?: string
  type: "grid" | "slides";
}


const GridMovies: FC<Props> = ({ movies, text, type }) => {
  const navigate = useNavigate();

  return (
    <div className={type}>
      <h2 className="title">{text}</h2>
      <div className={`container-${type}`}>
        {movies?.map((movie: any) => (
          <img
            className={`card-${type}-img}`}
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            src={`${IMG_URL + movie.poster_path}`} 
            alt="First slide"           
          />
        ))}
      </div>
    </div>
  );
};
export { GridMovies };