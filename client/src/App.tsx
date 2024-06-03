import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import LandingPage from "./LandingPage";
import Login from "./Login";
import LinkButtonGenPage from "./LinkButtonGenPage";

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
