import React from "react";
import Header from "../../layout/Header/Header";
import { connect } from "react-redux";
import { compose } from "redux";

const AdminHome = ({ ...params }) => (
  <>
    {console.log("params", { params })}
    <Header />
    <div>Admin Home Page</div>
  </>
);

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(connect(mapStateToProps, null));

export default enhance(AdminHome);
