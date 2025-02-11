const { resolve } = require('path');
const readline = require('readline')

const Pergunta = {
    perguntar: (mensagem) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(mensagem + '\n', (resposta) => {
            resolve(resposta)
            rl.close()
        })
    }
}

module.exports = Pergunta