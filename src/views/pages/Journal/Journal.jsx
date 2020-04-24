import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import "./Journal.scss";
import { useState } from "react";
import AddUserForm from "../../forms/AddUserForm/AddUserForm";

const Journal = ({ location }) => {
  const [showForm, setShowForm] = useState(false);
  const showingForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="journal-container">
      <button className="btn-1" type="button" onClick={() => showingForm()}>
        Add user
      </button>
      Journal is here !
      <div>{showForm && <AddUserForm showingForm={showingForm} />}</div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(connect(mapStateToProps), withRouter);

export default enhance(Journal);
