import { Request, Response } from "express";
import { Usuario } from "../models/userModels";

export const UsuarioController = {
    index: async (req: Request, res: Response) => {
        try {
            const usuarios = await Usuario.listarTodos();
            res.render("users/index", { usuarios });
        } catch (error) {
            console.error(error);  // Para ver o erro completo no console
            res.status(500).send("Erro ao buscar usuários");
        }
    },

    create: async (req: Request, res: Response) => {
        try {
            const { nome, email, senha } = req.body;

            // Validação simples de email e senha
            if (!nome || !email || !senha) {
                return res.status(400).send("Todos os campos são obrigatórios");
            }

            // Aqui, você pode adicionar mais validações, como formato de email
            const usuario = new Usuario(nome, email, senha);
            await usuario.salvar();  // Aguarde a criação do usuário

            res.redirect("/usuarios");  // Redireciona após salvar
        } catch (error) {
            console.error(error);  // Para ver o erro completo no console
            res.status(500).send("Erro ao criar usuário");
        }
    },
    
    delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            if (isNaN(Number(id))) {  // Verifica se o id é válido
                return res.status(400).send("ID inválido");
            }

            // Verificar se o usuário existe no banco antes de tentar excluir
            const usuario = await Usuario.buscarPorId(Number(id));
            if (!usuario) {
                return res.status(404).send("Usuário não encontrado");
            }

            await Usuario.deletar(Number(id));
            res.redirect("/usuarios");  // Redireciona após excluir
        } catch (error) {
            console.error(error);  // Para ver o erro completo no console
            res.status(500).send("Erro ao excluir usuário");
        }
    },
};
