import { ActionTypes } from "../Types";
import Axios from "axios";
import {
  REACT_APP_API_URL,
  REACT_APP_API_KEY,
  REACT_APP_API_AUTH,
} from "../../envioVariables";
export const obtenerGeneros = (payload) => ({
  type: ActionTypes.OBTENER_GENEROS,
  payload,
});
export const obtenerPeliculas = (payload) => ({
  type: ActionTypes.OBTENER_PELICULAS,
  payload,
});
export const obtenerSesion = (payload) => ({
  type: ActionTypes.OBTENER_SESION,
  payload,
});
export const obtenerDetallesDePeliculaActual = (payload) => ({
  type: ActionTypes.OBTENER_DETALLES,
  payload,
});
export const fetchMasPeliculas = (pageNumber) => {
  return (dispatch) => {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/popular?api_key=0e85f1232b145bb3beb1ef92abea86cd&language=en-US&page=${pageNumber}`,
      {
        headers: {
          Authentication:
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTg1ZjEyMzJiMTQ1YmIzYmViMWVmOTJhYmVhODZjZCIsInN1YiI6IjVlZDU1NWRkYzRmNTUyMDAxZGJkYmI5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XK0Ztq75-8HB0l5w5S9ba1_Ie2nmW6pWdErEeD9VXu4",
          "Access-Control-Allow-Origin": true,
        },
      }
    )
      .then((res) => {
        dispatch(obtenerPeliculas(res.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchPeliculas = (payload) => {
  return (dispatch) => {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/trending/all/day?api_key=0e85f1232b145bb3beb1ef92abea86cd`,
      {
        headers: {
          Authentication:
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTg1ZjEyMzJiMTQ1YmIzYmViMWVmOTJhYmVhODZjZCIsInN1YiI6IjVlZDU1NWRkYzRmNTUyMDAxZGJkYmI5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XK0Ztq75-8HB0l5w5S9ba1_Ie2nmW6pWdErEeD9VXu4",
          "Access-Control-Allow-Origin": true,
        },
      }
    )
      .then((res) => {
        dispatch(obtenerPeliculas(res.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchGeneros = (payload) => {
  return (dispatch) => {
    Axios.get(
      `${REACT_APP_API_URL}/genre/tv/list?api_key=${REACT_APP_API_KEY}`,
      {
        headers: {
          Authorization: `${REACT_APP_API_AUTH}`,
          "Access-Control-Allow-Origin": true,
        },
      }
    ).then((res) => {
      dispatch(obtenerGeneros(res.data));
    });
  };
};

export const EnviarRating = (movieId, ranking) => ({
  type: ActionTypes.ENVIAR_RATING,
  payload: { movieId, ranking },
});

export const fetchPeliculaActual = (media, movieId) => {
  return (dispatch) => {
    Axios.get(
      `${REACT_APP_API_URL}/${media}/${movieId}?api_key=${REACT_APP_API_KEY}`,
      {
        headers: {
          Authorization: `${REACT_APP_API_AUTH}`,
          "Access-Control-Allow-Origin": true,
        },
      }
    )
      .then((res) => dispatch(obtenerDetallesDePeliculaActual(res.data)))
      .catch((err) => console.log(err));
  };
};
export const createGuestSession = () => {
  return (dispatch) => {
    Axios.get(
      `${REACT_APP_API_URL}/authentication/guest_session/new?api_key=${REACT_APP_API_KEY}`,
      {
        headers: {
          Authorization: `${REACT_APP_API_AUTH}`,
          "Access-Control-Allow-Origin": true,
        },
      }
    )
      .then((res) => dispatch(obtenerSesion(res)))
      .catch((err) => console.log(err));
  };
};
