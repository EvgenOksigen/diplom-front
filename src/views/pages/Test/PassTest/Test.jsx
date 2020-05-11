import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./test.scss";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Test = ({ profile, history, location }) => {
  const [allTest, setAllTest] = useState([]);
  useEffect(() => {
    getAllTest();
  }, []);

  console.log(location.pathname.split("/")[1]);

  const getAllTest = async () => {
    await Axios.get("http://localhost:3010/api/auth/allTest").then(res =>
      setAllTest(res.data)
    );
  };
  const getTestById = async id => {
    history.push(`/${location.pathname.split("/")[1]}/test/${id}?`);
  };

  return (
    <>
      <div>User will pass the test here</div>
      {allTest.length &&
        allTest.map(el => (
          <div key={el.id} onClick={() => getTestById(el.id)}>
            {`${el.id} : ${el.passed}`}{" "}
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

const mapStateToProps = ({ user }) => ({ profile: user.profile });

const enhance = compose(connect(mapStateToProps), withRouter);

export default enhance(Test);
