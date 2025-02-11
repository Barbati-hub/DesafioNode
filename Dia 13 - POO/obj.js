class Pessoa {
    constructor(){
        this.id = 0
        this.nome = ''
        this.telefone = ''
        this.endereco = ''
        this.notas = []
    }

    media(){
        return this.notas.reduce((acumulador, numero) => acumulador + numero, 0) / this.notas.length()
    }

    situacao(){
        if(this.media() >= 7){
            return 'Aprovado'
        } 
        else if (this.media() >= 5){
            return 'Recuperação'
        }
        else{
            return 'Reprovado'
        }
    }
}