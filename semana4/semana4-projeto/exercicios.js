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
  console.log(array)
  let primeiroMaior = undefined
  let segundoMaior = undefined
  let primeiroMenor = undefined
  let segundoMenor = undefined
  
  for (num of array){
    if (primeiroMaior === undefined){
    
      primeiroMaior = num
      segundoMaior = num

    }
    else if (num > primeiroMaior){
      exPrimeiro = primeiroMaior
      primeiroMaior= num
      if (segundoMaior < exPrimeiro){
        segundoMaior = exPrimeiro
      }
   
    } 
    else if (num < primeiroMaior && num > segundoMaior ){
      segundoMaior = num
    }
  
    
  }
  /*menor*/
  for (num of array){
    if (primeiroMenor === undefined){
    
      primeiroMenor = num

    }
    else if (num < primeiroMenor ) {
       
      segundoMenor = primeiroMenor
      primeiroMenor = num

    }
    else if (segundoMenor === undefined){
      segundoMenor = num
    }
    else if (num < segundoMenor){
      segundoMenor = num
    }
    else {
      console.log(num)
    }

    
  }

  return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let  arrayN = [...array]
  let  arrayT = []
  const tamanho = arrayN.length
  
  let menor = undefined
  
  for (let i = 0; i < tamanho ; i++){
   
    let  it = 0
    let menorI = 0
    let menor = undefined
 
    for (num of arrayN){
      
      if (menor === undefined){
        menor = num
        menorI = it

      }
      else if (num < menor) {
        menor = num
        menorI = it
      }
      
      it++
      
      

  
    
   
    }
    arrayT.push(menor)
    arrayN.splice(menorI,1)
    

 
  }
  return arrayT
}


// EXERCÍCIO 12
function filmeFavorito() {
  let objeto = {
    nome : "O Diabo Veste Prada",
    ano : 2006,
    diretor : "David Frankel",
    atores : ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return objeto
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  objeto = filmeFavorito()
  let atores = ""
  for (ator of objeto.atores){
    if (ator !== objeto.atores[objeto.atores.length - 1]) {
     atores += `${ator}, `}
    else {
     atores += `${ator}`
    }
  }
  return `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  objeto = {
    largura: lado1 ,
    altura: lado2 ,
    perimetro: 2*(lado1+lado2),
    area: lado1 * lado2 
  }
  return objeto
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  objeto = {
    nome: "ANÔNIMO",
    idade: pessoa.idade ,
    email:  pessoa.email,
    endereco: pessoa.endereco
  }
  return objeto

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  arrayN = []
  
  for ( pessoa of arrayDePessoas){
    if (pessoa.idade >= 18){
      arrayN.push(pessoa)
    }  
  }

  return arrayN
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  arrayN = []
  
  for ( pessoa of arrayDePessoas){
    if (pessoa.idade < 18){
      arrayN.push(pessoa)
    }  
  }
  console.log(arrayN)
  return arrayN

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  arrayN = []
  
  for (num of array){
    arrayN.push(num * 2)
  }
  console.log(arrayN * 2)
  return arrayN

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  arrayN = []
  
  for (num of array){
    arrayN.push(String(num * 2))
  }
  console.log(arrayN * 2)
  return arrayN

}

// EXERCÍCIO 17C
function verificaParidade(array) {
  arrayN = []
  
  for (num of array){
    if (num % 2 === 0){
      arrayN.push(`${num} é par`)
    }
    else{
      arrayN.push(`${num} é ímpar`)

    }
  }
  console.log(arrayN * 2)
  return arrayN

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  arrayN = []
  for (pessoa of pessoas){
    if ((14 < pessoa.idade && pessoa.idade < 60 ) && pessoa.altura > 1.5){
      arrayN.push(pessoa)
    } 
  }
  return arrayN
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  arrayN = []
  for (pessoa of pessoas){
    if ((14 >= pessoa.idade || pessoa.idade > 60 ) || pessoa.altura < 1.5){
      arrayN.push(pessoa)
    } 
  }
  return arrayN
}



// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

  consultasNome.sort((a, b)=>{
  if(a.nome < b.nome){
    return -1;
  } else{
    return true;
  }
  })    
  return consultasNome
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

  for (pessoa of consultasData){

    
    pessoa.dataDaConsulta = pessoa.dataDaConsulta.split("/")
    pessoa.dataDaConsulta = `${pessoa.dataDaConsulta[2]}-${pessoa.dataDaConsulta[1]}-${pessoa.dataDaConsulta[0]}`
  
  }
  
  consultasData.sort((a, b)=>{
    if(Date.parse(a.dataDaConsulta) < Date.parse(b.dataDaConsulta)){
      return -1;
    } else{
      return true;
    }
    })
    
    for (pessoa of consultasData){
     
    
    
    pessoa.dataDaConsulta = pessoa.dataDaConsulta.split("-")
    pessoa.dataDaConsulta = `${pessoa.dataDaConsulta[2]}/${pessoa.dataDaConsulta[1]}/${pessoa.dataDaConsulta[0]}`
      
    }
    return consultasData
  }
 
  



// EXERCÍCIO 20
function calculaSaldo(contas) {
  
  for (conta of contas){
    for (compra of conta.compras){
      conta.saldoTotal -= compra
    }
  }
  return contas
}
