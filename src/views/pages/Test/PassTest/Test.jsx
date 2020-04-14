import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import './test.scss'
import Axios from "axios";
import { useState } from "react";
import TestForm from "../../../forms/TestForm/TestForm";

const Test = ({ profile }) => {

  const [test, setTest] = useState({})
  const get = async ()=>{
    await Axios.get("http://localhost:4444/api/users/test").then(res => setTest(res.data[0]))
    console.log(test);
  }
  
  return (
    <>
      <div>User will pass the test here</div>
      {profile.p_role === "student" ? (
        <button>Pass</button>
      ) : (
        <>
          <button onClick={()=>get()}>Pass</button>
          <button >Create</button>
        </>
      )}
        {test.test_json && <TestForm test={test}/>}
    </>
  );
};

const mapStateToProps = ({ user }) => ({ profile: user.profile });

const enhance = compose(connect(mapStateToProps), withRouter);

export default enhance(Test);