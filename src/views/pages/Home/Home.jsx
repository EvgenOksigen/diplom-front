import React from "react";
import { withRouter, Route } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import BaseHome from "../BaseHome/BaseHome";
import Admin from "../Admin/Admin";

const Home = ({ user, location, ...params }) => {
  const { first_name } = user.user;
  return (
    <>
      {/* {console.log(params.match)} */}
      <div className="content-wrap">
        <Route path="/home" exact render={() => <BaseHome />} />

        <Route
          path={`/${location.pathname.split("/")[1]}/${first_name}`}
          exact
          render={() => <Admin />}
        />

        <Route
          path={`/${location.pathname.split("/")[1]}/${first_name}/journal`}
          exact
          render={() => <Admin />}
        />

        <Route
          path={`/${location.pathname.split("/")[1]}/${first_name}/test`}
          exact
          render={() => <Admin />}
        />
      </div>
    </>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(withRouter, connect(mapStateToProps));

export default enhance(Home);
