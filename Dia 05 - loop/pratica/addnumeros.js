const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const numeros = [];

function menu() {
    console.log('\n --======  MENU ======--');
    console.log('1 -- Digite um número');
    console.log('2 -- Números Cadastrados');
    console.log('3 -- Listar números Crescentes');
    console.log('4 -- Listar números Decrescentes');
    console.log('5 -- Sair');

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                rl.question('Digite um número: ', (numero) => {
                    
                    const numeroConvertido = parseInt(numero, 10);

                    if (isNaN(numeroConvertido)) {
                        console.log('Por favor, digite um número válido!');
                    } else {
                        numeros.push(numeroConvertido);
                        console.log(`${numeroConvertido} - cadastrado com sucesso`);
                    }
                    menu();
                });
                break;
            case '2':
                console.log('\n --======= Números Cadastrados =======--');
                if (numeros.length === 0) {
                    console.log('Nenhum número cadastrado');
                } else {
                    console.log('Ordem Original: ', numeros.join(', '));
                }
                menu();
                break;
            case '3':
                if (numeros.length === 0) {
                    console.log('Nenhum número cadastrado para listar.');
                } else {
                    console.log('Ordem Crescente: ', [...numeros].sort((a, b) => a - b).join(', '));
                }
                menu();
                break;
            case '4':
                if (numeros.length === 0) {
                    console.log('Nenhum número cadastrado para listar.');
                } else {
                    console.log('Ordem Decrescente: ', [...numeros].sort((a, b) => b - a).join(', '));
                }
                menu();
                break;
            case '5':
                console.log('Encerrando...');
                rl.close(); 
                break;
            default:
                console.log('Opção inválida! Escolha uma opção de 1 a 5.');
                menu();
        }
    });
}


menu();
