const Tela = {
    limpar: () => {
        console.clear()
        process.stdout.write('\x1B[2J\x1B[0f'); 
    },

    esperar: (segundos) => {
        return new Promise(resolve => setTimeout(resolve, segundos * 1000))
    },

    mensagemPor: async (mensagem, segundos) => {
        Tela.limpar()
        console.log(mensagem)
        await Tela.esperar(segundos)
        Tela.limpar()
    }
}


module.exports = Tela;