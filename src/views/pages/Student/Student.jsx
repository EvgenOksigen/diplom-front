import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Journal from "../../components/Journal/Journal";

const Student = () => (
  <>
    Student
    <Journal />
  </>
);

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(connect(mapStateToProps, null));

export default enhance(Student);
