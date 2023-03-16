import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../../../constants";
import "./styles.scss";

type Props = {
  movies: Props[];
  text?: string;
  type: "grid" | "slides";
};

const DisplayMovies: FC<Props> = ({ movies, text, type }) => {
  const navigate = useNavigate();

  return (
    <div className={type}>
      <h2 className="title">{text}</h2>
      <div className="pb-4 cards">
        {movies?.map((movie: any) => (
          <img
            className="card"
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

export { DisplayMovies };
