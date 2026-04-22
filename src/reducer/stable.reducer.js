import { SET_STABLE_STATE } from "../action/stable.action";

// initialiser avec un etat
const initialState = { showStable: false };

export default function stableReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STABLE_STATE:
      return { showStable: action.payload };
    default:
      return state;
  }
}
