class Pessoa{
    constructor(cpf, nome, anoNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento
    }

    mostraIdade(){
        console.log("Idade : "+(2023-this.anoNascimento))
    }
}

//programa principal

const leia = require("prompt-sync")()

let p1 = new Pessoa("000.111.222-33","MARCOS",2006)
let p2 = new Pessoa("444.555.666-77","MARIA",2007)

console.log(p1)
p1.mostraIdade()

