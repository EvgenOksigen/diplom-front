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
import AddCourse from "../AddCourse/AddCourse";

const Home = ({ location }) => {
  return (
    <>
      <Header />
      <Content>
        <Route path="/home" exact render={() => <BaseHome />} />

        <Route
          path={`/${location.pathname.split("/")[1]}/journal`}
          exact
          render={() => <Journal />}
        />

        <Route
          path={`/${location.pathname.split("/")[1]}/test`}
          exact
          render={() => <Test />}
        />

        <Route
          path={`/${location.pathname.split("/")[1]}/create-test`}
          exact
          render={() => <CreateTest />}
        />
        
        <Route
          path={`/${location.pathname.split("/")[1]}/add-course`}
          exact
          render={() => <AddCourse />}
        />
      </Content>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ user }) => ({ profile: user.profile });

const enhance = compose(withRouter, connect(mapStateToProps));

export default enhance(Home);
