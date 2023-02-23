import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const PopularPage= () => {
  return (
    <Layout>
      <h1>Popular</h1>
    </Layout>
  );
};

export const Popular = withAuth(PopularPage)
