const readline = require('readline')
const valor = 10;

if(valor > 5) {
    console.log('O Valor é maior que 5')
}

// Tipos de comparação
/*
== -> Estou comparando valor
=== -> Estou comparando tipo e valor
> -> Estou comparando se um menor que o outro
< --> Estou comparando se um maior que o outro
>= --> Esotu comparando se um maior ou igual ao outro
<= --> Estou comparando se um menor ou igual ao outro



*/



// instancia
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// metodo e função de retorno
rl.question('Digite algo: ', (resposta) => {
    // Exibe a resposta no terminal
    console.log(`Você Digitou ${resposta}`)


    // Encerra a interface de leitura
    rl.close();
})