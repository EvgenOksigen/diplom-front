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
      {console.log(params.match.params)}
      <div className="content-wrap">
        <Route path="/home" exact render={() => <BaseHome />} />

        {/* <Route
          path={`/${location.pathname.split("/")[1]}/${first_name}`}
          exact
          render={() => <UserPage />}
        />

        <Route
          path={`/${location.pathname.split("/")[1]}/${first_name}/journal`}
          exact
          render={() => <Journal />}
        />

        <Route
          path={`/${location.pathname.split("/")[1]}/${first_name}/test`}
          exact
          render={() => <Test />}
        />

        <Route
          path={`/${location.pathname.split("/")[1]}/${first_name}/create-test`}
          exact
          render={() => <CreateTest />}
        /> */}
      </div>
    </>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(withRouter, connect(mapStateToProps));

export default enhance(Home);
