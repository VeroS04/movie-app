import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useState, useEffect } from "react";
import { movieServices } from "../../services/movies";
import { PageMovie } from "../../components/common";

const PopularPage= () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    movieServices.getPopular().then(response => setPopular(response))
 }, []);

  return (
    <Layout>
      <PageMovie movies={popular} text={"Popular Movies"} />
    </Layout>
  );
};

export const Popular = withAuth(PopularPage)
