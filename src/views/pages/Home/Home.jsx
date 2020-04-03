import React from "react";
import { withRouter, Route } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import BaseHome from "../BaseHome/BaseHome";
import Header from "../../layout/Header/Header";
import Journal from "../Journal/Journal";
import Test from "../Test/PassTest/Test";
import CreateTest from "../Test/CreateTest/CreateTest";
import Footer from "../../layout/Footer/Footer";
import Content from "../../layout/Content/Content";
import AddUser from "../AddUser/AddUser";

const Home = ({ profile, location, match }) => {
  const { p_role } = profile;
  return (
    <>
      <Header />
      <Content>
        <Route path="/home" exact render={() => <BaseHome />} />

        {/* {p_role && (
          <Route
            path={`/${location.pathname.split("/")[1]}/${p_role}`}
            exact
            render={() => <UserHome />}
          />
        )} */}
        <Route
          path={`/${location.pathname.split("/")[1]}/${p_role}/journal`}
          exact
          render={() => <Journal />}
        />

        <Route
          path={`/${location.pathname.split("/")[1]}/${p_role}/test`}
          exact
          render={() => <Test />}
        />

        <Route
          path={`/${location.pathname.split("/")[1]}/${p_role}/create-test`}
          exact
          render={() => <CreateTest />}
        />
        {/* 
        <Route
          path={`/${location.pathname.split("/")[1]}/${p_role}/add-user`}
          exact
          render={() => <AddUser />}
        /> */}
      </Content>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ user }) => ({ profile: user.profile });

const enhance = compose(withRouter, connect(mapStateToProps));

export default enhance(Home);
