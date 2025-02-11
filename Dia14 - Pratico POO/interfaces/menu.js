const Pergunta = require('./pergunta')
const EstoqueServicos = require('../servicos/estoqueServicos')
const Tela = require('../interfaces/tela')

const exibirMenu = () => {
    console.log(`
        =============================
        |      MENU DE ESTOQUE      |
        =============================
        1 -- Cadastrar Produto
        2 -- Listar Produtos
        3 -- Excluir Produto
        4 -- Sair
    `);
};

const menu = async () => {
    let sair = false;

    while (!sair) {
        exibirMenu();
        let opcao = await Pergunta.perguntar('Digite uma opção: '); // Remove espaços extras

        switch (opcao) {
            case '1':
                await EstoqueServicos.cadastrarEstoque();
                break;
            case '2':
                await EstoqueServicos.listarEstoque();
                break;
            case '3':
                await EstoqueServicos.excluirProduto();
                break;
            case '4':
                console.log('Saindo...');
                sair = true;
                return; 
            default:
                console.log('Opção inválida. Tente novamente.');
        }

        await Pergunta.perguntar('Pressione ENTER para continuar...');
    }
};

module.exports = menu;
