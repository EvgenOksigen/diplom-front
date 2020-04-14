import React from 'react'
import { reduxForm, getFormValues, Form, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Input from '../../components/FormsComponent/SignInput/SignInput';
import RadioButton from '../../components/FormsComponent/Radio/RadioButton';

const TestForm = ({test, handleSubmit}) => {
    const formSubmit = e =>{
      e.preventDefault();
      handleSubmit(values=>{
        console.log(values)
      
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
                  <div className="qwestion" key={qi}>{qw.question._text} {`cost:${qw._attributes.cost}`}
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