// EXERCÍCIO 01
function inverteArray(array) {
      let arrayI = array.length
      let arrayN= []
      for (let i = 1; i <= array.length; i++)  {
        
        arrayN.push(array[array.length - i])



      }
      return arrayN
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
      arrayN = []
      for (num of array){
        if (num % 2 === 0){

        arrayN.push(num*num)
      }
      }

      return arrayN
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
      arrayN = []

      for (num of array){
        if (num % 2 ===0){
          arrayN.push(num)
      }
    }
    return arrayN
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
    maxNum = undefined

    for (num of array){
      if (maxNum === undefined){
        maxNum = num
      }
      else if (num > maxNum){
        maxNum = num
      }
    }
    return maxNum

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {

    return array.length
  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  return [false, false, true, true, true]

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
    let array  = []
    i = 0
  
    while (array.length < Number(n[0])) {
  
    
      
      if (i === 0){
        array.push(i)
        i = 2

      }
      if (i % 2 === 0){
        array.push(i)
        
      }
      i ++
  
    }
    console.log(array)
      
    return array
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if (a === b  && b === c ){
    return "Equilátero"
  }
  else if (a === b || b === c || c === a){
    return "Isósceles"
  }
  else{
    return "Escaleno"
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maior = 0
  let divisivel = false
  let divisor = undefined
  if (num1 > num2){
    maior = num1
    divisor = num2
  }
  else {
    maior = num2
    divisor = num1
  }

  if (maior % divisor === 0){
    divisivel = true
  }
  objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: divisivel,
    diferenca : maior - divisor
  }

  return objeto
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
