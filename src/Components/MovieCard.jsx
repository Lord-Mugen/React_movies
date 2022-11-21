import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to="/movies/"></Link>
      <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
      <div>{movie.title}</div>
    </li>
  );
};

export default MovieCard;
