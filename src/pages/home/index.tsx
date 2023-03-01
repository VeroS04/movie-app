
import { Layout } from "../../components";
import { BannerCarousel, PopularesList } from "../../components/common";
import { movieServices } from "../../services/movies";
import { withAuth } from "../../hoc";
import { useEffect, useState } from "react";

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    movieServices.getBanner().then(response => setMovies(response.splice(0, 5)))
    movieServices.getPopular().then(response => setPopular(response))
 }, []);

  return (
    <Layout>
      <BannerCarousel movies={movies} />
      <PopularesList movies={popular} text={"Popular Movies"}/>
    </Layout>
  );
};

export const Home = withAuth(HomePage);
