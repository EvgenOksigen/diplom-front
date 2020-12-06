import React, { useEffect } from "react";
import { Field, FieldArray, Form, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import Input from "../../../components/FormsComponent/Input/Input";
import "./CreateTest.scss";
import TextArea from "../../../components/FormsComponent/TextArea/TextArea";
import Checkbox from "../../../components/FormsComponent/Checkbox/Checkbox";
import Tooltip from "react-tooltip-lite";
import Axios from "axios";
import Selecter from "../../../components/FormsComponent/Select/Select";

const MatchingAnswers = ({ fields }) => {
  useEffect(() => {
    if (fields.length === 1) {
      return;
    }

    if (fields.length === 0) {
      fields.push({});
    } else {
      fields.splice(0, fields.length - 1);
    }
  }, []);

  return fields.map((item, index) => (
    <div key={item} className="question-list">
      <div className="match-line">
        <div className="question">
          <Field
            name={`${item}.1.text`}
            component={TextArea}
            label="Bопрос"
            placeholder="Введте вопрос"
          />
        </div>
        <div className="answer">
          <Field
            name={`${item}.1.answer`}
            component={TextArea}
            label="Ответ"
            placeholder="Oтвет"
          />
        </div>
      </div>
      <div className="match-line">
        <div className="question">
          <Field
            name={`${item}.2.text`}
            component={TextArea}
            label="Bопрос"
            placeholder="Введте вопрос"
          />
        </div>
        <div className="answer">
          <Field
            name={`${item}.2.answer`}
            component={TextArea}
            label="Ответ"
            placeholder="Oтвет"
          />
        </div>
      </div>
      <div className="match-line">
        <div className="question">
          <Field
            name={`${item}.3.text`}
            component={TextArea}
            label="Bопрос"
            placeholder="Введте вопрос"
          />
        </div>
        <div className="answer">
          <Field
            name={`${item}.3.answer`}
            component={TextArea}
            label="Ответ"
            placeholder="Oтвет"
          />
        </div>
      </div>
      <div className="match-line">
        <div className="question">
          <Field
            name={`${item}.4.text`}
            component={TextArea}
            label="Bопрос"
            placeholder="Введте вопрос"
          />
        </div>
        <div className="answer">
          <Field
            name={`${item}.4.answer`}
            component={TextArea}
            label="Ответ"
            placeholder="Oтвет"
          />
        </div>
      </div>
    </div>
  ));
};
const AnswerWithInput = ({ fields }) => {
  useEffect(() => {
    if (fields.length === 1) {
      return;
    }

    if (fields.length === 0) {
      fields.push({});
    } else {
      fields.splice(0, fields.length - 1);
    }
  }, []);

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

const AdditionalAnswers = ({ fields }) => {
  useEffect(() => {
    if (fields.length === 0) {
      fields.push({});
    }
  });
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

const AdditionalQuestion = ({ fields, formValues }) => {
  useEffect(() => {
    if (fields.length === 0) {
      fields.push({});
    }
  }, []);

  return (
    <>
      {fields.map((item, index) => (
        <div key={index} className="question-container">
          <div className="question-header">
            <div className="kind">
              <div>
                <Field
                  key={index}
                  name={`${item}.kind`}
                  component={Selecter}
                  label="Тип"
                  options={[
                    {
                      text: "С один и более правильными ответами",
                      value: "oneMoreAnswers"
                    },
                    {
                      text: "С пользовательским полем ввода",
                      value: "withInput"
                    },
                    {
                      text: "Сопоставление ответов",
                      value: "matchingAnswers"
                    }
                    //TODO: Create question with image
                    // {
                    //   text: "Teacher",
                    //   value: "teacher"
                    // }
                  ]}
                  defaultValue={"oneMoreAnswers"}
                />
              </div>

              <div className="question-cost">
                <Field
                  key={index}
                  name={`${item}.cost`}
                  component={Input}
                  label="Цена"
                  placeholder="?"
                  maxLength="2"
                />
                $
              </div>
            </div>

            {formValues.question[index].kind !== "matchingAnswers" && (
              <div className="question">
                <Field
                  key={index}
                  name={`${item}.text`}
                  component={TextArea}
                  label="Bопрос"
                  placeholder="Введте вопрос"
                />
              </div>
            )}
          </div>

          <div
            key={index}
            className={
              formValues.question[index].kind === "withInput"
                ? "answer-input"
                : formValues.question[index].kind === "oneMoreAnswers"
                ? "answer-list"
                : "answer-match"
            }
          >
            {formValues.question[index].kind === "oneMoreAnswers" && (
              <FieldArray
                className="createTest-container"
                name={`${item}.answers`}
                component={AdditionalAnswers}
                formValues={formValues}
              />
            )}
            {formValues.question[index].kind === "withInput" && (
              <FieldArray
                className="createTest-container"
                name={`${item}.answers`}
                component={AnswerWithInput}
                formValues={formValues}
              />
            )}
            {formValues.question[index].kind === "matchingAnswers" && (
              <FieldArray
                className="createTest-container"
                name={`${item}.answers`}
                component={MatchingAnswers}
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
      ))}
      <button className="add-btn" type="button" onClick={() => fields.push({})}>
        <i className="fas fa-plus"></i> Bопрос
      </button>
    </>
  );
};

let CreateTest = ({ handleSubmit, formValues }) => {
  const formSubmit = e => {
    e.preventDefault();
    handleSubmit(values => {
      console.log(values.question);

      Axios.post("http://localhost:3010/api/test/create", {
        test: values
      });
    })();
  };

  return (
    <Form className="createTest" onSubmit={formSubmit}>
      <h1>Создание теста : </h1>

      <FieldArray
        name="question"
        component={AdditionalQuestion}
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
