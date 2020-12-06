import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import api from "../../../api";

const Journal = () => {
  return <div>Journal</div>;
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(connect(mapStateToProps, null));

export default enhance(Journal);
