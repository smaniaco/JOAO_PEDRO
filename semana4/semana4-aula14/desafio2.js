const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

/*a. */

const xisDois = (array) => {
    array2 = []
    for (x of array){
        array2.push(x*2)
    }
    return array2
}

/*b. */

const max = (array) =>{
    let maior
    for (x of array){
     
        if (x === array[0]){
            maior = x
        }
        if (x > maior){
            maior = x
        }
    }
    return maior
}

/*c. */
const maiorI = (array) => {
    let indice = 0
    for (let i = 0; i < array.length -1; i++){
    
        if (array[i] > array[indice]){
           
            indice = i
        }

    }

    return indice

}

/*d. */

const reverse = (array) =>{
    invertido = []
    for (let i = 1; i < array.length ; i++){
        invertido.push(array[array.length-i])
    }
    invertido.push(array[0])
    return invertido
}

console.log(xisDois(numeros))