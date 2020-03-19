import React from "react";
import "./header.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import UserLogo from "../../components/UserLogo/UserLogo";
import { compose } from "redux";
import Axios from "axios";

const Header = ({ user, location, handleSubmit }) => {
  const fileChange = e => {
    let files = e.target.files;

    let reader = new FileReader();
    // reader.readAsDataURL(files[0]);
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      const formData = { file: e.target.result };
      console.log(formData);
      Axios.post(`http://localhost:4010/api/users/upload-csv`, formData).then(
        res => {
          console.log(res);

          return res;
        }
      );
    };
  };
  const handlerClick = () => {
    Axios.get(`http://localhost:4010/api/users/get-all-users`).then(res => {
      console.log(res);

      return res;
    });
  };

  return (
    <div className="header-container">
      <UserLogo />

      <nav>
        <div className="nav-link-container">
          <>
            <div className="nav-link">
              <input type="file" name="files" onChange={fileChange} />
            </div>
            <button type="button" onClick={handlerClick}>
              GetAll
            </button>
            <Link className="nav-link" to={`${location.pathname}/journal`}>
              Journal
            </Link>
            <Link className="nav-link" to={`${location.pathname}/test`}>
              Tests
            </Link>
          </>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const enhance = compose(connect(mapStateToProps, null), withRouter);

export default enhance(Header);
