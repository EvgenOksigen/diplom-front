import Axios from "axios";
import { setHeader } from "./index";

export default {
  getAllTest: () => {
    let config = {
      method: "GET",
      baseURL: "http://localhost:3010/api/test/all",
      headers: setHeader()
    };
    return Axios(config).then(res => res && res.data);
  },
  getTestById: id => {
    let config = {
      method: "GET",
      baseURL: `http://localhost:3010/api/test/${id}`,
      headers: setHeader()
    };
    return Axios(config).then(res => res && res.data);
  }
};
