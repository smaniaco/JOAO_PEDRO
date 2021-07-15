const name = prompt("Nome completo:");
let gameType = prompt(
  "Tipo de jogo (IN) internacional (DO) doméstico"
).toUpperCase();
let gamePhase = prompt(
  "(SF) semi-final (DT) decisão de terceiro lugar (FL) final"
).toUpperCase();
const category = Number(
  prompt(
    "Numero de 1 ao 4 para escolher a categoria (1 melhor e mais caro 4 pior e mais barato"
  )
);
const quantity = Number(prompt("numero de ingressos"));

let preco = 0;

switch (gamePhase) {
  case "SF":
    gamePhase = "Semi-final";
    switch (category) {
      case 1:
        preco = 1320.0;
        break;
      case 2:
        preco = 880.0;
        break;
      case 3:
        preco = 550.0;
        break;
      case 4:
        preco = 220.0;
        break;
    }
  case "DT":
    gamePhase = "Decisao do terceiro lugar";
    switch (category) {
      case 1:
        preco = 660.0;
        break;
      case 2:
        preco = 440.0;
        break;
      case 3:
        preco = 330.0;
        break;
      case 4:
        preco = 170.0;
        break;
    }
  case "FL":
    gamePhase = "Final";
    switch (category) {
      case 1:
        preco = 1980.0;
        break;
      case 2:
        preco = 1320.0;
        break;
      case 3:
        preco = 880.0;
        break;
      case 4:
        preco = 330.0;
        break;
    }
}

if (gameType === "IN") {
  preco /= 4.1;
  gameType = "Internacional";
} else {
  gameType = "Doméstico";
}

const ingressos = preco * quantity;

console.log(`---Dados da Compra---`);
console.log(`Nome do cliente: ${name}`);
console.log(`Tipo de jogo: ${gameType}`);
console.log(`Etapa do jogo: ${gamePhase}`);
console.log(`Categoria: ${category}`);
console.log(`Quantidade de ingressos: ${quantity}`);
console.log(`---Valores---`);
if (gameType === "Doméstico") {
  console.log(`valor do ingresso R$${preco}`);
  console.log(`valor total R$${ingressos}`);
} else {
  console.log(`valor do ingresso U$${preco}`);
  console.log(`valor total U$${ingressos}`);
}
