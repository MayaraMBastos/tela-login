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
              type="password"
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
