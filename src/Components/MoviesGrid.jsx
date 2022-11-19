import React from "react";
import movies from "../data/movies.json";
import { MovieCard } from "./MovieCard";

const MoviesGrid = () => {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
