import React from "react";
import "./header.scss";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import UserLogo from "../../components/UserLogo/UserLogo";
import { compose } from "redux";
import Menu from "../../components/Menu-dd/Menu";

const Header = ({ location }) => {
  return (
    <div className="header">
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
                to={`/${location.pathname.split("/")[1]}/journal`}
              >
                Journal
              </Link>

              <Menu title="Tests">
                <Link
                  className="nav-link"
                  to={`/${location.pathname.split("/")[1]}/test`}
                >
                  Tests
                </Link>
                <Link
                  className="nav-link"
                  to={`/${location.pathname.split("/")[1]}/create-test`}
                >
                  Test constructor
                </Link>
              </Menu>

              <Menu title="Course">
                <Link
                  className="nav-link"
                  to={`/${location.pathname.split("/")[1]}/add-course`}
                >
                  Add course
                </Link>
                <Link
                  className="nav-link"
                  to={`/${location.pathname.split("/")[1]}/course-list`}
                >
                  Course list
                </Link>
              </Menu>
            </>
          </div>
        </nav>
      </div>
    </div>
  );
};

const enhance = compose(connect(null), withRouter);

export default enhance(Header);
