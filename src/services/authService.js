import api from "./api";

export async function login(usuario, senha) {
  try {
    const response = await api.post("/auth/login", { usuario, senha });
    return response.data; // Retorna os dados da resposta (ex: token JWT)
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error; // Relança o erro para ser tratado pelo componente que chamou a função
  }
}
