import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useState, useEffect } from "react";
import { movieServices } from "../../services/movies";
import { PopularesPage } from '../../components/common/populares-page'

const PopularPage= () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    movieServices.getPopular().then(response => setPopular(response))
 }, []);

  return (
    <Layout>
      <PopularesPage moviesPopular={popular} text={"Popular Movies"} />
    </Layout>
  );
};

export const Popular = withAuth(PopularPage)
