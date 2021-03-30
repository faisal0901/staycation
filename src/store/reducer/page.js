import { FETCH_PAGE, LOADING_PAGE } from "../types";
const initialState = {
  loading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case LOADING_PAGE:
      return { ...state, loading: true };
    default:
      return state;
  }
}
