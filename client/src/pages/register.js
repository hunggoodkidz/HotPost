import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../styles/register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo_hotpost.png";
import { Link } from "react-router-dom";
import { register } from "../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";

const cx = classNames.bind(styles);

const Register = () => {
  const { alert } = useSelector((state) => state);
  const initialState = {
    email: "",
    fullname: "",
    username: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { email, phone, fullname, username, password } = userData;
  const [typePass, setTypePass] = useState(false);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(register(userData));
  };

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
            <form onSubmit={handleSubmit}>
              <div className={cx("form-group")}>
                <input
                  type="email"
                  className={cx("form-control")}
                  placeholder="Email"
                  onChange={handleChangeInput}
                  value={email}
                  name="email"
                  style={{ background: `${alert.email ? "#fd2d6a14" : ""}` }}
                />

                <small className="form-text text-danger">
                  {alert.email ? alert.email : ""}
                </small>
              </div>
              <div className={cx("form-group")}>
                <input
                  type="phone"
                  className={cx("form-control")}
                  placeholder="Mobile Number"
                  onChange={handleChangeInput}
                  value={phone}
                  name="phone"
                  style={{ background: `${alert.phone ? "#fd2d6a14" : ""}` }}
                />

                <small className="form-text text-danger">
                  {alert.phone ? alert.phone : ""}
                </small>
              </div>
              <div className={cx("form-group")}>
                <input
                  type="fullname"
                  className={cx("form-control")}
                  placeholder="Full Name"
                  onChange={handleChangeInput}
                  value={fullname}
                  name="fullname"
                  style={{ background: `${alert.fullname ? "#fd2d6a14" : ""}` }}
                />
                <small className="form-text text-danger">
                  {alert.fullname ? alert.fullname : ""}
                </small>
              </div>
              <div className={cx("form-group")}>
                <input
                  type="text"
                  className={cx("form-control")}
                  onChange={handleChangeInput}
                  placeholder="Username"
                  value={username}
                  name="username"
                  style={{ background: `${alert.username ? "#fd2d6a14" : ""}` }}
                />
                <small className="form-text text-danger">
                  {alert.username ? alert.username : ""}
                </small>
              </div>
              <div className={cx("form-group")}>
                <div className="pass">
                  <input
                    type={typePass ? "text" : "password"}
                    className={cx("form-control")}
                    placeholder="Password"
                    onChange={handleChangeInput}
                    value={password}
                    name="password"
                    style={{
                      background: `${alert.password ? "#fd2d6a14" : ""}`,
                    }}
                  />

                  <small onClick={() => setTypePass(!typePass)}>
                    {typePass ? "Hide" : "Show"}
                  </small>
                </div>
                <small className="form-text text-danger">
                  {alert.password ? alert.password : ""}
                </small>
              </div>
              <div className="d-flex justify-content-between align-items-center mx-0 mb-1">
                <label htmlFor="male">
                  Male:{" "}
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    defaultChecked
                    onChange={handleChangeInput}
                  />
                </label>

                <label htmlFor="female">
                  Female:{" "}
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handleChangeInput}
                  />
                </label>

                <label htmlFor="other">
                  Other:{" "}
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
              <button type="submit" className={cx("btn btn-primary btn-block")}>
                Register
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
