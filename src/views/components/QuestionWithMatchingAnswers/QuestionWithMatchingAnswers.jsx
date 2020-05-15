import React from "react";
import { randomize } from "../../../helpers";
import { Field } from "redux-form";
import Input from "../FormsComponent/Input/Input";

const QuestionWithMatchingAnswers = ({ question, qi, rightAnswer }) => {
  //
  console.log(question);

  //   for (let [key, value] of Object.entries(question.answers[0])) {
  //     z.push(value);
  //   }

  let q = [],
    a = [];
  for (let i = 1; i < 5; i++) {
    q.push(question.answers[0][i].text);
    a.push(question.answers[0][i].answer);
  }
  randomize(a);
  console.log(a);

  return (
    <div className="qwestion-match" key={qi}>
      <span className={rightAnswer[qi] ? "right" : null}>
        {`${question.cost}$`}
      </span>
      <div className="var-container">
        <div className="var-list">
          {q.map((q, i) => (
            <div key={i} className="var-item">
              {console.log(q)}
              <Field name={`question-${i}`} component={Input} disabled={true} />
            </div>
          ))}
        </div>
        <div className="var-list">
          {a.map((a, i) => (
            <div key={i} className="var">
              <button type="button">up</button>
              <div className="var-item">{a}</div>
              <button type="button">dwn</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionWithMatchingAnswers;
