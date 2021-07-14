const first = (77 - 32)*5/9 +273.15
const second = (80)*9/5 +32
const third = `${30*9/5+32}ºF ${((30*9/5+32) - 32)*5/9 + 273.15}K`
const value = Number(prompt("Digite um valor em celsius"))*9/5+32
const fourth =  `${value}ºF ${(value - 32)*5/9 + 273.15}K`
console.log(first)
console.log(second)
console.log(third)
console.log(fourth)
