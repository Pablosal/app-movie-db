import { ActionTypes } from "../Types";
import {
  REACT_APP_API_URL,
  REACT_APP_API_AUTH,
  REACT_APP_API_KEY,
} from "../../envioVariables";
import Axios from "axios";

const initialState = {
  generos: [],
  peliculas: [],
  sesion: "",
  peliculaActual: {},
};

export const PeliculasReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.OBTENER_GENEROS:
      return {
        ...state,
        generos: action.payload.genres,
      };

    case ActionTypes.OBTENER_PELICULAS:
      return {
        ...state,
        peliculas: [...state.peliculas, ...action.payload],
      };
    case ActionTypes.OBTENER_SESION:
      return {
        ...state,
        sesion: action.payload.data,
      };
    case ActionTypes.OBTENER_DETALLES:
      return {
        ...state,
        peliculaActual: action.payload,
      };
    case ActionTypes.ENVIAR_RATING:
      Axios.post(
        `${REACT_APP_API_URL}/movie/${action.payload.movieId}/rating?api_key=${REACT_APP_API_KEY}&guest_session_id=${state.sesion.guest_session_id}`,

        {
          value: action.payload.ranking,
        },
        {
          headers: {
            Authorization: `${REACT_APP_API_AUTH}`,
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": true,
          },
        }
      )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      return state;

    default:
      return state;
  }
};
