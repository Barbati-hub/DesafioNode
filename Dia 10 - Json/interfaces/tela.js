const Tela = {
    limpar: () => {
        console.log();
        process.stdout.write('\x1B[2J\x1B[0f')
    },

    esperar: (segundos) => {
        return new Promise(resolve => setTimeout(resolve, segundos * 1000)) // Correção: resolve
    },

    mensagem: async (mensagem, segundos) => { // Correção: menasgem -> mensagem
        Tela.limpar()
        console.log(mensagem) // Agora o nome do parâmetro está correto
        await Tela.esperar(segundos)
        Tela.limpar()
    }
}

module.exports = Tela;
