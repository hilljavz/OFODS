import axios from "axios";
import store from "./store";
axios.defaults.baseURL = "https://api.ravegraphics.co.zw/public/api";

export default () => {
  return axios.create({
    // baseURL: store.state.baseUrl,
    timeout: 10000000,
    headers: {
      Authorization: `Bearer ${store.state.token}`,
    },
  });
};
