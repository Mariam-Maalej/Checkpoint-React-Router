import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { movies } from "./DataMovie";

const Trailer = ({ match }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(movies.find((movie) => movie.id === +match.params.id));
  }, []);
  return (
    <div className="trailer">
      <h1>Movie Trailer</h1>
      <p>{movie.trailer}</p>
      <p>{movie.description}</p>
      <hr />
      <Link to="/movieapp">
        <Button variant="dark">Go Back</Button>
      </Link>
    </div>
  );
};

export default Trailer;
