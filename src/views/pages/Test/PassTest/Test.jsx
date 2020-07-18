import React, { useEffect }  from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "./test.scss";

import { getAllTest } from "../../../../state/ducks/test/actions";
import Axios from "axios";
import { useState } from "react";

const Test = ({ history, location, getAllTest, allTest }) => {
  const [test, setTest] = useState({});
  const [rightAnswer, setRightAnswer] = useState([]);

  useEffect(  () => {
    // getAllTest();
    (async () => {
      await Axios.get('https://assistant.khai.edu/api/assistant/exam').then(res => {
      setTest(res.data);
    })})()
  }, []);


  const getTestById = async id => {
    history.push(`/${location.pathname.split("/")[1]}/test/${id}?`);
  };

  return (
    <div className="test-wrapp">

      <div>User will pass the test here</div>

      <div>
          {console.log(test)}
        {
          test && (<>
          <div>{test.name}</div>
          {/* <div>{test.test.items}</div> */}
          {test.test && test.test.items.map((q_item, index)=>{
            console.log(q_item);
            return (
              <div key={index}>
              {q_item.type !== 'compare'  && <div className="qwestion" >
              <span
                    className={rightAnswer[index] ? "right" : null}
                  >{`${q_item.cost}$`}</span>
                  {q_item.question}
                </div>}
              </div>
              )
          })
        }
          </>)
        }
      </div>
      {/* {allTest.length &&
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
        ))} */}
  </div>
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
