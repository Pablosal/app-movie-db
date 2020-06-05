import React, { useEffect, useState } from "react";
import {
  fetchPeliculaActual,
  EnviarRating,
  createGuestSession,
} from "../redux/Peliculas/PeliculasActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
const imagePath = "https://image.tmdb.org/t/p/w500";

const MovieDetails = () => {
  const { media, movieID } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [ranking, setRanking] = useState(0);
  const [enviado, setEnviado] = useState(false);
  useEffect(() => {
    setLoading(true);
    dispatch(fetchPeliculaActual(media, movieID));
    dispatch(createGuestSession());
    setLoading(false);
  }, [movieID]);
  const details = useSelector((state) => state.PeliculasReducer);
  const onChange = (e) => {
    setRanking(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(EnviarRating(movieID, ranking));
    setEnviado(true);
  };
  const {
    title,
    original_title,
    overview,
    release_date,
    vote_average,
    poster_path,
  } = details.peliculaActual;

  return (
    <>
      {loading ? (
        <h2>cargando....</h2>
      ) : (
        <div className="full_container">
          <div className="second_container">
            <img src={`${imagePath}${poster_path}`} alt="" />
          </div>
          <div className="first_container">
            <h2>{title}</h2>
            <h3>{original_title}</h3>
            <p>{overview}</p>
            <h3>
              Fecha de salida:
              <span> {release_date}</span>
            </h3>
            <h3>
              Votacion Promedio:
              <span> {vote_average}</span>
            </h3>
            {enviado ? (
              <div>
                <h2>Enviado Con Exito</h2>
              </div>
            ) : (
              <div className="rankear">
                Valorar
                <form onSubmit={onSubmit}>
                  <select id="cars" onChange={onChange} value={ranking}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>

                  <input type="submit" value="Enviar" />
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
