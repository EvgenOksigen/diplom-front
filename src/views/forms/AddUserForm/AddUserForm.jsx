import React from "react";
import { Form, Field, reduxForm } from "redux-form";
import Input from "../../components/FormsComponent/Input/Input";
import { connect } from "react-redux";
import api from "../../../api";

import "./AddUserForm.scss";
let AddUserForm = ({ handleSubmit, showingForm }) => {
  const formSubmit = e => {
    e.preventDefault();

    handleSubmit(async values => {
      let formData = {
        ...values,
        all_roles: values.all_roles.split(",")
      };
      await api.users.signup(formData).then(res => {
        alert(`User has been created : ${JSON.stringify(res, null, 4)}`); //TODO antd message
        showingForm();
        return res;
      });
    })();
  };
  return (
    <div className="form-container">
      <Form className="add-user-form" onSubmit={formSubmit}>
        <div className="add-user-form-field">
          <Field
            label="First name"
            name="first_name"
            component={Input}
            type="text"
            placeholder="First name"
          />
        </div>

        <div className="add-user-form-field">
          <Field
            className="add-user-form-field"
            label="Last name"
            name="last_name"
            component={Input}
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className="add-user-form-field">
          <Field
            className="add-user-form-field"
            label="Father name"
            name="father_name"
            component={Input}
            type="text"
            placeholder="Father name"
          />
        </div>
        <div className="add-user-form-field">
          <Field
            className="add-user-form-field"
            label="Birth date"
            name="birth_date"
            component={Input}
            type="text"
            placeholder="Birth date"
          />
        </div>

        <div className="add-user-form-field">
          <Field
            className="add-user-form-field"
            label="Email"
            name="email"
            component={Input}
            type="text"
            placeholder="Email"
          />
        </div>

        <div className="add-user-form-field">
          <Field
            className="add-user-form-field"
            label="Default role"
            name="default_role"
            component={Input}
            type="text"
            placeholder="Default role"
          />
        </div>
        <div className="add-user-form-field">
          <Field
            className="add-user-form-field"
            label="All roles"
            name="all_roles"
            component={Input}
            type="text"
            placeholder="All roles"
          />
        </div>

        <button type="submit" className="log-in-btn">
          <i className="fas fa-sign-in-alt"></i>
        </button>
      </Form>
    </div>
  );
};

AddUserForm = reduxForm({
  form: "createUser"
})(AddUserForm);

export default connect(null, null)(AddUserForm);
