
import { FC } from "react";
import { img_url } from "../../../constants";
import './style.scss';

export type MovieDetail = {
    movies: [] | any

}


const DetailsMovie: FC<MovieDetail> = ({ movies }) => {

    return (
        <div className="container-detail">
            <div className="img-detail">
                <img
                    src={`${img_url + movies.poster_path}`}
                />
            </div>
            <div className="text">
                <h2 className="title">{movies.title}</h2>
                <p>{movies.overview}</p>
            </div>
        </div>

    );
}

export { DetailsMovie };