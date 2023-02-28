import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../styles/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo_hotpost.png";
import { Link } from "react-router-dom";
import screen from "../assets/images/screenphone.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import {login} from '../redux/actions/authAction'
import {useDispatch} from 'react-redux'

const cx = classNames.bind(styles);

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const [currentImage, setCurrentImage] = useState(image1);
  const [typePass, setTypePass] = useState(false)

  const dispatch = useDispatch()

  const imagesPhone = [image1, image2, image3];

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(login(userData));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(
        imagesPhone[Math.floor(Math.random() * imagesPhone.length)]
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imagesPhone]);

  return (
    <div className={cx("container")}>
      <div className={cx("row")}>
        <div className={cx("col-sm-6")}>
          <img src={screen} className={cx("phone")} alt="" />
          <img src={currentImage} className={cx("image-phone")} alt="" />
        </div>
        <div className={cx("col-sm-6")}>
            <div className={cx("right-column text-center")}>
              <img src={logo} width="250px" alt="logo" />
              <p className={cx("info")}>
                Sign up to see photos and videos form your friends
              </p>
              <button type="submit" className={cx("btn btn-dark btn-block")}>
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
                    type="text"
                    className={cx("form-control")}
                    placeholder="Email"
                    onChange={handleChangeInput}
                    value={email}
                    name="email"
                  />
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
                    />
                    <small onClick={() => setTypePass(!typePass)}>
                    {typePass ? 'Hide' : 'Show'}
                    </small>
               </div>
                </div>
                <button type="submit" className="btn btn-dark w-80"
                disabled={email && password ? false : true}>
                    Login
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
              Don't have an account?
              <Link to="/register"> Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
