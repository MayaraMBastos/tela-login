import React, { useState } from "react";
import { authLogin } from "../services/authService";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setsenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await authLogin(usuario, senha);
      console.log("Usuário autenticado:", data);
      // Aqui você pode salvar o token no localStorage ou Context API
    } catch (error) {
      alert("Erro ao fazer login");
    }
  };

  return (
    <div>
      <form
        action="/login"
        method="POST"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div>
          <label htmlFor="usuario">
            <p>Usuario</p>
            <input
              type="text"
              name="usuario"
              id="usuario"
              className="form-control"
            />
          </label>
        </div>
        <div>
          <label htmlFor="senha">
            <p>Senha</p>
            <input
              type="senha"
              name="senha"
              id="senha"
              className="form-control"
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-secondary justify-content-center w-50 m-4"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
