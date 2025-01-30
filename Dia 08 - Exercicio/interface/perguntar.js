const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const perguntar = (mensagem) =>{

    return new Promise((resolve) =>{
        rl.question(mensagem, (resposta) =>{
            resolve(resposta)
        })
    })
}

module.exports = perguntar