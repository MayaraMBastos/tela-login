import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Certifique-se de que isso esteja aqui!
import styles from "./Login.module.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); // Aqui estamos criando o hook de navegação

  const handleLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Envia a requisição POST via fetch
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, senha }),
    });

    const data = await response.json();

    if (data.redirectUrl) {
      // Redireciona para a URL fornecida na resposta
      navigate(data.redirectUrl); // Usa o hook `navigate` para redirecionar
    } else {
      alert(data.mensagem);
    }
  };

  return (
    <div
      className={` d-flex justify-content-center align-items-center h-50 w-25 p-5 rounded border-0 ${styles.container}`}
    >
      <form
        className="d-flex flex-column align-items-center"
        onSubmit={handleLogin} // Chama handleLogin ao submeter o formulário
      >
        <div>
          <label htmlFor="usuario">
            <p>Usuario</p>
            <input
              type="text"
              name="usuario"
              value={usuario}
              id="usuario"
              className="form-control text-white border-0"
              onChange={(e) => setUsuario(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="senha">
            <p>Senha</p>
            <input
              type="password" // Tipo correto de senha
              name="senha"
              value={senha}
              id="senha"
              className="form-control text-white border-0"
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary w-100 m-4 ">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
