import React, { Fragment } from "react";
import { Field, FieldArray, Form, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import Input from "../../../components/FormsComponent/Input/Input";
import "./CreateTest.scss";
import TextArea from "../../../components/FormsComponent/TextArea/TextArea";
import Checkbox from "../../../components/FormsComponent/Checkbox/Checkbox";
import Tooltip from "react-tooltip-lite";
import Axios from "axios";
import Selecter from "../../../components/FormsComponent/Select/Select";

const answerWithInput = ({ fields }) => {
  if (fields.length === 0) {
    fields.push({});
  }
  console.log("wI");

  return fields.map((item, index) => (
    <div key={index} className="answer">
      <Field
        key={index}
        name={`${item}.answer`}
        component={Input}
        label="Введите ответ"
        placeholder="Oтвет"
      />
    </div>
  ));
};

const additionalAnswers = ({ fields }) => {
  if (fields.length === 0) {
    fields.push({});
  }
  console.log("AaA");

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
          {fields.length !== 1 && (
            <Tooltip className="del-btn-container" content="Удалить ответ">
              <i
                className="fas fa-minus-circle del-btn"
                onClick={() => fields.splice(index, 1)}
              ></i>
            </Tooltip>
          )}
        </div>
      ))}
      <button className="add-btn" type="button" onClick={() => fields.push({})}>
        <i className="fas fa-plus"></i> Oтвет
      </button>
    </>
  );
};

const additionalQuestion = ({ fields, formValues }) => {
  if (fields.length === 0) {
    fields.push({});
  }
  return fields.map((item, index) => (
    <Fragment key={index}>
      <div key={index} className="question-container">
        <div className="question-header">
          <Field
            key={index}
            name={`${item}.kind`}
            component={Selecter}
            label="Какой вопрос"
            options={[
              {
                text: "С один и более правильными ответами",
                value: "oneMoreAnswers"
              },
              {
                text: "С пользовательским полем ввода",
                value: "withInput"
              }
              //TODO: Create question with image
              // {
              //   text: "Teacher",
              //   value: "teacher"
              // }
            ]}
            defaultValue={"withInput"}
          />

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
          {formValues.question[index].kind === "oneMoreAnswers" ? (
            <FieldArray
              className="createTest-container"
              name={`${item}.answers`}
              component={additionalAnswers}
              formValues={formValues}
            />
          ) : (
            <FieldArray
              className="createTest-container"
              name={`${item}.answers`}
              component={answerWithInput}
              formValues={formValues}
            />
          )}
        </div>

        {fields.length !== 1 && (
          <button type="button" onClick={() => fields.splice(index, 1)}>
            <i className="fas fa-minus-circle"></i> Bопрос
          </button>
        )}
      </div>
      <button type="button" onClick={() => fields.push({})}>
        <i className="fas fa-plus"></i> Bопрос
      </button>
    </Fragment>
  ));
};

let CreateTest = ({ handleSubmit, formValues }) => {
  const formSubmit = e => {
    e.preventDefault();
    handleSubmit(values => {
      console.log(values);
      Axios.post("http://localhost:3010/api/auth/create-test", {
        test: values
      });
    })();
  };

  return (
    <Form className="createTest" onSubmit={formSubmit}>
      <h1>Создание теста : </h1>

      <FieldArray
        name="question"
        component={additionalQuestion}
        formValues={formValues}
      />

      <div>
        <button type="submit">Save</button>
      </div>
    </Form>
  );
};

CreateTest = reduxForm({
  form: "createTest"
})(CreateTest);

const mapStateToProps = state => ({
  formValues: getFormValues("createTest")(state)
});

export default connect(mapStateToProps)(CreateTest);
