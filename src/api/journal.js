import axios from "axios";
import { setHeader } from "./index";

export const USER_HOST = "http://localhost:3010";

export const USER_API = `${USER_HOST}/api`;

export default {
  getAll: () => {
    let config = {
      method: "GET",
      baseURL: `${USER_API}/users/getAll`,
      headers: setHeader()
    };
    return axios(config).then(res => res && res.data);
  }
};
