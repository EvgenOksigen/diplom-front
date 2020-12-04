import React from "react";
import "./header.scss";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import UserLogo from "../../components/UserLogo/UserLogo";
import { compose } from "redux";
import Menu from "../../components/Menu-dd/Menu";
import DropDown from "../../components/DropDown/DropDown";

const Header = ({ location, profile }) => {
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

              {profile && profile.p_role !== "student" && (
                <Link
                  className="nav-link"
                  to={`/${location.pathname.split("/")[1]}/journal`}
                >
                  Journal
                </Link>
              )}

              <DropDown prev="Test">
                <Link
                  className="nav-link"
                  to={`/${location.pathname.split("/")[1]}/test`}
                >
                  Tests
                </Link>
                {profile && profile.p_role !== "student" && (
                  <Link
                    className="nav-link"
                    to={`/${location.pathname.split("/")[1]}/create-test`}
                  >
                    Constructor
                  </Link>
                )}
              </DropDown>
              {profile && profile.p_role === "admimn" && (
                <DropDown prev="Curse">
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
                </DropDown>
              )}
            </>
          </div>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user, test }) => ({ user, test: test.passedTest });
// const mapDispatchToProps = { getTestById };

const enhance = compose(connect(mapStateToProps, {}), withRouter);

export default enhance(Header);
