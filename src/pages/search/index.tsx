import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const SearchPage = () => {
  return (
    <Layout>
      <h1>Busqueda</h1>
    </Layout>
  );
};

export const Search = withAuth(SearchPage);
