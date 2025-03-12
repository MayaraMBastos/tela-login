import { z } from "zod";

// Esquema de validação para login
export const loginSchema = z.object({
  usuario: z
    .string()
    .nonempty("Insira seu usuario")
    .trim()
    .min(3, "O usuário deve ter pelo menos 3 caracteres")
    .regex(/^\S+$/, "O usuário não pode conter espaços")
    .regex(/^[a-zA-Z0-9_]+$/, "O usuário só pode conter letras, números e _"),
  senha: z
    .string()
    .nonempty("Insira sua senha")
    .trim()
    .regex(/^\S+$/, "A senha não pode conter espaços"),
});

// Função para validar os dados
export const validarLogin = (dados) => {
  const resultado = loginSchema.safeParse(dados);
  return resultado;
};
