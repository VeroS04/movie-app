import { Layout } from "../../components";
<<<<<<< HEAD
import { BannerCarousel, GridMovies } from "../../components/common";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";
import { useEffect, useState } from "react";
=======
import { BannerCarousel, PopularesList, TopList } from "../../components/common";
import { BannerCarousel, TopList } from "../../components/common";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";
import { useEffect, useState } from "react";
import { movieServices } from "../../services/movies";
>>>>>>> e58e7ac4f932fc525fe1d0926cc0709589433f4d

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
<<<<<<< HEAD
=======
  const [top, setTop] = useState([]);

  useEffect(() => {
      movieServices.getBanner().then(response => setMovies(response.splice(0, 5)))
      movieServices.getPopular().then(response => setPopular(response))
      movieServices.getTop().then(response => setTop(response))
   }, []);

  const [movies, setMovies] = useState([]);
>>>>>>> e58e7ac4f932fc525fe1d0926cc0709589433f4d
  const [top, setTop] = useState([]);

  useEffect(() => {
    movieServices.getUpcoming().then(response => setMovies(response.splice(0, 5)))
    movieServices.getPopular().then(response => setPopular(response))
    movieServices.getTop().then(response => setTop(response))
 }, []);
   
  return (
    <Layout>
      <BannerCarousel movies={movies} />
<<<<<<< HEAD
      <GridMovies movies={popular} text={"Populares"} type={"grid"} container={"container-grid"} card={"card-grid-img"} />
      <GridMovies movies={top} text={"Top Movies"} type={"grid"} container={"container-grid"} card={"card-grid-img"} />
=======
      <PopularesList movies={popular} text={ "Populares"} />
      <TopList movies={top} text={ "Top" } />
>>>>>>> e58e7ac4f932fc525fe1d0926cc0709589433f4d
    </Layout>
  );
};

export const Home = withAuth(HomePage);
