import * as types from "./types";
import api from "../../../api"; // like api
import moment from "moment";

export const userSignIn = ({ token }) => {
  if (token) {
    localStorage.setItem("token", token);

    return {
      type: types.SIGN_IN,
      token
    };
  }
};

export const setMe = user => {
  user.birth_date = moment(user.birth_date).format("DD-MM-YYYY");

  return {
    type: types.SET_ME,
    ...user
  };
};

export const signIn = credentials => dispatch =>
  // dispatch(userSignIn({ token: "anytoken" }));
  api.users
    .signin(credentials)
    .then(d => (d ? dispatch(userSignIn(d.data)) : d));

export const me = () => dispatch =>
  // dispatch(setMe({ user: { profile: { p_role: "admin" }, name: "random" } }));
  api.users.me().then(data => dispatch(setMe(data)));

export const signOut = () => {
  localStorage.removeItem("token");

  return {
    type: types.SIGN_OUT
  };
};
