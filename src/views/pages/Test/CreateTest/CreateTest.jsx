import React from "react";
import { Field, FieldArray, Form, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Input from "../../../components/FormsComponent/Input/Input";
import './CreateTest.scss'
import TextArea from "../../../components/FormsComponent/TextArea/TextArea";

let CreateTest = () => {
  const additionalAnswers = ({fields, itemIndex}) => (
    <>
    {console.log(itemIndex)}
    {fields.map((item, index) => (
      <div className="answer"
      key={index}>

        <Field
          key={index}
          name={`answer.${index+1}_ToQuestion_$`}
          component={Input}
          label="Введите вариант ответа"
          placeholder="Oтвет"
        />
        <button className='del-btn' onClick={() => fields.splice(index, 1)}>
        <i className="fas fa-minus-circle"></i>
            </button>
      </div>
    ))}
    <button className='add-btn'  onClick={() => fields.push({})}>
    <i className="fas fa-plus"></i>
        </button>
    </>
  )
  const additionalQuestion = ({ fields }) => (
    <>

    {fields.map((item, index) => (
        <div
        key={index}
        className='question-container'>

          <div className='question-header'>

            <div className="question">
              <Field
                key={index}
                name={`question.${index+1}`}
                component={TextArea}
                label="Bопрос"
                placeholder="Введте вопрос"
                />
            </div>

            <div className='question-cost'>
              <Field 
                key={index}
                name={`cost.question.${index+1}`}
                component={Input}
                label="Цена вопроса"
                placeholder="?"
                />$
            </div>
          </div>

          <div key={index} className='answer-list'>
              <FieldArray 
                  className='createTest-container'
                  name="answers"
                  component={additionalAnswers}
                  itemIndex={index+1}
                  />
          </div>
  
            <button onClick={() => fields.splice(index, 1)}>
              Удалить вопрос
            </button>
        </div>

      ))}
        <button  onClick={() => fields.push({})}>
          Добавить вопрос
        </button>
    </>
  );
  const formSubmit = e =>{
      e.preventDefault();
  }

  return (
    <Form 
      className="createTest"
      onSubmit={formSubmit}>

      <h1>Создание теста : </h1>
      
      <FieldArray
          name="questions"
          component={additionalQuestion}
          />
          
    </Form>
  )
};


CreateTest = reduxForm({
  form: "createTest"
})(CreateTest);

export default connect(null, null)(CreateTest);
