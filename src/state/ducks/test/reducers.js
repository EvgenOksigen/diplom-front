import * as types from "./types";
import createReducer from "../../../utils/createReducer";

const initialState = {
  allTests: [],
  passedTest: {}
};

const test = createReducer(initialState)({
  [types.GET_TEST_LIST]: (state, { data }) => ({
    ...state,
    allTests: [...data]
  }),

  [types.GET_TEST_BY_ID]: (state, { data }) => ({
    ...state,
    passedTest: data
  })
});

export default test;
