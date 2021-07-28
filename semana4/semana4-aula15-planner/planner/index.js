const criaTarefa = () => {
    let tarefa = document.getElementById("tarefa")
    let dias = document.getElementById("dias-semana")
    let timeT = document.getElementById("timeTask")

    if (tarefa.value === "" || dias.value === "" || timeT.value === ""){
        alert("TAREFA OU DIA EM BRANCO, POR FAVOR NAO DEIXE CAMPOS EM BRANCO")
    } else {


    const dayDiv = document.getElementById(`${dias.value}`)
    dayDiv.innerHTML += `<p onclick="(this).style.textDecoration='line-through'">${tarefa.value}</p>
    <p>${timeT.value}</p>`
    }
    tarefa.value = ""
    dias.value = ""
    
    
}




const limpa = () => {
    let sect = document.getElementsByClassName("texto")
    for (sem of sect){
        sem.innerHTML = ""}

   
    
}


let horas = document.getElementById("timeTask")
for (i = 1 ; i<= 24;i++){
    horas.innerHTML += `<option >${i}H</option>`
}

