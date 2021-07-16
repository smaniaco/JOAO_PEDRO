const num = 4
console.log(num)
A = prompt('AAAAAAAAAAA')
let won = 0
let attempts = 0
while (won === 0){

    attempts++
    guess = Number(prompt("Tente adivinhar o numero: "))
    if (guess < num){
        console.log("Errou, é maior")
    } else{
        if (guess > num){
            console.log("Errou, é menor")
        }
        
    }

    if (guess === num){
        won = 1

    }   
}

console.log(`acertou, foram necessárias ${attempts} tentativas`)