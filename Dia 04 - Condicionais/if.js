const readline = require('readline')
// const valor = 10;

// if(valor > 5) {
//     console.log('O Valor é maior que 5')
// }

// Tipos de comparação
/*
== -> Estou comparando valor
=== -> Estou comparando tipo e valor
> -> Estou comparando se um menor que o outro
< --> Estou comparando se um maior que o outro
>= --> Esotu comparando se um maior ou igual ao outro
<= --> Estou comparando se um menor ou igual ao outro



*/


const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question('Digite o sabor da pizza: ', (resposta) => {

    console.log(`Você digitou: ${resposta}`);


    deliveryPizza(resposta);

    rl.close();
});

const deliveryPizza = (pizza) => {
    if (pizza === 'Calabresa') {
        console.log('A pizza Calabresa estava uma delícia!');
    } else if (pizza === 'Mussarela') {
        console.log('Huuummm, esta pizza com vinho é excelente!');
    } else {
        console.log(`Você escolheu a pizza sabor: ${pizza}`);
    }
};


// entrar repositório
// fazer o case


// ir no chat fazer a pergunta
// me de exercicios teoricos e praticos sobre tema acima