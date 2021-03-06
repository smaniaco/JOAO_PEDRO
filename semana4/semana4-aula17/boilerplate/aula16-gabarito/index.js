let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
   
    let tabela =  " <table><tr><th>VALOR</th><th>TIPO</th><th>DESCRIÇÃO</th></tr>"
    despesas.forEach ((despesa, index, array) => {
        tabela += `<tr><td>R$${despesa.valor}</td><td>${despesa.tipo}</td><td>${despesa.descricao}</td></tr>`
       
     })

     
     tabela += "</table>"
     divDespesas.innerHTML += tabela
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    arrDespesas.forEach((despesa, index, array)=>{
        gastoTotal +=despesa.valor
        switch(despesa.tipo){

            case 'alimentação':
                gastoAlimentacao += Number(despesa.valor)
                break

            case 'utilidades':
                gastoUtilidades += Number(despesa.valor)
                break

            case 'viagem':
                gastoViagem += Number(despesa.valor)
                break

        }
    })

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)
    
    console.log(tipoFiltro)
    // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    let despesasFiltradas = arrDespesas.filter((despesa, index, array)=>{
        if ((despesa.tipo === tipoFiltro || tipoFiltro === "todos" ) && ((despesa.valor >=valorMin || valorMin === 0 ) && (despesa.valor <= valorMax || valorMax === 0 ))){
            return true
        }
        else{
            return false
        }
    })
    
    imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}