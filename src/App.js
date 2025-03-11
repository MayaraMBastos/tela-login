import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; // Importa o componente Login
import Home from "./pages/Home"; // Importa o componente Home

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <Login className="d-flex justify-content-center align-items-center vh-100 " />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route
          exact
          path="/"
          element={
            <Login className="d-flex justify-content-center align-items-center vh-100 " />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
