const leia = require("prompt-sync")()

//variaveis
let cod = ["C1","C2","C3"]
let descricao = ["Calça","Camisa","Saia"]
let valor = [100.00, 60.50, 200.25]
let estoque= [0,0,0]
let movimento = [0,0,0]
let opcaoMenuPrincipal=""
let opcaoSubMenu=""
let auxCod=""
let posicao = -1

//programa principal
while(opcaoMenuPrincipal != "2"){
    console.log("LOJA XXX\n\n")
    console.log("MENU PRINCIPAL")    
    console.log("1 - Opções")
    console.log("2 - Sair")
    opcaoMenuPrincipal = leia("Digite o numero da sua opção : ")
    if (opcaoMenuPrincipal =="1"){
        opcaoSubMenu=""
        //SUB-MENU REFERENTE AS OPÇÕES
        while(opcaoSubMenu != "6"){
            console.log("SUB-MENU")
            console.log("1 - MOSTRAR OS REGISTROS")
            console.log("2 - ALTERAR OS REGISTROS")
            console.log("3 - CADASTRAR OS REGISTROS")
            console.log("4 - EXCLUIR UM REGISTRO")
            console.log("5 - CARRINHO DE COMPRAS")
            console.log("6 - SAIR")
            opcaoSubMenu = leia("Digite o numero da sua opção : ")
            if(opcaoSubMenu=="1"){
                console.log("COD\tDESCRICAO\tVALOR\tESTOQUE")
                for(let x = 0; x<cod.length ; x++){
                    console.log(cod[x]+"\t"+descricao[x]+"\t\t"+valor[x]+"\t"+estoque[x])
                }
            }
            else if(opcaoSubMenu=="2"){
                auxCod = leia("Digite o codigo do produto que deseja alterar : ").toUpperCase()
                for(let x =0; x<cod.length; x++){
                    if(auxCod==cod[x]){
                        posicao = x
                    }                    
                }
                if(posicao == -1){
                    console.log("Produto não encontrado...")
                }
                else {
                    cod[posicao]=leia("Digite o novo codigo : ")
                    descricao[posicao]=leia("Digite a nova descrição: ");
                    valor[posicao]=parseFloat(leia("Digite o novo preço: "));
                    estoque[posicao]=parseInt(leia("Digite o novo preço : "))
                }
                
            }
            
        }
        
        
    }
}

//fim de programa
console.log("Até breve")