import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

//REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer"; //va lire index.js dans dossier reducer

// initialisation du store
const store = configureStore({
  reducer: rootReducer,
  devTools: true, //true only prod
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
