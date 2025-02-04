const Tela = require('./tela')
const Pergunta = require('./pergunta')
const TarefaServico = require('../servicos/servicos')





const menu = async () => {
    let sair = 0;
    while (sair == 0) {
        console.log(`
            1 - Cadastrar Produto
            2 - Listar Produto
            3 - Excluir Produto
            5 - Sair
            `)

        let opcao = await Pergunta.perguntar('Escolhauma opção: ')

        switch(opcao) {
            case '1':
                await TarefaServico.Cadastrar()
                break
            case '2':
                await TarefaServico.listar()
                break
            case '3':
                await TarefaServico.excluirProduto()
                break
            case '4':
                console.log('Saindo...')
                break
            default:
                console.log('Opção Inválida')
                break;
        }
    }
}

module.exports = menu;