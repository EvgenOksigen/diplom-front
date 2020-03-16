import React from "react";
import { withRouter, Route } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import BaseHome from "../BaseHome/BaseHome";

const Home = ({ user }) => (
  <>
    <div>ku ku home {console.log("user")}</div>;
    <div className="content-wrap">
      <Route path="/home" exact render={() => <BaseHome />} />
    </div>
  </>
);

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(withRouter, connect(mapStateToProps));

export default enhance(Home);
