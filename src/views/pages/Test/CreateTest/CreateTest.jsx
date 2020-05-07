import React from "react";
import { Field, FieldArray, Form, reduxForm, FormSection } from "redux-form";
import { connect } from "react-redux";
import Input from "../../../components/FormsComponent/Input/Input";
import "./CreateTest.scss";
import TextArea from "../../../components/FormsComponent/TextArea/TextArea";
import Checkbox from "../../../components/FormsComponent/Checkbox/Checkbox";
import Tooltip from "react-tooltip-lite";

let CreateTest = ({ handleSubmit }) => {
  const additionalAnswers = ({ fields, itemIndex }) => {
    return (
      <>
        {fields.map((item, index) => (
          <div key={index} className="answer">
            <Field
              key={index}
              name={`${item}.answer`}
              component={Input}
              label="Введите вариант ответа"
              placeholder="Oтвет"
            />

            <Field
              key={`r${index}`}
              name={`${item}.right`}
              component={Checkbox}
            />
            <Tooltip className="del-btn-container" content="Удалить ответ">
              <i
                className="fas fa-minus-circle del-btn"
                onClick={() => fields.splice(index, 1)}
              ></i>
            </Tooltip>
          </div>
        ))}
        <button
          className="add-btn"
          type="button"
          onClick={() => fields.push({})}
        >
          <i className="fas fa-plus"></i> Oтвет
        </button>
      </>
    );
  };

  const additionalQuestion = ({ fields }) => (
    <>
      {fields.map((item, index) => (
        <div key={index} className="question-container">
          <div className="question-header">
            <div className="question">
              <Field
                key={index}
                name={`${item}.text`}
                component={TextArea}
                label="Bопрос"
                placeholder="Введте вопрос"
              />
            </div>

            <div className="question-cost">
              <Field
                key={index}
                name={`${item}.cost`}
                component={Input}
                label="Цена вопроса"
                placeholder="?"
              />
              $
            </div>
          </div>

          <div key={index} className="answer-list">
            <FieldArray
              className="createTest-container"
              name={`${item}.answers`}
              component={additionalAnswers}
              itemIndex={index}
            />
          </div>

          <button type="button" onClick={() => fields.splice(index, 1)}>
            <i className="fas fa-minus-circle"></i> Bопрос
          </button>
        </div>
      ))}
      <button type="button" onClick={() => fields.push({})}>
        <i className="fas fa-plus"></i> Bопрос
      </button>
    </>
  );

  const formSubmit = e => {
    e.preventDefault();
    handleSubmit(values => {
      console.log(values);
    })();
  };

  return (
    <Form className="createTest" onSubmit={formSubmit}>
      <h1>Создание теста : </h1>

      <FieldArray name="question" component={additionalQuestion} />

      <div>
        <button type="submit">Save</button>
      </div>
    </Form>
  );
};

CreateTest = reduxForm({
  form: "createTest"
})(CreateTest);

export default connect(null, null)(CreateTest);
