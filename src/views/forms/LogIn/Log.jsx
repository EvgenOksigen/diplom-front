import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import "./LogIn.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { signIn } from "../../../state/ducks/user/actions";
import Input from "../../components/FormsComponent/SignInput/SignInput";
import Select from "../../components/FormsComponent/Select/Select";

class LoginForm extends Component {
  //

  formSubmit = e => {
    e.preventDefault();

    const { handleSubmit, signIn } = this.props;

    handleSubmit(values => {
      signIn(values);
    })();
  };

  render() {
    return (
      <form
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

        <div className="">
          <Field
            label="Role"
            name="user_role"
            component={Select}
            options={[
              {
                text: "Teacher",
                value: "teacher"
              },
              {
                text: "Student",
                value: "student"
              },
              {
                text: "Admin",
                value: "admin"
              }
            ]}
            defaultValue={"student"}
          />
        </div>
        <button type="submit" className="log-in-btn">
          <i className="fas fa-sign-in-alt"></i>
        </button>
      </form>
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
