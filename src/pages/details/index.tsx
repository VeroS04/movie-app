import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Calendar } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { IMG_URL } from "../../constants";
import { withAuth } from "../../hoc";
import { movieServices } from "../../services/movies";
import { MovieDetail } from "../../types";
import "./style.scss";

const DetailsPage = () => {
  const [details, setDetails] = useState<MovieDetail>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      movieServices.getDetails(id).then((data) => setDetails(data));
    }
  }, []);

  return (
    <Layout>
      {details && (
        <Container className="details" fluid>
          <div className="box-details-background">
            <img className="poster" src={`${IMG_URL}${details.poster_path}`} />
            <div className="img-box">
              <img
                src={
                  details.backdrop_path
                    ? `${IMG_URL}${details.backdrop_path}`
                    : "/img/posters-de-peliculas.png"
                }
              />
            </div>
          </div>
          <div className="box-details">
            <h2 className="pb-2">{details.title}</h2>
            <div className="detail-top">
              <span className="fw-bold fs-5">
                <Calendar /> {details.release_date.slice(0, 4)}
              </span>
            </div>
            <p className="pt-3 fs-4">{details.overview}</p>
          </div>
        </Container>
      )}
    </Layout>
  );
};

export const Details = withAuth(DetailsPage);
