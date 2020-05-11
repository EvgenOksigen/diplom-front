import React from "react";
import { reduxForm, Form, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import RadioButton from "../../components/FormsComponent/Radio/RadioButton";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router";

const TestForm = ({ handleSubmit }) => {
  const [test, setTest] = useState();

  useEffect(() => {
    initTest();
  }, []);

  const initTest = async () => {
    const id = 1;
    await Axios.get(`http://localhost:3010/api/auth/test/${id}`).then(res =>
      setTest(res.data)
    );
  };

  const [rightAnswer, setRightAnswer] = useState([]);

  let res;

  const formSubmit = e => {
    e.preventDefault();

    handleSubmit(async values => {
      if (!values.answers) {
        window.alert("not one answers ...");
        return;
      }
      res = await Axios.post(
        "http://localhost:3010/api/auth/test-right",
        values
      ).then(res => res.data);
      setRightAnswer(res);
    })();
  };
  return (
    <div className="test-wrapp">
      {/* <div key="kek">{test.test_json.test.discipline._text} </div> */}
      {/* <div className="kek">{test.test_json.test.title._text} </div> */}
      <Form autoComplete="off" className="" onSubmit={formSubmit}>
        {test &&
          test.test_json.question.map((qw, qi) => {
            return (
              <div className="qwestion" key={qi}>
                {" "}
                <span
                  className={rightAnswer[qi] ? "right" : null}
                >{`${qw.cost}$`}</span>
                {qw.text}
                <div className="answer-list">
                  {qw.answers.map((answer, ai) => {
                    return (
                      <Field
                        name={`answer.${qi}`}
                        key={ai}
                        component={RadioButton}
                        options={[
                          { value: answer.answer, text: answer.answer }
                        ]}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        <button type="submit">Pass</button>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(
  connect(mapStateToProps, null),
  reduxForm({ form: "test" }, withRouter)
);
export default enhance(TestForm);
