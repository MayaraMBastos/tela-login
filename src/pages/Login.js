import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Certifique-se de que isso esteja aqui!
import styles from "./Login.module.css";
import { validarLogin } from "../services/authService";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Hook de navegação

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

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha }),
      });

      const data = await response.json();

      if (data.redirectUrl) {
        navigate(data.redirectUrl); // Redireciona
        alert(data.mensagem);
      } else {
        alert(data.mensagem);
      }
    } catch (error) {
      alert("Erro ao conectar ao servidor");
    }
  };

  return (
    <div
      className={` d-flex justify-content-center align-items-center h-auto w-auto p-5 rounded border-0 ${styles.container}`}
    >
      <form
        className="d-flex flex-column align-items-center"
        onSubmit={handleLogin} // Chama handleLogin ao submeter o formulário
      >
        <div>
          <label htmlFor="usuario">
            <p className="mb-2">Usuario</p>
            <input
              type="text"
              name="usuario"
              value={usuario}
              id="usuario"
              className="form-control  mb-2 border-0"
              onChange={(e) => setUsuario(e.target.value)}
            />
          </label>
          {errors.usuario && <p>{errors.usuario._errors[0]}</p>}
        </div>
        <div>
          <label htmlFor="senha">
            <p className="mb-2">Senha</p>
            <input
              type="password" // Tipo correto de senha
              name="senha"
              value={senha}
              id="senha"
              className="form-control  mb-2 border-0"
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          {errors.senha && <p>{errors.senha._errors[0]}</p>}
        </div>
        <button type="submit" className={`btn btn-lg w-100 m-4 ${styles.btn}`}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
