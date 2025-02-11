//  O que é classe Promisse
//  Uma promessa de entrega

function login(login, senha) {
    return new Promise((resolve, reject) => {
        if (login == 'Douglas' && senha == '123123') {

            setTimeout(() => {
                resolve({
                    id: 1,
                    nome: 'Douglas',
                    token: '123kjh123iou12398sdf-0982349-085432'
                })

            }, 4000)
            return


        }
        setTimeout(() => {
            reject("Usuário Inválido")

        }, 2000)
        return
    })
}

function usuarioLogadoTime(usuario, time){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(
                `${usuario.nome} levou o tempo de: ${time}`
               )
        }, 3000)
    })
}

// codigo haduken
// login('Douglas', '123123').then((usuario) =>{
//     usuarioLogadoTime(usuario, '10 segundos').then((retorno)=> {
//         console.log(retorno )
//     })
// })


const executar  = async () => {
    const usuario = await login('Douglas', '123123')
const retorno = await usuarioLogadoTime(usuario, '10 segundos ')
console.log(retorno)
}

executar()