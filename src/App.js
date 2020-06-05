import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import GenreMovieList from "./components/GenreMovieList";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGeneros,
  createGuestSession,
} from "../src/redux/Peliculas/PeliculasActions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGeneros());
    dispatch(createGuestSession());
  }, []);
  const PeliculasDataDeRedux = useSelector((state) => state.PeliculasReducer);

  return (
    <div className="App" style={{ backgroundColor: "#FBDA44" }}>
      <header className="App-header">
        <GenreMovieList />
      </header>
    </div>
  );
}

export default App;
