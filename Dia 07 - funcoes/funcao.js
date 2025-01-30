let x = 1
let y = 2

const resultado = (x + y) * x
console.log(resultado)

// funcções d entrda e retorno
function calculoExpressao(p1,p2){
    return(p1+p2) * p1 /p2
}

console.log(calculoExpressao(1,2))
console.log(calculoExpressao(5,2))

console.log('\n==========================')
// funcoes sem retorno void
function calculoExpressaovoid(p1,p2){
    console.log((p1 + p2) * p1)
}
console.log(calculoExpressaovoid)