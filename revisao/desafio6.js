const leia = require("prompt-sync")()

let D 
let x1 = parseInt(leia("Digita o valor de x1 :"))
let y1 = parseInt(leia("Digita o valor de y1 :"))
let x2 = parseInt(leia("Digita o valor de x2 :"))
let y2 = parseInt(leia("Digita o valor de y2 :"))

D =Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))

console.log("Resultado "+D)


