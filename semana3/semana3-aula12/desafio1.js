const genre = prompt("Qual o seu genero de filme desejado?").toLowerCase()

const price = Number(prompt("Qual o preço do ingresso que você procura?"))

if (genre === "fantasia" && price < 15) {
    const snack = prompt("Digite um snack")
    console.log(`Bom filme! com ${snack} `)

} else{
    console.log("Escolha outro filme :(")
}

