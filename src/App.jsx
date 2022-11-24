import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./registry/login/Login";
import Register from "./registry/register/Register";
import ProtectedRoutes from "./registry/ProtectedRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/home" element={<Home />} /> */}

          {/* Protected Routes...  */}
          <Route path="/home" element={<ProtectedRoutes Component={Home} />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
