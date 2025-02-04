const { agendas } = require("../db/memoria");
const Pergunta = require("../interfaces/pergunta");
const Tela = require("../interfaces/tela");

const LocalizarExecutarAcao = async (id, recursao, callback) => {
    const agenda = agendas.find((tarefa) => tarefa.id == id);
    
    if (!agenda) {
        await Tela.mensagemDe("ID não encontrado", 2);
        const opcao = await Pergunta.perguntar('0 - para sair \n1 - para tentar novamente: ');

        if (opcao == '0') {
            Tela.limpar();
            return;
        }

        return await recursao(); 
    }

    return await callback(agenda);
};

const TarefaServico = {
    registrar: async () => {
        const nome = await Pergunta.perguntar("Digite seu nome: ");
        const dia = await Pergunta.perguntar("Digite o dia do atendimento: ");
        const horario = await Pergunta.perguntar("Escolha horário de atendimento: ");

        const id = agendas.length > 0 ? agendas[agendas.length - 1].id + 1 : 1;

        const agenda = {
            id,
            nome,
            dia,
            horario,
            status: "Agendado",
        };

        agendas.push(agenda);
        await Tela.mensagemDe(`${nome} foi agendado para o dia ${dia} no horário ${horario}`, 5);
    },

    excluirAgenda: async () => {
        Tela.limpar();
        const id = await Pergunta.perguntar("Digite o código do Agendamento: ");

        await LocalizarExecutarAcao(id, TarefaServico.excluirAgenda, async (agenda) => {
            if (!agenda) return;

            const index = agendas.findIndex((a) => a.id == agenda.id);
            if (index !== -1) {
                agendas.splice(index, 1);
                await Tela.mensagemDe(`Agenda de "${agenda.nome}" excluída com sucesso`, 3);
            }
        });
    },

    alterarStatus: async () => {
        Tela.limpar();
        const id = await Pergunta.perguntar("Digite o código da agenda: ");

        await LocalizarExecutarAcao(id, TarefaServico.alterarStatus, async (agenda) => {
            if (!agenda) return;

            agenda.status = await Pergunta.perguntar("Digite o novo status: ");
            await Tela.mensagemDe(`Agenda de ${agenda.nome} alterada para o status: ${agenda.status}`, 2);
        });
    },
};

module.exports = TarefaServico;
