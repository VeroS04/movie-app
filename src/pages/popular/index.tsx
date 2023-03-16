import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useState, useEffect } from "react";
import { movieServices } from "../../services/movies";
import { GridMovies } from "../../components/common";

const PopularPage= () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    movieServices.getPopular().then(response => setPopular(response))
 }, []);

  return (
    <Layout>
      <GridMovies movies={popular} text={"Popular Movies"} type={"slides"} container={"container-slides"} card={"card-slides-img"} />
    </Layout>
  );
};

export const Popular = withAuth(PopularPage)
