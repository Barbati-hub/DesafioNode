const fs = require('fs').promises // Usando a versão assíncrona do fs
const filePath = 'database/tarefas.json'

const Repositorio = {
    // Método para cadastrar um novo produto no estoque
    Cadastrar: async (estoque) => {
        try {
            const estoques = await Repositorio.listar()
            estoques.push(estoque) // Adiciona o novo produto

            // Salva no arquivo JSON
            await fs.writeFile(filePath, JSON.stringify(estoques, null, 2), 'utf8')
        } catch (error) {
            console.error('Erro ao salvar o estoque:', error)
        }
    },

    // Método para listar os produtos do estoque
    listar: async () => {
        try {
            // Verifica se o arquivo existe antes de tentar lê-lo
            try {
                await fs.access(filePath)
            } catch {
                return [] // Retorna array vazio se o arquivo não existir
            }
    
            const tarefaJson = await fs.readFile(filePath, 'utf8')
            return tarefaJson.trim() ? JSON.parse(tarefaJson) : [] // Garante que não retorna erro se estiver vazio
        } catch (error) {
            console.error('Erro ao ler o arquivo:', error)
            return []
        }
    },
    

    // Método para excluir um produto do estoque pelo ID
    excluir: async (id) => {
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
    },

    // Método para alterar um produto do estoque pelo ID
    alterar: async (id, novosDados) => {
        try {
            const estoques = await Repositorio.listar()
            const index = estoques.findIndex((e) => e.id == id)

            if (index !== -1) {
                estoques[index] = { ...estoques[index], ...novosDados } // Atualiza os dados do produto
                await fs.writeFile(filePath, JSON.stringify(estoques, null, 2), 'utf8')
            } else {
                console.log(`Produto com ID ${id} não encontrado.`)
            }
        } catch (error) {
            console.error('Erro ao alterar o produto:', error)
        }
    }
}

module.exports = Repositorio
