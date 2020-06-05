import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { PeliculasReducer } from "./redux/Peliculas/PeliculasReducer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
let AllReducers = combineReducers({ PeliculasReducer });
const store = createStore(AllReducers, applyMiddleware(thunk));
const Root = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/:media/:movieID" component={MovieDetails} />
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
