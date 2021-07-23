const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual= 0
while (quantidadeAtual < quantidadeTotal){
    let linha = ""
    for (let asteriscos = 0; asteriscos <quantidadeAtual + 1; asteriscos++){
        linha +="0"
    }
    console.log(linha)
    quantidadeAtual++
}
/*
0 
00
000
0000
00000*/