import "./App.css";
import MoviesGrid from "./Components/MoviesGrid";
import styles from "./Components/App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router className="App">
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>

      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
