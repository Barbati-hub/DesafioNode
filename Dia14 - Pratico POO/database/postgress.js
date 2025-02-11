const { Client } = require('pg')

class PostgresDriver {
    constructor(connectionString){
        this.client = new Client(connectionString)
        this.connectionString = connectionString
    }

    async conectar(){
        try {
            await this.client.connect()

        } catch (err) {
            console.err('Erro ao Conectar'. err)
            throw err
        }
    }

    async executar(sql, params = []) {
        try {
            const result = await this.client.query(sql, params)
            if(sql.trim().toUpperCase().startsWith('SELECT')) {
                return result.rows
            }
            else
            {
                return result.rowCount || result.insertId
            }
        } catch (err) {
            console.err('Erro ao executar query' ,err)
            throw err
        }
    }

    async fechar(){
        try {
            await this.client.end()

        } catch (err) {
            console.err('Erro ao fechar a conexao', err)
        }
    }
}

module.exports = PostgresDriver