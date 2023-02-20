import React from "react";
import classNames from "classnames/bind";
import styles from "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons' 

const cx = classNames.bind(styles);

const Login = () => {
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
          <h2 className={cx('name-logo')}>HotPosts</h2>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QhO1486B3j5PHN22svKVJXj8aX9pG4rypQ&usqp=CAU" className={cx("hotpost-logo")} alt="" />
            <p className={cx("info")}>
              Sign up to see photos and videos form your friends
            </p>
            <button type="submit" className={cx("btn btn-primary btn-block")}>
              <FontAwesomeIcon icon={faFacebook} className={cx('logo-facebook')}/>
              Login with Facebook
            </button>
            <p className={cx("or")}>OR</p>
            <form>
              <div className={cx('form-group')}>
                <input type="text" className={cx('form-control')} placeholder="Username" />
              </div>
              <div className={cx('form-group')}>
                <input type="password" className={cx('form-control')} placeholder="Password" />
              </div>
              <button type="submit" className={cx('btn btn-primary btn-block')}>Sign In</button>
            </form>
            <p className={cx('terms')}>By signing up, you agree to our <b>Terms, Data Policy</b> and <b>Cookies Policy</b>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
