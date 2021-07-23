function func(){
    console.log("Eu sou joao, tenho 21 anos, moro em São Paulo e sou estudante")
}

function func2(name, age, address, bool = false){
    let stu = "não sou"
    if (bool){
        stu = "sou"
    }

    return `Eu sou ${name}, tenho ${age} anos, moro em ${address} e ${stu} estudante`


}


console.log(func2("joao", "21", "sao paulo", true))