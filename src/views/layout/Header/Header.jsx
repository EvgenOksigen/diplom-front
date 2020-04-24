import React, {useState} from "react";
import "./header.scss";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import UserLogo from "../../components/UserLogo/UserLogo";
import { compose } from "redux";
import Menu from "../../components/Menu-dd/Menu";

const Header = ({ location }) => {
  return (
    <div className="header-container">
      <UserLogo />

      <nav>
        <div className="nav-link-container">
          <>
          <Menu title='Home'> 
            <Link
                className="nav-link"
                  to={`/${location.pathname.split("/")[1]}/`}
                >
                  <span>Home</span>
                </Link>
                <Link
                  className="nav-link"
                  to={`/${location.pathname.split("/")[1]}/journal`}
                  >
                  <span>Journal</span>
                </Link>
                <Link
                  className="nav-link"
                  to={`/${location.pathname.split("/")[1]}/add-course`}
                  >
                  Course
                </Link>
          </Menu>
          
            <Link
              className="nav-link"
              to={`/${location.pathname.split("/")[1]}/`}
              >
              Home
            </Link>
            <Link
              className="nav-link"
              to={`/${location.pathname.split("/")[1]}/add-course`}
            >
              Course
            </Link>    
            <Link
              className="nav-link"
              to={`/${location.pathname.split("/")[1]}/journal`}
            >
              Journal
            </Link>
            <Link
              className="nav-link"
              to={`/${location.pathname.split("/")[1]}/test`}
            >
              Tests
            </Link>
          </>
        </div>
      </nav>
    </div>
  );
};


const enhance = compose(connect(null), withRouter);

export default enhance(Header);
