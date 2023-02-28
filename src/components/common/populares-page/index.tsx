import { FC } from "react";
import { MoviePopular } from "./types";
import "./style.scss";
import { img_url } from "../../../constants";
import { useNavigate } from "react-router-dom";

const PopularesPage: FC<MoviePopular> = ({ moviesPopular, text }) => {
  const navigate = useNavigate();

  return (
    <div className="list-page">
      <h2 className="title">{text}</h2>
      <div className="pb-4 cards-page">
        {moviesPopular?.map((moviePop: any) => (
          <img
            className="card-page"
            key={moviePop.id}
            onClick={() => navigate(`/movie/${moviePop.id}`)}
            src={`${img_url + moviePop.poster_path}`}
            alt="First slide"
          />
        ))}
      </div>
    </div>
  );
};

export { PopularesPage };