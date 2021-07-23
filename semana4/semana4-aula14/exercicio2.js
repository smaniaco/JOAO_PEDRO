let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"]

const outraFuncao = function(array){
    for (let i = 0; i < 2; 1++){
        console.log(array[i])
    }
}

outraFuncao(arrayDeNomes)


/* a. Darvas
Caio
João
b. Iria imprimir 2 e depois dar erro pois a array não teria indice [2]  */