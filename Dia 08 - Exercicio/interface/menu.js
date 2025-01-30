const perguntar = require('./perguntar')
const menu = require('./perguntar')
const tarefa = []



const menu = () => {
    let sair = 0
    while(sair == 0){
        console.log(`
            1 - Cadastrar Tarefa
            2 - Listar Tarefa
            3 - Excluir Tarefa
            4 - Alterar Status Tarefa
            5 - Sair
            `)
    }
   
}

let opcao = await perguntar('Digite uma Opção: ')

switch(opcao){
    case '1':
        console.log("\nCadastre uma nova tarefa")
        menu()
        break
    case '2':
        console.log('Listar Tarefa')
        menu()
        break
    case '3':
        console.log('Excluir Tarefa')
        menu()
        break
    case '4':
        console.log('Alterar Status Tarefa')
        menu()
        break
    case '5':
        console.log('Saindo...')
        menu()
    default:
        console.log('Opção inválida')
        menu()
}

module.exports = menu;



