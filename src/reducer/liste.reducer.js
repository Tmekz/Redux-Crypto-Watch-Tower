import { SET_LIST_DISPLAY } from "../action/liste.action";

// initialiser avec un etat
const initialState = { showList: false };

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIST_DISPLAY:
      return { showList: action.payload };
    default:
      return state;
  }
}
