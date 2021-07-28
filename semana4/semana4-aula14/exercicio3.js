const metodo = (array) => {
    let arrayFinal = [];

    for (let x of array){
        if (x % 2 === 0){
            arrayFinal.push(x * x)
        }
    }
    return arrayFinal
}

/* Faz um array novo com somente os numeros pares ao quadrado da array original um nome melhor seria paresQuadrado */