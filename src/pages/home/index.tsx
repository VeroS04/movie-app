import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const HomePage = () => {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export const Home = withAuth(HomePage);
