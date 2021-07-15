const numero = Number(prompt("Digie o primeiro numero."))

if(numero > 0) {
    console.log("Esse numero passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


/* a. cria uma variavel constante que recebe uma string inserida pela usuario e a transforma
em number
b.se digitasse 10 seria "Essa mensagem é secreta"
    se não, a mensagem seria impossivel de acontecer
    pois a variavel "mensagem"  não existiria
    c. Sim, pois a variavel está fora do escopo global
    quando uma variavel é criada dentro de um if
    ela assume somente o escopo dentro daquele if */