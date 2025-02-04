const Tela = require('../interfaces/tela')
const Repositorio = require('../repositorios/repositorio')
const Pergunta = require('../interfaces/pergunta')

const localizarExecutarAcao = async (id, metodoRecursao, callback) => {
    const estoques = await Repositorio.listar() // Aguarda a Promise resolver
    const estoque = estoques.find((estoque) => estoque.id == id) // Agora pode usar find()

    if (!estoque) {
        await Tela.mensagem('Id não localizado', 3)
        const opcao = await Pergunta.perguntar("0 - Para sair \n 1 - Tentar novamente")
        if (opcao == '0') {
            Tela.limpar()
            callback()
        }
        return await metodoRecursao()
    }
    return callback(estoque)
}

const EstoqueServico = {

    Cadastrar: async () => {
        const nomeProduto = await Pergunta.perguntar('Digite o nome do Produto: ')
        const marca = await Pergunta.perguntar('Digite a Marca do Produto')
        const preco = await Pergunta.perguntar('Digite o valor do Produto: ')
        const id = new Date().getTime()
        
        const estoque = {
            id, nomeProduto, marca, preco
        }

        await Repositorio.Cadastrar(estoque)
        await Tela.mensagem(`${nomeProduto} cadastradp com sucesso!`)
    },
    
    listar: async () => {
        Tela.limpar()
console.log('===== Listar Produtos =====')

const estoques = await Repositorio.listar() // Alterado de `estoque` para `estoques`

for (const estoque of estoques) { // Agora está iterando corretamente sobre `estoques`
    console.log(`
        Id: ${estoque.id}
        Produto: ${estoque.nomeProduto}
        Marca: ${estoque.marca}
        Preço: ${estoque.preco}
    `)

    await Pergunta.perguntar('Clique no ENTER para sair')
    Tela.limpar()
}

    },

    excluirProduto: async () => {
        Tela.limpar()
        const id = await Pergunta.perguntar('Digite o Id do Produto')

        await localizarExecutarAcao(id, EstoqueServico.excluirProduto, async (estoque) => {
            if (!estoque) return;

            await EstoqueServico.excluir(estoque.id) // Garante que a função existe
            await Tela.mensagem(`${estoque.nomeProduto} Excluído com sucesso!`)
        })
    },

    excluir: async (id) => { // Certifique-se de que esta função está declarada corretamente
        try {
            const estoques = await Repositorio.listar()
            const index = estoques.findIndex((e) => e.id == id)

            if (index !== -1) {
                estoques.splice(index, 1)
                await fs.writeFile(filePath, JSON.stringify(estoques, null, 2), 'utf8')
            } else {
                console.log(`Produto com ID ${id} não encontrado.`)
            }
        } catch (error) {
            console.error('Erro ao excluir o produto:', error)
        }
    }


}

module.exports = EstoqueServico