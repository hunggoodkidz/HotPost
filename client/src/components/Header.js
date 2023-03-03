import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo_hotpost.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authAction";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
import Avatar from "./Avatar";

const Header = () => {
  const navLinks = [
    { label: "Home", icon: "home", path: "/" },
    { label: "Search", icon: "search" },
    { label: "Explore", icon: "explore", path: "/" },
    { label: "Reels", icon: "movie", path: "/" },
    { label: "Message", icon: "near_me" },
    { label: "Notifications", icon: "favorite" },
    { label: "Create", icon: "create" },
  ];
  const { auth, theme } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isActive = (pn) => {
    if (pn === pathname) return "active";
  };

  return (
    <nav
      className="navbar navbar-expand"
      style={{
        position: "fixed",
        borderRight: "1px solid rgba(219,219,219,1)",
        width: "244px",
        paddingLeft: "12px",
        display: "flex",
        top: "0",
        left: "0",
        bottom: "0",
      }}
    >
      <div
        className="container-fluid"
        style={{
          display: "inline-block",
        }}
      >
        <a
          className="navbar-brand"
          href="#"
          style={{
            position: "fixed",
            top: "2rem",
          }}
        >
          <Link to="/">
            <img
              src={logo}
              alt=""
              style={{
                width: "50%",
              }}
            />
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="menu"
          id="navbarSupportedContent"
          style={{
            position: "fixed",
            top: "10rem",
            fontSize: "1.4rem",
            lineHeight: "2.4rem",
          }}
        >
          <ul className="navbar-nav flex-row" style={{ display: "block" }}>
            {navLinks.map((link, index) => (
              <li
                className={`nav-item px-2 ${isActive(link.path)}`}
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Link className="nav-link" to={link.path}>
                  <span
                    className="material-icons"
                    style={{
                      marginTop: "20px",
                      fontSize: "1.4rem",
                    }}
                  >
                    {link.icon}
                  </span>
                  <span
                    className="label"
                    style={{
                      fontWeight: "600",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
            <li className="nav-item dropup">
              <span
                className="nav-link "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  className="fa-solid fa-bars"
                  style={{
                    position: "relative",
                    bottom: "-7rem",
                    fontSize: "1.8rem",
                  }}
                ></i>
              </span>
              <li className="nav-item">
                <span
                  className="nav-link "
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <Avatar
                    src={auth.user.avatar}
                    size="medium-avatar"
                    theme={theme}
                  />
                </span>

                <div
                  className="dropdown-menu"
                  style={{
                    position: "absolute",
                    transform: "translate(20%,60%)",
                  }}
                  aria-labelledby="navbarDropdown"
                >
                  <Link
                    className="dropdown-item"
                    to={`/profile/${auth.user._id}`}
                  >
                    Profile
                  </Link>

                  <label
                    htmlFor="theme"
                    className="dropdown-item"
                    onClick={() =>
                      dispatch({
                        type: GLOBALTYPES.THEME,
                        payload: !theme,
                      })
                    }
                  >
                    {theme ? "Light mode" : "Dark mode"}
                  </label>

                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </Link>
                </div>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
