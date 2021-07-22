let listaDeTarefas = []


listaDeTarefas.push(prompt("Primeira tarefa do seu dia"), 
prompt("Segunda tarefa do seu dia"),
prompt("Terceira tarefa do seu dia" ))
console.log(listaDeTarefas)


listaDeTarefas.splice(Number(prompt("Digite um indice para deletar")), 1)

console.log(listaDeTarefas)