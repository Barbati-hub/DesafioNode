const Pergunta = require("./pergunta");
const Tela = require('../interfaces/tela');
const TarefaServico = require("../servicos/servicos");

const menu = async () => {
    let sair = false;

    while (!sair) {
        Tela.limpar(); 
        console.log(`
        1 - Agendar Horário
        2 - Horários Marcados
        3 - Alterar Horário
        4 - Alterar Status
        5 - Sair
        `);

        let opcao = await Pergunta.perguntar('Escolha uma das opções: ');

        switch (opcao) {
            case '1':
                await TarefaServico.registrar();
                break;
            case '2':
                if (TarefaServico.listarHorarios) {
                    await TarefaServico.listarHorarios();
                } else {
                    console.log("Função listarHorarios() não implementada.");
                }
                break;
            case '3':
                if (TarefaServico.alterarHorario) {
                    await TarefaServico.alterarHorario();
                } else {
                    console.log("Função alterarHorario() não implementada.");
                }
                break;
            case '4':
                await TarefaServico.alterarStatus();
                break;
            case '5':
                console.log('Saindo...');
                sair = true;
                break;
            default:
                console.log('Opção inválida, tente novamente.');
        }
    }
};

menu(); 
