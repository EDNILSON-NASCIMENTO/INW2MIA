const leia = require("prompt-sync")()
// solicite ao usuario um numero inteiro
// faça a raiz quadrada deste numero
let numero
numero = parseInt(leia("Digite um numero : "))

console.log("Raiz quadrada : "+(Math.sqrt(numero)))
console.log("Numero ao cubo : "+(Math.pow(numero,3)))






