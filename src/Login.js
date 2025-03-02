function Login() {
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
            <input type="text" name="usuario" id="usuario" />
          </label>
        </div>
        <div>
          <label htmlFor="senha">
            <p>Senha</p>
            <input type="password" name="senha" id="senha" />
          </label>
        </div>
        <button type="submit" className="m-2">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
