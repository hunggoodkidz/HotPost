import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageRender from "./PageRender";

import login from "./pages/login";

function App() {
  return (
    <Router>
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          <Routes>
            <Route exact path="/" element={login} />
            <Route exact path="/:page" element={<PageRender />} />
            <Route exact path="/:page/:id" element={<PageRender />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
