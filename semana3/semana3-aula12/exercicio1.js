const respostaDoUsuario = prompt("digite o numero que voce quer testar")
const numero = Number(respotaDoUsuario)

if(numero % 2 ===0) {
    console.log("Passou no teste")

  } else {
        console.log("Não passou no testo.")
}


/* O codigo recebe um numero e o transforma em number depois ele usa uma condição que
"se" o resto da divisão por 2 dele for 0, ele vai imprimir "passou no teste", se não
"não passou no teste" sera imprimido.  O programa serve para verificar se um numero é par
ou não*/