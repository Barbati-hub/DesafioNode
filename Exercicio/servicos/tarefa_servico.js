const Database = require("../database/memoria");
const Pergunta = require("../interfaces/pergunta");
const Tela = require("../interfaces/tela");

const TarefaServico = {
    cadastrarTarefa: async () => {
        const titulo = await Pergunta.perguntar("Digite o titulo da tarefa");
        const descricao = await Pergunta.perguntar("Digite a descrição da tarefa");
        const id = new Date().getTime()
    
        const tarefa = {
            id, titulo, descricao, status: "Aberto"
        }
    
        Database.tarefas.push(tarefa);
        await Tela.mensagemPor("Tarefa cadastrada com sucesso", 1);
    },
    listarTarefa: async () => {
        Tela.limparTela();
        console.log("===== [ Lista de tarefas ] =====")
        for(tarefa of Database.tarefas){
            console.log(`
                Id: ${tarefa.id}
                Título: ${tarefa.titulo}
                Descrição: ${tarefa.descricao}
                Status: ${tarefa.status}
                -----------------------------------
            `);
        }

        await Pergunta.perguntar("Digite enter para sair");
        Tela.limparTela();
    },

    excluirTarefa: async () => {
        Tela.limparTela();
        const id = await Pergunta.perguntar("Digite o di da tarefa")

        const tarefa = Database.tarefas.find((tarefa) => tarefa.id == id)
        if(!tarefa){
            Tela.mensagemPor('Id não encontrado!', 1)
            const opcao = await Pergunta.perguntar("Digite 0 para sair \n 1 - para tentar novamente")
            if(opcao == '0'){
                Tela.limparTela()
                return;
            }
            excluirTarefa()

        }
        Database.tarefas.splice()


        console.log("===== [ Lista de tarefas ] =====")
        for(tarefa of Database.tarefas){
            console.log(`
                Id: ${tarefa.id}
                Título: ${tarefa.titulo}
                Descrição: ${tarefa.descricao}
                Status: ${tarefa.status}
                -----------------------------------
            `);
        }

        await Pergunta.perguntar("Digite enter para sair");
        Tela.limparTela();
    }
}

module.exports = TarefaServico;