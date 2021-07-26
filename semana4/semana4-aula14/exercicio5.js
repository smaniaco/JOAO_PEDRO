/*a. */
const func= (num1, num2) => {
    return num1+num2

}


console.log(func(1,2))

const func2 = (num1, num2) => {
    if (num1 >= num2){
        console.log("é maior ou igual")
    }
    else {
        console.log("Não é maior ou igual")
    }
}

func2(3,3)

const func3 = (string) => {
    for (let i = 0;i<10; i++) {
        console.log(string)
    }
}

func3('teste')