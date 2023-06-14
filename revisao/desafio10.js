//fazer um programa que receba a digitação de numeros do usuario
//até que o usuário digite um numero negativo
//ao final mostra
//a soma dos numeros
//a qtde de numeros lidos
//o maior numero digitado

const leia = require("prompt-sync")()
let numero = 0
let total = 0
let maior = 0
let contador = -1

while (numero>= 0){
    total += numero
    if(numero>maior){
        maior = numero
    }
    contador++
    numero = parseInt(leia("Digite um numero : "))
       
}
console.log("O total é "+total)
console.log("Maior numero : "+maior)
console.log("QTDE : "+contador)
console.log("Fim de programa!!!")


