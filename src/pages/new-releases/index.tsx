import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { UpcomingPage } from "../../components/common/upcoming-page";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";

const NewReleasesPage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieServices.getUpcoming().then(response => setMovies(response))
 }, []);

  return (
    <Layout>
      <UpcomingPage movies={movies} text={"Upcoming Movies"} />
    </Layout>
  );
};

export const NewReleases = withAuth(NewReleasesPage);
