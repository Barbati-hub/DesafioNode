// Array
// const frutas = ['Maça', 'Banana', 'Laranja']

// console.log(frutas[0])
// console.log(frutas[1])


// frutas[1] = 'Uva'
// console.log(frutas)


// frutas.push('Melancia')
// console.log(frutas)

const readline = require('readline')

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
})

const frutas = []

function menu(){
    
    console.log('\n === MENU ===');
    console.log('1 - Adicionar Fruta');
    console.log('2 - Listar Fruta');
    console.log('3 - Sair');
    iniciarLoop();
}
function iniciarLoop(){

    rl.question("Escolha uma opção: ", (opcao) =>{
        switch (opcao) {
            case '1':
                rl.question('Digite o nome da fruta: ',  fruta =>{
                    frutas.push(fruta);
                    console.log(`${fruta} foi adicionada a lista`)
                    iniciarLoop();
                    menu();
       
                })
                
                break

            case '2':
                console.log('\n === Lista de Frutas ===');
                if (frutas.length === 0) {
                    console.log('A lista está vazia.');
                } else {
                    frutas.forEach((fruta, index) => {
                        console.log(`${index + 1}. ${fruta}`);
                    });
                }
                    iniciarLoop();
                    menu();
             


                break;
            case '3':
                console.log('Encerrando o programa. Até logo!');
                rl.close();
                break;
        }
    })
}
menu();
    iniciarLoop()
