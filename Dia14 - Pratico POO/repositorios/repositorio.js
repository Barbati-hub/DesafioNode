const Database = require('../database/database')
const Postgress = require('../database/postgress')
const driver = new Postgress()


const EstoqueRepo = {
    cadastrar: async (estoque) => {
        await new Database(driver).executar(
            'insert into estoques(produto, descricao, price) values( ?, ?, ?)',
            [estoque.nome, estoque.descricao, estoque.price]
        )
    },

    listar: async () => {
        return await new Database(driver).executar(
            'select * from esoques'
        )
    },

    excluir: async(id) =>{
        return await new Database(driver).executar(
            'delete from estoques where id = ?', [id]
        )
    },

}


module.exports = EstoqueRepo