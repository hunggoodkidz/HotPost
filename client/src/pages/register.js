import React from "react";
import classNames from "classnames/bind";
import styles from "../styles/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo_hotpost.png";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Register = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("row")}>
        <div className={cx("col-sm-6")}>
          <img
            src="https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png"
            className={cx("phone")}
            alt=""
          />
        </div>
        <div className={cx("col-sm-6")}>
          <div className={cx("right-column text-center")}>
            <img src={logo} width="250px" alt="logo" />
            {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QhO1486B3j5PHN22svKVJXj8aX9pG4rypQ&usqp=CAU" className={cx("hotpost-logo")} alt="" /> */}
            <p className={cx("info")}>
              Sign up to see photos and videos form your friends
            </p>
            <button type="submit" className={cx("btn btn-primary btn-block")}>
              <FontAwesomeIcon
                icon={faFacebook}
                className={cx("logo-facebook")}
              />
              Login with Facebook
            </button>
            <p className={cx("or")}>OR</p>
            <form>
              <div className={cx("form-group")}>
                <input
                  type="email"
                  className={cx("form-control")}
                  placeholder="Mobile Number or Email"
                />
              </div>
              <div className={cx("form-group")}>
                <input
                  type="fullname"
                  className={cx("form-control")}
                  placeholder="Full Name"
                />
              </div>
              <div className={cx("form-group")}>
                <input
                  type="text"
                  className={cx("form-control")}
                  placeholder="Username"
                />
              </div>
              <div className={cx("form-group")}>
                <input
                  type="password"
                  className={cx("form-control")}
                  placeholder="Password"
                />
              </div>
              <button type="submit" className={cx("btn btn-primary btn-block")}>
                Sign UP
              </button>
            </form>
            <p className={cx("terms")}>
              By signing up, you agree to our <b>Terms, Data Policy</b> and{" "}
              <b>Cookies Policy</b>.
            </p>
          </div>
          <div className={cx("right-column text-center")}>
            <p>
              {" "}
              Already have an account ?<Link to="/login"> Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
