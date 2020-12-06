import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import "./Journal.scss";
import { useState } from "react";
import AddUserForm from "../../forms/AddUserForm/AddUserForm";

import { getAll } from "../../../state/ducks/journal/actions";

const Journal = ({ location, getAll }) => {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    getAll().then(res => console.log(res));
  });

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

const enhance = compose(connect(mapStateToProps, { getAll }), withRouter);

export default enhance(Journal);
