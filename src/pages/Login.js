import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Certifique-se de que isso esteja aqui!
import styles from "./Input.module.css";
import { validarLogin } from "../services/authService";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Hook de navegação
  const [backendError, setBackendError] = useState(""); // Estado para erro do backend

  const handleLogin = async (e) => {
    e.preventDefault();

    // Valida os dados antes de enviar
    const validation = validarLogin({ usuario, senha });

    if (!validation.success) {
      // Captura os erros e exibe
      const fieldErrors = validation.error.format();
      setErrors(fieldErrors);
      return;
    }

    setErrors({}); // Se não houver erros, limpa
    setBackendError(""); // Limpa erros anteriores do backen

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha }),
      });

      const data = await response.json();

      if (data.redirectUrl) {
        navigate(data.redirectUrl); // Redireciona
        setBackendError(data.mensagens); // Garante uma mensagem sempre
      } else {
        setBackendError(data.mensagens || "Erro desconhecido."); // Garante uma mensagem sempre
      }
    } catch (error) {
      alert("Erro ao conectar ao servidor");
    }
  };

  return (
    <div
      className={` d-flex justify-content-center align-items-center h-60 w-25 max-w-25 p-5 rounded border-0 ${styles.container}`}
    >
      <form
        className="d-flex flex-column "
        onSubmit={handleLogin} // Chama handleLogin ao submeter o formulário
      >
        <div>
          <label htmlFor="usuario" className="w-100">
            <p className="mb-2">Usuario</p>
            <input
              type="text"
              name="usuario"
              value={usuario}
              id="usuario"
              className="form-control w-100 mb-2 border-0"
              onChange={(e) => setUsuario(e.target.value)}
            />
          </label>
          {errors.usuario && (
            <p className="erroText">{errors.usuario._errors[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="senha" className="w-100">
            <p className="mb-2">Senha</p>
            <input
              type="password" // Tipo correto de senha
              name="senha"
              value={senha}
              id="senha"
              className="form-control w-100 mb-2 border-0"
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          {errors.senha && (
            <p className="erroText">{errors.senha._errors[0]}</p>
          )}

          {backendError && <p className="erroText">{backendError}</p>}
        </div>
        <button type="submit" className={`btn btn-lg w-100  ${styles.btn}`}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
