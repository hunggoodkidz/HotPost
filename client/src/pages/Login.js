import React,{useState ,useEffect} from "react";
import classNames from "classnames/bind";
import styles from "../styles/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo_hotpost.png";
import { Link } from "react-router-dom";
import screen from "../assets/images/screenphone.png"
import image1 from "../assets/images/image1.png"
import image2 from "../assets/images/image2.png"
import image3 from "../assets/images/image3.png"


const cx = classNames.bind(styles);

const Login = () => {
  const [currentImage, setCurrentImage] = useState(image1)

  const imagesPhone = [image1,image2,image3]
  console.log("asbaoel")

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentImage(imagesPhone[Math.floor(Math.random() * imagesPhone.length)]);
        console.log(imagesPhone);
    }, 3000)
    
    return () => clearInterval(intervalId);
}, [imagesPhone])

  return (
    <div className={cx("container")}>
      <div className={cx("row")}>
        <div className={cx("col-sm-6")}>
          <img
            src={screen}
            className={cx("phone")}
            alt=""
          />
          <img
            src={currentImage}
            className={cx("image-phone")}
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
                Sign In
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
