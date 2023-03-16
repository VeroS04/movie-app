import { Layout } from "../../components";
import { BannerCarousel, DisplayMovies } from "../../components/common";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    movieServices
      .getBanner()
      .then((response) => setMovies(response.splice(0, 5)));
    movieServices.getPopular().then((response) => setPopular(response));
    movieServices.getTop().then((response) => setTop(response));
  }, []);

  return (
    <Layout>
      <BannerCarousel movies={movies} />
      <DisplayMovies movies={popular} text="Populares" type="slides" />
      <DisplayMovies movies={popular} text="Populares" type="slides" />
    </Layout>
  );
};

export const Home = withAuth(HomePage);
