import { FETCH_PAGE, LOADING_PAGE } from "../types";
import axios from "config/axios";
export const fetchPage = (url, page) => (dispatch) => {
  dispatch(loadingPage());
  return axios.get(url).then((response) => {
    return dispatch({
      type: FETCH_PAGE,
      payload: {
        [page]: response.data,
      },
    });
  });
};
export const loadingPage = () => {
  return {
    type: LOADING_PAGE,
  };
};
