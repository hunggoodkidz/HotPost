import { useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageRender from "./PageRender";
import Home from "./pages/home";
import Login from "./pages/login";
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
        <Routes>
          {auth.token && <Header />}
          {console.log(auth.user._id)}
          <Route  path="/" element={auth.token ? <Home /> : <Login/>} />
          <Route  path="/:page" element={<PageRender />} />
          <Route  path="/:page/:id" element={<PageRender />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
