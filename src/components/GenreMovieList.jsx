import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";

import { Waypoint } from "react-waypoint";
import {
  fetchPeliculas,
  fetchMasPeliculas,
} from "../redux/Peliculas/PeliculasActions";
import { CircularProgress } from "@material-ui/core";

const GenreMovieList = () => {
  const [loading, setLoading] = useState(true);
  const imagePath = "https://image.tmdb.org/t/p/w500/";
  let [counter, setCounter] = useState(2);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeliculas());
    setLoading(false);
  }, []);
  const StateData = useSelector((state) => state.PeliculasReducer);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {StateData.peliculas.map((pelicula, i) => (
            <div key={pelicula.id}>
              <MovieCard
                id={pelicula.id}
                imageMovie={`${imagePath}/${pelicula.poster_path}`}
                descriptionMovie={pelicula.overview}
                titleMovie={pelicula.name}
                movieTitle={pelicula.original_title}
                mediaType={pelicula.media_type}
                votes={pelicula.vote_count}
              />

              {i === StateData.peliculas.length - 3 && (
                <Waypoint
                  onEnter={() => {
                    setCounter(counter + 1);
                    dispatch(fetchMasPeliculas(counter));
                  }}
                ></Waypoint>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default GenreMovieList;
