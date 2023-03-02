import { FC } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './style.scss'

type Props = {
  img: string;
  title: string;
  id: number
};

const MovieCard: FC<Props> = ({ title, img, id }) => {
  const navigate = useNavigate()
  return (
    <Card className="cards-estreno" onClick={() => navigate(`/movies/${id}`)}>
      <Card.Img className="card-block" src={img} alt={title} />
      <h3 className="title">{title}</h3>
    </Card>
  );
};

export { MovieCard };