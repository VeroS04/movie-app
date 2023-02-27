import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { BannerCarousel } from "../../components/common";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";


const HomePage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
     movieServices.getUpcoming().then(response => setMovies(response.splice(0, 5)))
   }, []);
 

  return (
    <Layout>
      <BannerCarousel movies={movies} />
    </Layout>
  );
};

export const Home = withAuth(HomePage);
