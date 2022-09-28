import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style/using-api.css";
import reportWebVitals from "./reportWebVitals";
//////////////////////////////////////////
//////////////////////////////////////////
function App() {
  const [movies, setMovices] = useState([]);
  const fetchMoviesHandler = () => {
    return fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformMovices = data.results.map((move) => {
          return {
            id: move.episode_id,
            title: move.title,
            releaseDate: move.release_date,
            openingText: move.opening_crawl,
          };
        });
        setMovices(transformMovices);
      });
  };
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

const MoviesList = (props) => {
  return (
    <ul className={"movies-list"}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

const Movie = (props) => {
  return (
    <li className={"movie"}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};
//////////////////////////////////////////

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
///////////////////////////////
reportWebVitals();
