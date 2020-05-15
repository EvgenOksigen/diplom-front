import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./test.scss";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { getAllTest } from "../../../../state/ducks/test/actions";

const Test = ({ profile, history, location, getAllTest, allTest }) => {
  useEffect(() => {
    getAllTest();
  }, []);

  const getTestById = async id => {
    history.push(`/${location.pathname.split("/")[1]}/test/${id}?`);
  };

  return (
    <>
      <div>User will pass the test here</div>
      {allTest.length &&
        allTest.map(el => (
          <div key={el.id}>
            {`Test #${el.id} : ${el.passed}`}{" "}
            <button
              className="btn-1 btn-pass"
              onClick={() => getTestById(el.id)}
            >
              Pass
            </button>
          </div>
        ))}
    </>
  );
};

const mapStateToProps = ({ user, test }) => ({
  profile: user.profile,
  allTest: test.allTests
});

const mapDispatchToProps = { getAllTest };
const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
);

export default enhance(Test);
