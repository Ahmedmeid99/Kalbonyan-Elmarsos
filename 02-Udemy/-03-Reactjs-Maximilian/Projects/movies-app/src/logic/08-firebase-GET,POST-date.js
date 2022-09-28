import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./style/using-api.css";
import reportWebVitals from "./reportWebVitals";
//////////////////////////////////////////
//////////////////////////////////////////
function App() {
  const [movies, setMovices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    fetchMoviesHandler();
  }, []);
  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-f4f9d-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Sometoin went wrong!");
      }

      const data = await response.json();
      let transformMovices = [];
      for (const key in data) {
        transformMovices.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }

      setMovices(transformMovices);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const onAddMovie = async (movie) => {
    const response = await fetch(
      "https://react-http-f4f9d-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.json();
    console.log(data);
  };
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={onAddMovie} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found No Movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>loading...</p>}
      </section>
    </React.Fragment>
  );
}
function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={"control"}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={"control"}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={"control"}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
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
