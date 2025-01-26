const readline = require('readline')

// usado em indeces 
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Escolha uma opção:\n1 - Calabresa\n2 - Bacon");


rl.question("Digite uma opção: ", (input) =>{

    const pizza = parseInt(input);

    switch (pizza){
        case 1:
            console.log("Calabresa")
            break;
        case 2:
            console.log('Bacon')
            break;
        default:
                console.log("Opção inválida! Por favor, escolha 1 ou 2.");
    }
    rl.close()
})
