import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { GridMovies } from "../../components/common";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";

const NewReleasesPage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieServices.getUpcoming().then(response => setMovies(response))
 }, []);

  return (
    <Layout>
      <GridMovies movies={movies} text={"Upcoming Movies"} type={"slides"} />
    </Layout>
  );
};

export const NewReleases = withAuth(NewReleasesPage);
