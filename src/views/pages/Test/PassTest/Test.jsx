import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Test = ({ profile }) => {
  return (
    <>
      <div>User will pass the test here</div>
      {profile.p_role === "student" ? (
        <button>Pass</button>
      ) : (
        <>
          <button>Pass</button>
          <button>Create</button>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ user }) => ({ profile: user.profile });

const enhance = compose(connect(mapStateToProps), withRouter);

export default enhance(Test);
