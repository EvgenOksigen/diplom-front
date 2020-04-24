import React from 'react'
import { reduxForm, Form, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import RadioButton from '../../components/FormsComponent/Radio/RadioButton';
import Axios from 'axios';
import { useState } from 'react';

const TestForm = ({test, handleSubmit}) => {
  const [rightAnswer, setRightAnswer] = useState([])
  let res
    const formSubmit = e =>{
      e.preventDefault();

      handleSubmit(async values=>{
        if(!values.answers){
          window.alert('not one answers ...')
          return
        }
        res = await Axios.post("http://localhost:4444/api/users/test-right", values).then(res => res.data)
        setRightAnswer(res)
      })()
    }
    return(
      <div className="test-wrapp">
        <div key="kek">{test.test_json.test.discipline._text} </div>
        <div className="kek">{test.test_json.test.title._text} </div>
            <Form 
              autoComplete="off"
              className=""
              onSubmit={formSubmit}>
                {test.test_json.test.item.map((qw,qi)=>{
                return (
                  <div className="qwestion" key={qi}> <span className={rightAnswer[qi]?'right':null}>{`${qw._attributes.cost}$`}</span>{qw.question._text} 
                    <div className="answer-list">
                    {qw.answer.map((answer,ai)=>{
                      return(
                          <Field 
                          name={`answers.${qi}`}
                          key={ai}
                          component={RadioButton}
                          options={[
                            { value: answer._text, text: answer._text},
                          ]}
                          />
                        )
                    })}
                    </div>
                  </div>)})}
              <button type='submit'>Pass</button>
            </Form>
        </div>
    )
}


const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(
  connect(mapStateToProps, null),
  reduxForm({ form: "test" })
);
  export default enhance(TestForm);