const kwatt = 0.05 * Number(prompt("Digite a quantidade de quilowatts por hora"))
console.log(kwatt)
const discount = Number(prompt("desconto em porcentagem:"))
console.log(`${kwatt - kwatt/100*discount}`)