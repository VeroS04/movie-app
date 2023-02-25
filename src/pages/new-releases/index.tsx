import { Layout } from "../../components";
import { withAuth } from "../../hoc";

const NewReleasesPage = () => {
  return (
    <Layout>
      <h1>Estrenos</h1>
    </Layout>
  );
};

export const NewReleases = withAuth(NewReleasesPage);
