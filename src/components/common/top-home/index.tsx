import { FC } from "react";
import "./style.scss";
import { img_url } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { MovieTop } from "./type";

const TopList: FC<MovieTop> = ({ movies, text }) => {
  const navigate = useNavigate();

  return (
    <div className="list">
        <h2 className="title">{text}</h2>
        <div className="pb-4 cards">
            {movies?.map((movie: any) => (
                <img
                className="card-block"
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

export { TopList };