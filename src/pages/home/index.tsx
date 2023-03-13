import { Layout } from "../../components";
import { BannerCarousel, PopularesList, TopList } from "../../components/common";
import { BannerCarousel, TopList } from "../../components/common";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";
import { useEffect, useState } from "react";
import { movieServices } from "../../services/movies";

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
      movieServices.getBanner().then(response => setMovies(response.splice(0, 5)))
      movieServices.getPopular().then(response => setPopular(response))
      movieServices.getTop().then(response => setTop(response))
   }, []);

  const [movies, setMovies] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    movieServices.getBanner().then(response => setMovies(response.splice(0, 5)))
    movieServices.getTop().then(response => setTop(response))
 }, []);
   
  return (
    <Layout>
      <BannerCarousel movies={movies} />
      <PopularesList movies={popular} text={ "Populares"} />
      <TopList movies={top} text={ "Top" } />
    </Layout>
  );
};

export const Home = withAuth(HomePage);
