import { useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageRender from "./customRouter/PageRender";
import PrivateRouter from "../customRouter/PrivateRouter";

import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/register";
import Header from "./components/Header";
import Alert from "./components/alert/Alert";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "./redux/actions/authAction";

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
      <div className="App">
        {auth.token && <Header />}

        <Routes>
          <Route path="/" element={auth.token ? <Home /> : <Login />} />
          <Route path="/register" element={<Register />} />

          <PrivateRouter path="/:page" element={<PageRender />} />
          <PrivateRouter path="/:page/:id" element={<PageRender />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
