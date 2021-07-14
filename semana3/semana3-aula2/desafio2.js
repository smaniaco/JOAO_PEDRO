kwatt = 0.05 * Number(prompt("Digite a quantidade de quilowatts por hora"))
console.log(kwatt)
discount = Number(prompt("desconto em porcentagem:"))
console.log(`${kwatt - kwatt/100*discount}`)