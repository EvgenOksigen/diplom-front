import React from "react";
import { reduxForm, Form, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import RadioButton from "../../components/FormsComponent/Radio/RadioButton";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router";
import Input from "../../components/FormsComponent/Input/Input";
import QuestionWithMatchingAnswers from "../../components/QuestionWithMatchingAnswers/QuestionWithMatchingAnswers";
import { getTestById } from "../../../state/ducks/test/actions";

import "./TestForm.scss";
import "../../pages/Test/PassTest/test.scss";
import SingleSelect from "../../components/FormsComponent/SingleSelect/SingleSelect";
import MultiSelect from "../../components/FormsComponent/MultiSelect/MultiSelect";
import Certain from "../../components/FormsComponent/Certain/Certain";
import Compare from "../../components/FormsComponent/Compare/Compare";

const TestForm = ({ handleSubmit, match: { params }, getTestById, test }) => {
  useEffect(() => {
    const { id } = params;
    getTestById(id);
  }, []);

  const [rightAnswer, setRightAnswer] = useState([]);

  let res;

  const formSubmit = e => {
    e.preventDefault();

    handleSubmit(async values => {
      if (!values.answer) {
        window.alert("not one answers ...");
        return;
      }
      res = await Axios.post(
        "http://localhost:3010/api/test-right",
        values
      ).then(res => res.data);
      setRightAnswer(res);
    })();
  };
  return (
    <div className="test-wrapp">
      <div>{test.name}</div>
      <div>
        {console.log(test)}
        {test && (
          <>
            <Form onSubmit={formSubmit}>
              {test.test_json &&
                test.test_json.question.map((q_item, index) => {
                  return (
                    <div key={index}>
                      <div className="question">
                        <span className={rightAnswer[index] ? "right" : null}>
                          {q_item.cost}
                        </span>
                        {q_item.text}{" "}
                        {!q_item.text &&
                          q_item.kind === "compare" &&
                          "Сопоставьте "}
                        {q_item.kind === "single" && (
                          <Field
                            name={`question-${index}`}
                            component={SingleSelect}
                            options={q_item.answers}
                          />
                        )}
                        {q_item.kind === "multi" && (
                          <Field
                            name={`question-${index}`}
                            component={MultiSelect}
                            options={q_item.answers}
                          />
                        )}
                        {q_item.kind === "certain" && (
                          <Field
                            name={`question-${index}`}
                            component={Certain}
                            options={q_item.answers}
                          />
                        )}
                        {q_item.kind === "compare" && (
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

const mapStateToProps = ({ user, test }) => ({ user, test: test.passedTest });
const mapDispatchToProps = { getTestById };
const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "test" }),
  withRouter
);
export default enhance(TestForm);
