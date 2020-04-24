import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

const Teacher = () => (
  <>
    <div>Teacher Home Page</div>
  </>
);

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(connect(mapStateToProps, null));

export default enhance(Teacher);
