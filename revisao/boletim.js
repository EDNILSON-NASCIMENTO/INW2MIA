const leia = require("prompt-sync")()

let alunos = ["","","",""]
let notas = [0,0,0,0]
let situacao = ""

for(let x=0; x<alunos.length; x++){
    alunos[x] = leia("Digite o nome do aluno(a) : ")
    notas[x] = parseInt(leia("Digite a nota : "))
}

console.log("BOLETIM")
console.log("NOME\tNOTA\tSITUAÇÃO")
for(let x=0; x<alunos.length; x++){
    if(notas[x]<5){
        situacao = 'REC'
    } 
    else {
        situacao = 'APROVADO'
    }
    console.log(alunos[x]+'\t'+notas[x]+situacao)
}

