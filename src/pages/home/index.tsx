
import { Layout } from "../../components";
import { BannerCarousel, PopularesList, TopList } from "../../components/common";
import { movieServices } from "../../services/movies";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";
import { useEffect, useState } from "react";

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    movieServices.getBanner().then(response => setMovies(response.splice(0, 5)))
    movieServices.getPopular().then(response => setPopular(response))
    movieServices.getTop().then(response => setTop(response))
 }, []);
   
  return (
    <Layout>
      <BannerCarousel movies={movies} />
      <PopularList movies={popular} text={Populares} />
      <TopList movies={top} text={"Top Movies"}/>
    </Layout>
  );
};

export const Home = withAuth(HomePage);
