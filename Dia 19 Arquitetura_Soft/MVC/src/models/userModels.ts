import { prisma } from "../config/database";

export class Usuario {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    createdAt?: Date;

    constructor(nome: string, email: string, senha: string, id?: number, createdAt?: Date) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.createdAt = createdAt;
    }

    static async listarTodos(): Promise<Usuario[]> { // Alterado para retornar um array
        const usuarios = await prisma.usuarios.findMany();
        return usuarios.map(u => new Usuario(u.nome, u.email, u.senha, u.id, u.createdAt));
    }
    
    static async buscarPorId(id: number): Promise<Usuario | null> {
        const usuario = await prisma.usuarios.findUnique({
            where: { id }
        });
        return usuario? new Usuario(usuario.nome, usuario.email, usuario.senha, usuario.id, usuario.createdAt): null; // Corrected to lowercase 'n'
    }

    async salvar(): Promise<Usuario> {
        const usuarioCriado = await prisma.usuarios.create({
            data: {
                nome: this.nome, // Corrected to lowercase 'n'
                email: this.email,
                senha: this.senha
            }
        });
        return new Usuario(usuarioCriado.nome, usuarioCriado.email, usuarioCriado.senha, usuarioCriado.id, usuarioCriado.createdAt); // Corrected to lowercase 'n'
    }

    static async deletar(id: number): Promise<void> {
        await prisma.usuarios.delete({
            where: { id }
        });
    }
}