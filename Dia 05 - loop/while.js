// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let ativo = true

// function exibirMenu(){
//     console.log('\n Escolha uma Opção')
//     console.log('1 - Dizer Olá')
//     console.log('2 - Mostrar a data atual')
//     console.log('3 - Sair')
// }

// function processarEscolha(escolha){
//     switch (escolha) {
//         case "1":
//             console.log('Ola! Tudo bem?')
//             break;
//         case "2":
//             console.log(`a data atual é: ${new Date().toLocaleString()}`)
//             break;
//         case "3":
//             console.log('Encerrando o programa. Até logo!')
//             ativo = false; // Interrompe o loop
//             break;
        
//         default:
//             console.log('Opção inválida. Tente novamente.')

//     }
// }

// function iniciarLoop(){
//     const loop = () => {
//         if(ativo){
//             exibirMenu()
//             rl.question("Digite sua escolha: ", (escolha) => {
//                 processarEscolha(escolha)
//                 loop()
//             })
//         } else {
//             rl.close()
//         }
//     }
//     loop()
// }

// iniciarLoop()


const readline = require('readline');

// Criando interface para leitura de entrada do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ativo = true; // Controla o loop principal

// Função que exibe o menu de opções
function menu() {
  console.log('\nEscolha um Suco:');
  console.log('1 - Morango');
  console.log('2 - Cupuaçu');
  console.log('3 - Goiaba');
  console.log('4 - Acerola');
  console.log('5 - Sair');
}

// Função que processa a escolha do usuário
function escolhaOpcao(opcao) {
  switch (opcao) {
    case '1':
      console.log('Você escolheu Suco de Morango.');
      break;
    case '2':
      console.log('Você escolheu Suco de Cupuaçu.');
      break;
    case '3':
      console.log('Você escolheu Suco de Goiaba.');
      break;
    case '4':
      console.log('Você escolheu Suco de Acerola.');
      break;
    case '5':
      console.log('Saindo do menu. Até logo!');
      ativo = false; // Define `ativo` como falso para sair do loop
      break;
    default:
      console.log('Opção Inválida. Tente Novamente!');
  }
}

// Função principal que inicia o loop
function iniciarLoop() {
  const loop = () => {
    if (ativo) {
      menu(); // Exibe o menu
      rl.question('Digite sua escolha: ', (opcao) => {
        escolhaOpcao(opcao); // Processa a escolha do usuário
        loop(); // Rechama o loop se `ativo` for verdadeiro
      });
    } else {
      rl.close(); // Encerra o `readline` quando `ativo` for falso
    }
  };

  loop(); // Chama o loop inicial
}

// Inicia o programa
iniciarLoop();


