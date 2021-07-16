const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}

/*a. os numeros maiores que 18 serão impressos 1 por loop
sim, você poderia fazer mais uma variavel que comece com 0 e fazer ela subir 1 vez por loop,
assim você teria o numero de cada indice da vez e poderia usar ele para acessar cada numero
da lista*/