const leia = require("prompt-sync")()
let auxmat
let indice = -1
let matricula = ["M01", "M02", "M03", "M04"]
let nome = ["Paulo","Maria","Pedro","Marcos"]
let nota = [0,0,0,0]

//LISTA OS DADOS NA TELA

console.log("MATRICULA\tNOME\tNOTA")

for (let i = 0; i < matricula.length; i++) {
    console.log(matricula[i]+"\t\t"+nome[i].toUpperCase()+"\t"+nota[i])
}

auxmat=leia('Digite a Matrícula do Aluno: ').toUpperCase()
console.log(auxmat)

for (let i = 0; i < matricula.length; i++) {
    if ( auxmat==matricula[i]){
        indice=i
    }
}
if (indice!=-1){
    console.log("O aluno escolhido foi: "+nome[indice])
    nota[indice]=leia("Digite a nota do aluno entre 1 e 10: ")
    if(nota[indice]<6){
        console.log(nome[indice]+" sua nota é "+nota[indice]+". Você está de rec.")
    }
    else{
        console.log(nome[indice]+" sua nota é "+nota[indice]+". Você está aprovado(a).")
    }
}
//CADASTRA UMA NOTA DE ALUNO ESPECIFICO




