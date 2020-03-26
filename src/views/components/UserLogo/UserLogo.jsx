import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../../state/ducks/user/actions";
import "./UserLogo.css";

const UserLogo = ({ profile, user, signOut }) => {
  return (
    <div className="user-logo-container">
      <button
        className="log-out btn"
        onClick={() => {
          signOut();
        }}
      >
        <i className="fas fa-sign-in-alt"></i> LogOut
      </button>
      <div className="user-info">
        {`${user.email} `}
        <div className="user-logo role">{`${profile.p_role}`}</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ profile: user, user: user.user });

const mapDispatchToProps = { signOut };

export default connect(mapStateToProps, mapDispatchToProps)(UserLogo);
