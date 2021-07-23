const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

/* a. */
const tam = (array) =>  {
    return array.length
}

const par = (num) =>{
   let test = false
   if (num % 2 ===0)
        test = true
   
   
    return test
}

const parQuantidade = (array) =>{
    let par = 0
    for (let x of array){

        if (x % 2 === 0){
            par++
        }

    }
    return par
} 

const parQuantidade2 = (array) =>{
    let par = 0
    for (let x of array){

        if (par(x)){
            par++
        }

    }
    return par
} 





