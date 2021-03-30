import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import errorResponseHandler from "./errorResponseHandler";
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});
instance.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);
export default instance;
