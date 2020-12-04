import * as types from "./types";
import api from "../../../api";

export const getAllTest = () => dispatch =>
  api.test
    .getAllTest()
    .then(data => dispatch({ type: types.GET_TEST_LIST, data }));

export const getTestById = id => dispatch =>
  api.test
    .getTestById(id)
    .then(data => dispatch({ type: types.GET_TEST_BY_ID, data }));
