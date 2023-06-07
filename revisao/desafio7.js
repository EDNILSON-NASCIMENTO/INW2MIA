const leia = require("prompt-sync")()

let aluno = leia("Digite o nome do aluno : ")
let nota = parseInt(leia("Digite a nota do aluno [1-10] : "))
let tipo = leia("Digite o aluno, a aluna ou e alune :")

if(tipo == "o"){
    if(nota <= 5){
        console.log("Oi aluno "+aluno+" ainda não, recuperação")
    }
    else {
        console.log("Oi aluno "+aluno+" otimo, continue assim")
    }
}

if(tipo == "e"){
    if(nota <= 5){
        console.log("Oi alune "+aluno+" ainda não, recuperação")
    }
    else {
        console.log("Oi alune "+aluno+" otimo, continue assim")
    }
}

if(tipo == "a"){
    if(nota <= 5){
        console.log("Oi aluna "+aluno+" ainda não, recuperação")
    }
    else {
        console.log("Oi aluna "+aluno+" otimo, continue assim")
    }
}



