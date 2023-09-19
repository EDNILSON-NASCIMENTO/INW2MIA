//criação da função normal
function escreveNoConsole(){
    console.log("Primeiro exemplo - função normal")
}

//chama a função para executar
escreveNoConsole();


//variação de função normal ou declarada
const escreveNoConsoleVariacao = function(){
    console.log("Segundo exemplo - variação do modo normal")
}
//chama a função para executar
escreveNoConsoleVariacao()

//arrow function função seta ou flecha
//toda arrow function usar os caracters = junto com > 
const escreveComArrow = ()=>{
    console.log('Terceira - Arrow Function')     //o return é opcional, se não for usado o
}
//chama a função para executar
escreveComArrow()


//arrow function => com parametro
const escreverComArrowParametro = (texto) => {
    console.log(texto); 
}   //se tiver apenas um parâmetro pode ser omitido as chaves {}

//chama a função para executar
escreverComArrowParametro('Quarto exemplo, usando parametro')
escreveComArrow()
escreverComArrowParametro('outro texto')

//funcao arrow que somar dois valores
const somarDois = (numero1, numero2)=>{
    console.log('A soma é '+(numero1+numero2))
}

//executando
console.log('-----------------------------------')
somarDois(10,10)


//variação arrow function sem parentes e sem chave
const varianteArrow = texto => console.log(texto)

//crie uma arrow function chamada parImpar que recebe
//um parametro numerico e informar na saida este numero
//e mais um texto conforme a situação
// [numero], este valor é negativo
// [numero], este valor é neutro
// [numero], este valor é par
// [numero], este valor é impar


