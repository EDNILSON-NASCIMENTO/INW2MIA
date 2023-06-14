//escreva na tela numeros de 1 a 100
//só mostra os impares
//multiplos de 3
//mostra ao final a soma destes numeros

let total = 0
for (let x=1; x<=100; x++){
    /*
    if ((x%2)==1){
        if((x%3)==0){
            console.log(x)
        }
    }
    */
    if ((x%2)==1 && (x%3)==0){
        console.log(x)
        //total = total + x
        total += x
    }
}
console.log("O total é "+total)

