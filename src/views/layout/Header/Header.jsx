import React, {useState} from "react";
import "./header.scss";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import UserLogo from "../../components/UserLogo/UserLogo";
import { compose } from "redux";

const Header = ({ location }) => {
  const [show, setShow]=useState(false)
  return (
    <div className="header-container">
      <UserLogo />

      <nav>
        <div className="nav-link-container">
          <>
          <div className= {show ? "nav-link active" : 'nav-link'} onClick={()=>setShow(!show)}>
            <div className="menu">
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
              <span>
                Journal
              </span>
            </Link>
            <Link
              className="nav-link"
              to={`/${location.pathname.split("/")[1]}/test`}
            >
              <span>
              Tests
              </span>
            </Link>
            </div>
              Home
          </div>
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
