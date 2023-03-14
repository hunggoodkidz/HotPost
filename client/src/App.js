import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" elements= {<LoginPage />} />
          <Route path="/home" elements= {<HomePage />} />
          <Route path="/profile/:userId" elements= {<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
