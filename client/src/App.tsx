import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import LinkButtonGenPage from "./components/LinkButtonGenPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:username" element={<LinkButtonGenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
