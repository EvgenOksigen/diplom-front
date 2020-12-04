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
      <Form autoComplete="off" className="" onSubmit={formSubmit}>
        {test.test_json &&
          test.test_json.question.map((qw, qi) => {
            if (qw.kind !== "matchingAnswers") {
              return (
                <div className="qwestion" key={qi}>
                  <span
                    className={rightAnswer[qi] ? "right" : null}
                  >{`${qw.cost}$`}</span>
                  {qw.text}
                  <div className={`answer-list answer-list-${qw.kind}`}>
                    {qw.answers.map((answer, ai) => {
                      return (
                        <Field
                          name={`answer.${qi}`}
                          key={ai}
                          component={
                            qw.kind !== "withInput" ? RadioButton : Input
                          }
                          options={[
                            { value: answer.answer, text: answer.answer }
                          ]}
                          placeholder={
                            qw.kind === "withInput" && "Ввести ответ тут"
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <QuestionWithMatchingAnswers
                  key={qi}
                  question={qw}
                  qi={qi}
                  rightAnswer={rightAnswer}
                />
              );
            }
          })}
        <button type="submit">Pass</button>
      </Form>
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
