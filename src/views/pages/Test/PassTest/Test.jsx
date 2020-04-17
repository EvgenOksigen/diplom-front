import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import './test.scss'
import Axios from "axios";
import { useState } from "react";
import TestForm from "../../../forms/TestForm/TestForm";
import { useEffect } from "react";

const Test = ({ profile }) => {
  const [allTest, setAllTest] = useState([])
  useEffect(()=>{
    getAllTest()
  },
  [])
  const [test, setTest] = useState({})
  const get = async ()=>{
    await Axios.get("http://localhost:4444/api/users/test").then(res => setTest(res.data[0]))
  }
  const getAllTest = async () =>{
    await Axios.get("http://localhost:4444/api/users/test/all").then(res => setAllTest(res.data));
  }
  console.log(allTest);
  
  return (
    <>
      <div>User will pass the test here</div>
      {profile.p_role === "student" ? (
        <button onClick={()=>get()}>Pass</button>
      ) : (
        <>
          <button onClick={()=>get()}>Pass</button>
          <button >Create</button>
        </>
      )}
        {test.test_json && <TestForm test={test}/>}
        {allTest.length && allTest.map((el, i) =>{
          return <div key={el.id}> {`${el.passed} ${el.test_json.test.discipline._text}, ${el.test_json.test.title._text}`} </div>
        })}
    </>
  );
};

const mapStateToProps = ({ user }) => ({ profile: user.profile });

const enhance = compose(connect(mapStateToProps), withRouter);

export default enhance(Test);