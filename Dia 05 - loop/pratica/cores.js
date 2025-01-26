// Exercícios com Loops
// Menu de Cores
// Crie um menu onde o usuário pode adicionar uma cor,
//  listar todas as cores ou sair.
// Adicione uma funcionalidade para mostrar quantas vezes cada cor foi adicionada.
// Contador de Vogais

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


function contarVogais(texto){
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    const textoLowerCase = texto.textoLowerCase()
    const contador = {a: 0, e: 0, i: 0, o: 0, u: 0}
    
    for (const letra of textoLowerCase) {
        if (vogais.includes(letra)){
            contador[letra] += 1;
        }
    }
    return contador;
}

const cores = []

function menu() {
    console.log('\n -===    MENU    ===- ')
    console.log('1 -- Cadastrar Cores')
    console.log('2 -- Listar Cores Cadastradas')
    console.log('3 -- Quantidade de Cores Cadastradas')
    console.log('4 -- Quantidade de Vogais')
    console.log('5 -- Sair')

    rl.question('Escolha uma opção: ', (opcao) => {
        switch(opcao){
            case '1':
                rl.question('Digite uma cor: ', (cor) => {
                    cores.push(cor)
                    console.log(`${cor} Cadastrdo com Sucesso!`)
                    menu()
                });
                break;

            case '2':
                console.log('\n --====    Cores Cadastradas   ===--');
                if (cores.length === 0){
                    console.log('Lista de Cores Vazia')
                }
                else
                {
                    cores.forEach((cores, index) => {
                        console.log(`${index + 1} - ${cores}`);
                    });
                }
                menu();
                break;
            
            case '3':
                console.log('--===  Quantidade de Vogais  ==--')
                if(cores.length === 0){
                    console.log('Nenhuma cor Cadastrada')
                }
                else
                {
                    const contagem = contarVogais(cores)
                    Object.entries(contagem).forEach(([cor, quantidade]) =>{
                        console.log(`${cor}: ${quantidade} vez(es)`)
                    })
                }
                menu()
                break
        }
    })
}