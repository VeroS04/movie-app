import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { img_url } from "../../constants";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";
import { Movie } from "../../types";

const DetailsPage = () => {
  const [details, setDetails] = useState<Movie>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      movieServices.getDetails(id).then((data) => setDetails(data));
    }
  }, []);

  return (
    <Layout>
      {details && (
        <div className="mt-5 ms-5 col-2">
          <div className="card">
            <img className=""
              src={`${img_url}${details.poster_path}`}
            />
          </div>
          <div className="box-details">
            <h2>{details.title}</h2>
            <p>{details.overview}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export const Details = withAuth(DetailsPage);