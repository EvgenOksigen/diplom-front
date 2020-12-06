import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "./test.scss";

import { getAllTest } from "../../../../state/ducks/test/actions";
import Axios from "axios";
import { useState } from "react";
import SingleSelect from "../../../components/FormsComponent/SingleSelect/SingleSelect";
import { Form, reduxForm, Field, getFormValues } from "redux-form";
import MultiSelect from "../../../components/FormsComponent/MultiSelect/MultiSelect";
import Certain from "../../../components/FormsComponent/Certain/Certain";
import Compare from "../../../components/FormsComponent/Compare/Compare";

const Test = ({ history, location, formValues, getAllTest, allTest }) => {
  const [test, setTest] = useState({});
  const [rightAnswer, setRightAnswer] = useState([]);

  useEffect(() => {
    // getAllTest();
    (async () => {
      await Axios.get("https://assistant.khai.edu/api/assistant/exam").then(
        res => {
          setTest(res.data);
        }
      );
    })();
  }, []);

  const getTestById = async id => {
    history.push(`/${location.pathname.split("/")[1]}/test/${id}?`);
  };

  const formSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="test-wrapp">
      <div>{test.name}</div>
      <div>
        {console.log(test)}
        {test && (
          <>
            {/* <div>{test.name}</div> */}
            <Form onSubmit={formSubmit}>
              {test.test &&
                test.test.items.map((q_item, index) => {
                  return (
                    <div key={index}>
                      <div className="question">
                        <span className={rightAnswer[index] ? "right" : null}>
                          {q_item.cost}
                        </span>
                        {q_item.question}
                        {q_item.type === "single" && (
                          <Field
                            name={`question-${index}`}
                            component={SingleSelect}
                            options={q_item.answers}
                          />
                        )}
                        {q_item.type === "multi" && (
                          <Field
                            name={`question-${index}`}
                            component={MultiSelect}
                            options={q_item.answers}
                          />
                        )}
                        {q_item.type === "certain" && (
                          <Field
                            name={`question-${index}`}
                            component={Certain}
                            options={q_item.answers}
                          />
                        )}
                        {q_item.type === "compare" && (
                          <Field
                            name={`question-${index}`}
                            component={Compare}
                            options={q_item.answers}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user, test }) => ({
  profile: user.profile,
  allTest: test.allTests,
  formValues: getFormValues("test")
});

const mapDispatchToProps = { getAllTest };
const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "test" }),
  withRouter
);

export default enhance(Test);
