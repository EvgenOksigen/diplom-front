import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "../views/pages/Auth/Auth";
import DefaultRoute from "./default";
import GuestRoute from "./hoc/GuestRoute";

import { me } from "../state/ducks/user/actions";
import PrivateRoute from "./hoc/PrivateRoute";
import Home from "../views/pages/Home/Home";
import MainContainer from "../views/layout/MainContainer/MainContainer";

const App = ({ me, user, profile }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMe().then(() => setLoading(false));
  }, []);

  const getMe = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      await me()
        .then(() => console.log("Get user -> 'succes'"))
        .catch(() => localStorage.removeItem("token"));
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user && user.isLogged && !profile) {
      getMe().then(() => {
        setLoading(false);
      });
    }
  }, [user]);

  return (
    <MainContainer>
      {!loading && (
        <Switch>
          <Route path="/" exact component={DefaultRoute} />

          <GuestRoute path="/login" exact component={Auth} />

          <PrivateRoute path="/home/:user?/:action?" exact component={Home} />
        </Switch>
      )}
    </MainContainer>
  );
};

const mapStateToProps = ({ user }) => ({ user, profile: user && user.profile });

const mapDispatchToProps = { me };

export default connect(mapStateToProps, mapDispatchToProps)(App);
