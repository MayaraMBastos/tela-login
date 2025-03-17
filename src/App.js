import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; // Importa o componente Login
import Home from "./pages/Home"; // Importa o componente Home
import Resgistro from "./pages/Registro";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route path="/registro" element={<Resgistro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
