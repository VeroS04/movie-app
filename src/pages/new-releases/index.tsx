import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "../../components";
import { GridMovies, Pager } from "../../components/common";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";

const NewReleasesPage = () => {
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPages] = useState(Number);
  const [params, setParams] = useState({ page: '1' })
  const [searchParams, setSearchParams] = useSearchParams()


  useEffect(() => {
      setSearchParams({page: params.page});
  }, [params]);

  useEffect(() => {
    const currentPage = searchParams.get("page");
      movieServices.getUpcoming(currentPage || "1").then(response => {
          setMovies(response)
          setTotalPages(response.total_pages)
      })
  }, [searchParams])

  const setQuery = (page: string) => {
      setParams(prevState => ({ ...prevState, page: page }))
  }


  return (
    <Layout>
      <GridMovies
        movies={movies}
        text={"Upcoming Movies"}
        type={"slides"}
        container={"container-slides"}
        card={"card-slides-img"}
      />
      <Pager  onClick={setQuery} totalPages={totalPage} />
    </Layout>
  );
};

export const NewReleases = withAuth(NewReleasesPage);
