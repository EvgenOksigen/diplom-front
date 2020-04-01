import React from "react";
import "./header.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import UserLogo from "../../components/UserLogo/UserLogo";
import { compose } from "redux";

const Header = ({ user, location }) => {
  const { p_role } = user;
  return (
    <div className="header-container">
      <UserLogo />

      <nav>
        <div className="nav-link-container">
          <>
            <Link
              className="nav-link"
              to={`/${location.pathname.split("/")[1]}/`}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              to={`/${location.pathname.split("/")[1]}/${p_role}/journal`}
            >
              Journal
            </Link>
            <Link
              className="nav-link"
              to={`/${location.pathname.split("/")[1]}/${p_role}/test`}
            >
              Tests
            </Link>
          </>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(connect(mapStateToProps), withRouter);

export default enhance(Header);
