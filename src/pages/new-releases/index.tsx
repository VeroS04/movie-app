import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { DisplayMovies } from "../../components/common";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";

const NewReleasesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieServices.getUpcoming().then((response) => setMovies(response));
  }, []);

  return (
    <Layout>
      <DisplayMovies movies={movies} text={"Upcoming Movies"} type="grid" />
    </Layout>
  );
};

export const NewReleases = withAuth(NewReleasesPage);
