import api from "../../../api";
import * as types from "./types";

export const getAll = () => dispatch =>
  api.journal.getAll().then(res =>
    dispatch({
      type: types.GET_ALL,
      res
    })
  );
