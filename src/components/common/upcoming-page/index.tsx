import { FC } from "react";
import { Movies } from "./types";
import "./style.scss";
import { img_url } from "../../../constants";
import { useNavigate } from "react-router-dom";

const UpcomingPage: FC<Movies> = ({ movies, text }) => {
  const navigate = useNavigate();

  return (
    <div className="list-page">
      <h2 className="title">{text}</h2>
      <div className="pb-4 cards-page">
        {movies?.map((movie: any) => (
          <img
            className="card-page"
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            src={`${img_url + movie.poster_path}`}
            alt="First slide"
          />
        ))}
      </div>
    </div>
  );
};

export { UpcomingPage };
