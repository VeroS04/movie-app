import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useState, useEffect } from "react";
import { movieServices } from "../../services/movies";
import { DisplayMovies } from "../../components/common";

const PopularPage = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    movieServices.getPopular().then((response) => setPopular(response));
  }, []);

  return (
    <Layout>
      <DisplayMovies movies={popular} text={"Popular Movies"} type="grid" />
    </Layout>
  );
};

export const Popular = withAuth(PopularPage);
