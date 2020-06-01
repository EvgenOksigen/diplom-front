import React, { Component } from "react";
import { reduxForm, Field, Form } from "redux-form";
import "./LogIn.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { signIn } from "../../../state/ducks/user/actions";
import Input from "../../components/FormsComponent/SignInput/SignInput";
import Select from "../../components/FormsComponent/Select/Select";
import Axios from "axios";

class LoginForm extends Component {
  //
  uploadHandler = e => {
    console.log(e.target.files);
    let fileList = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < fileList.length; i++) {
      formData.append(`files`, fileList[i]);
    }
    Axios.post(
      "http://localhost:4444/api/users/upload-csv",
      formData
      // e.target.result
    ).then(res => {
      console.log(res.data);
      return res.data;
    });
  };

  getAll = () => {
    let config = {
      method: "GET",
      url: "http://localhost:4444/api/users/test"
    };
    Axios(config).then(res => {
      console.log(res.data);
      return res;
    });
  };
  download = () => {
    window.open("http://localhost:4444/api/users/download-users-json");
  };

  formSubmit = e => {
    e.preventDefault();

    const { handleSubmit, signIn } = this.props;

    handleSubmit(values => {
      console.log(values);

      signIn(values).then(res => {
        // console.log({res.data}})
      });
    })();
  };

  render() {
    return (
      <>
        <div>
          <input
            type="file"
            name="attachment"
            onChange={this.uploadHandler}
            multiple
          />
          <button type="button" onClick={this.getAll}>
            GetAll
          </button>
          <button type="button" onClick={this.download}>
            Download
          </button>
        </div>
        <Form
          autoComplete="off"
          className="login-form paper"
          onSubmit={this.formSubmit}
        >
          <h1>Log in</h1>
          <div className="auth-form-field">
            <Field
              label="Email/login"
              name="email"
              component={Input}
              type="text"
              placeholder="Email or username"
            />
          </div>

          <div className="auth-form-field">
            <Field
              label="Password"
              name="pass"
              component={Input}
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="auth-form-field">
            <Field
              label="Role"
              name="user_role"
              className="auth select-role"
              component={Select}
              options={[
                {
                  text: "Student",
                  value: "student"
                },
                {
                  text: "Admin",
                  value: "admin"
                },
                {
                  text: "Teacher",
                  value: "teacher"
                }
              ]}
              defaultValue={"student"}
            />
          </div>
          <button type="submit" className="log-in-btn">
            <i className="fas fa-sign-in-alt"></i>
          </button>
        </Form>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { signIn };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "login" })
);

export default enhance(LoginForm);
