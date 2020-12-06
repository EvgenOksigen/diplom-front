import axios from "axios";

import contacts from "./contacts";
import users from "./users";
import test from "./test";
import journal from "./journal";

import store from "../state/store";

export const CanselToken = axios.CancelToken;

export const USER_HOST = "http://localhost:3010";

export const setHeader = () => {
  const state = store.getState();
  const token =
    (state.user && state.user.token) || localStorage.getItem("token");

  return {
    Accept: "application/json",
    Authorization: token
  };
};

export default {
  contacts,
  users,
  test,
  journal
};
