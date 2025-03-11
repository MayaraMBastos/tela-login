const API_URL = "http://localhost:8080"; // Backend Spring Boot

const authLogin = async (usuario, senha) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario: usuario, senha: senha }),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Erro ao fazer login");
  }

  return await response.json();
};

// Aqui está a exportação correta:
export default authLogin;
