import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="movie-card" key={movie.id}>
        <Card style={{ width: "230px", margin: "50px" }}>
          <Card.Img
            variant="top"
            src={movie.posterUrl}
            style={{ height: "320px" }}
          />
          <Card.Body style={{ height: "250px", backgroundColor: "lightgray" }}>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text className="desc">{movie.description}</Card.Text>
            <div className="rate-watch">
              <Card.Text>
                <Rating testRating={false} rate={movie.rate} />
              </Card.Text>
              <Link to={`/movieapp/${movie.id}`}>
                <Button variant="dark">Go to trailer</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MovieCard;
