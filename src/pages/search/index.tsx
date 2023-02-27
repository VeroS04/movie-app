import { Layout } from "../../components";
import { SearchForm } from "../../components/forms";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { movieServices } from "../../services/movies";
import { Movie, Search } from '../../types'
import { withAuth } from "../../hoc";
import { Col, Container, Row } from "react-bootstrap";
import { CardsMovie } from "../../components/common/movie-cards";
import { img_url } from "../../constants";
import { useParam } from "../../hooks/useParams";


const SearchPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const {  params, setParams } = useParam()

  useEffect(() => {
    setSearchParams(params);
    const title = searchParams.get('title')
    movieServices.searchMovie(title).then((data) => {
      setMovies(data.results)
    })
  }, [searchParams, params]);

  const searchQuery = (params: Search) => {
    setParams((prevState) => ({ ...prevState, title: params.title }));
  };

  return (
    <Layout>
      <SearchForm onSearch={searchQuery} />
      <div className="container mb-5">
        <div className="row justify-content-around">
          {movies.map((movies) => (
            <div key={movies.id}  className="col-3">
              <CardsMovie
                title={movies.title}
                img={`${img_url + movies.poster_path}`}
                id={movies.id}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const SearchP = withAuth(SearchPage);
