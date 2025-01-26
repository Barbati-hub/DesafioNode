// Criando uma variável global (não recomendada)
nome = "é do tipo global"; // Variável global sem 'var', 'let' ou 'const'
var nome3 = 'Douglas';  // Usando 'var' - escopo de função ou global

console.log(nome);  // Imprime "é do tipo global" - variável global

// 'let' tem escopo de bloco, ou seja, a variável fica restrita ao bloco onde é definida
let nome1 = 'Variavel de escopo não tem como fazer 2 iguais';
console.log(nome1); // Imprime "Variavel de escopo não tem como fazer 2 iguais"

// Função que tem uma variável com escopo local (somente dentro da função)
const teste = () => {
    let nome = 'Douglas'; // A variável 'nome' só existe dentro da função 'teste'
    console.log(nome);  // Imprime "Douglas" dentro da função
}
teste(); // Chama a função que imprime o nome dentro dela

// 'const' cria uma variável que não pode ser reatribuída
const nome2 = 'Douglas';  // 'nome2' não pode ser reatribuído após esta declaração
console.log(nome2); // Imprime "Douglas"
