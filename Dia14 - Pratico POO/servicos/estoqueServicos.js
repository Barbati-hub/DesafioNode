const Repositorio = require('../repositorios/repositorio')
const Pergunta = require('../interfaces/pergunta')
const Tela = require('../interfaces/tela')

const localizarExecutarAcao = async (id, metodoRecursao, callback) => {
    const estoque = (await Repositorio.listar()).find((estoque) => estoque.id == id);
    
    if (!estoque) {
        await Tela.mensagemPor('Id não encontrado', 2);
        const opcao = await Pergunta.perguntar('0 - para sair \n 1 - Tentar novamente: ');

        if (opcao == '0') {
            Tela.limpar();
            callback();
            return;
        }

        return await metodoRecursao();
    }

    await callback(estoque);
}

const estoqueServicos = {
    cadastrarEstoque: async () => {
        const nome = await Pergunta.perguntar('Digite o nome do Produto: ');
        const descricao = await Pergunta.perguntar('Digite a Descrição do Produto: ');
        const price = await Pergunta.perguntar(`Digite o preço do ${nome}: `);

        const estoque = {
            id: Date.now(), // Criando um ID único baseado no timestamp
            nome,
            descricao,
            price
        };

        await Repositorio.cadastrar(estoque);
        await Tela.mensagemPor(`${nome} cadastrado com sucesso`, 2);
    },

    listarEstoque: async () => {
        Tela.limpar();
        console.log('====== Produtos Cadastrados =======');
        
        const estoques = await Repositorio.listar();
        if (estoques.length === 0) {
            console.log('Nenhum produto cadastrado.');
        } else {
            for (const estoque of estoques) {
                console.log(`
                    Id: ${estoque.id}
                    Nome: ${estoque.nome}
                    Descrição: ${estoque.descricao}
                    Preço: ${estoque.price}
                `);
            }
        }

        await Pergunta.perguntar('Digite ENTER para sair');
        Tela.limpar();
    },

    excluirProduto: async () => {
        Tela.limpar();
        const id = await Pergunta.perguntar("Digite o id do Produto: ");
        
        await localizarExecutarAcao(id, estoqueServicos.excluirProduto, async (estoque) => {
            if (!estoque) return;

            await Repositorio.excluir(estoque.id);
            await Tela.mensagemPor(`"${estoque.nome}" excluído com sucesso`, 3);
        });
    }
};

module.exports = estoqueServicos;
