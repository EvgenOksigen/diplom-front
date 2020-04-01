import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Test = ({ user }) => {
  return (
    <>
      <div>User will pass the test here</div>
      {user.p_role === "student" ? (
        <button>Pass</button>
      ) : (
        <button>Create</button>
      )}
    </>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(connect(mapStateToProps), withRouter);

export default enhance(Test);
