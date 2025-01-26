// Cadastro de Nomes

// Crie um programa que permita cadastrar nomes em um array.
// Adicione uma opção para listar todos os nomes cadastrados.
// Inclua a funcionalidade de remover um nome especificado pelo usuário.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const nomes = [];

function menu() {
    console.log('\n ==== MENU ====');
    console.log('1 - Cadastrar Nome');
    console.log('2 - Listar Nome Cadastrado');
    console.log('3 - Remover Nome');
    console.log('4 - Sair');

    rl.question('Escolha uma opção: ', (opcao) => {
        switch(opcao) {
            case '1':
                rl.question('Digite o seu nome: ', (nome) => {
                    nomes.push(nome);
                    console.log(`${nome} Cadastrado com Sucesso!`);
                    menu();  
                });
                break;

            case '2':
                console.log('\n === Lista de Nomes ===');
                if (nomes.length === 0) {
                    console.log('Lista de nomes vazia.');
                } else {
                    nomes.forEach((nome, index) => {
                        console.log(`${index + 1} - ${nome}`);
                    });
                }
                menu();  
                break;

            case '3':
                if (nomes.length === 0) {
                    console.log('Lista de Nomes vazia.');
                    menu();
                } else {
                    rl.question('Digite o nome que deseja remover: ', (nome) => {
                        const index = nomes.indexOf(nome);
                        if (index !== -1) {
                            nomes.splice(index, 1);
                            console.log(`${nome} foi removido da lista.`);
                        } else {
                            console.log(`O nome ${nome} não foi encontrado na lista.`);
                        }
                        menu();  
                    });
                }
                break;

            case '4':
                console.log('Saindo...');
                rl.close();
                break;

            default:
                console.log('Opção inválida. Tente novamente.');
                menu();  
        }
    });
}


menu();
