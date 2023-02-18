import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <input type="checkbox" id="theme" />
      <div className="App">
        <h1>Hello world</h1>
      </div>
    </Router>

  );
}

export default App;
