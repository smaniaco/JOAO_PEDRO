const array = [1,2,3,4,5,6,7,8,9,10]
let  arraye = []


for (let i of array){
    if (i % 2 === 0){
        arraye.push(i)
    }
}

console.log(arraye)