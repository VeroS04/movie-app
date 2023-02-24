import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { BannerCarousel } from "../../components/common";
import { getBanner } from "../../service";

const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

      getBanner().then(response => setMovies(response.splice(0, 5)))
  }, []);

  return (
    <Layout>
      <BannerCarousel items={movies} />
    </Layout>
  );
};

export { Home };
