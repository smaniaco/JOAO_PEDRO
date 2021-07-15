let fruta = prompt("escolha uma fruta");
let preco;

switch (fruta) {
  case "Laranja":
    preco = 3.5;
    break;
  case "Maçã":
    preco = 2.25;
    break;
  case "Uva":
    preco = 0.3;
    break;
  case "Pêra":
    preco = 5.5;
    break;
  default:
    preco = 5;
    break;
}


console.log("o preco da fruta ", fruta, " é R$", preco)


/* a. Serve para comparar o que o usuario inseriu com
uma serie de alternativas
 b. O preço da fruta maçã é R$2.25
 c. O preço da fruta Pêra é R$5*/