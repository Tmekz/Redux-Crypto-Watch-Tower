import { combineReducers } from "redux";
import stableReducer from "./stable.reducer";
import listReducer from "./liste.reducer";

// Ajout de tous les réducers
export default combineReducers({
  //fichiers reducers à ajouter
  stableReducer,
  listReducer,
});
