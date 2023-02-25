import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { BannerCarousel } from "../../components/common";
import { getBanner } from "../../service";
import { withAuth } from "../../hoc";

 const [movies, setMovies] = useState([]);

 useEffect(() => {
     getBanner().then(response => setMovies(response.splice(0, 5)))
  }, []);

const HomePage = () => {

  return (
    <Layout>
      <BannerCarousel items={movies} />
    </Layout>
  );
};

export const Home = withAuth(HomePage);
