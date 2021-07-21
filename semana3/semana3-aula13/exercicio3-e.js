const array = [1,2,3,4,5,6,7,8,9,10]
let maxVal
let minVal
i = 0
for (let num of array){
    if (i === 0){
        maxVal = num
        minVal = num
        ++i
    }
    if (num > maxVal){
        maxVal= num
    } else {
        if (num < minVal){
            minVal = num
        }
    } 
}

console.log (`o maior item é ${maxVal} e o menor ${minVal}`)