/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack ");


if (confirm("Quer começar uma nova rodada?")) {
//variaveis essenciais
  let firstSelfLoss = false;
  let secondSelfLoss = false;
  let firstPlayer = [comprarCarta(), comprarCarta()];
  let firstPlayerPoints = firstPlayer[0].valor + firstPlayer[1].valor;
  let secondPlayer = [comprarCarta(), comprarCarta()];
  let secondPlayerPoints = secondPlayer[0].valor + secondPlayer[1].valor;
//imprime as cartas e pontuações
  console.log(
    `Primeio jogador - cartas: ${firstPlayer[0].texto}, ${firstPlayer[1].texto}  Pontuação: ${firstPlayerPoints}`
  );
  console.log(
    `Segundo jogador - cartas: ${secondPlayer[0].texto}, ${secondPlayer[1].texto} Pontuação: ${secondPlayerPoints}`
  );



//testes para saber quem venceu
  if (firstPlayerPoints > 21) {
    firstSelfLoss = true;
  } else if (secondPlayerPoints > 21) {
    secondSelfLoss = true;
  }

  if (firstSelfLoss === true && secondSelfLoss === true) {
    console.log("OS DOIS JOGADORES ESTOURARAM!!! EMPATE");
  } else if (secondSelfLoss === false && secondSelfLoss === true) {
    console.log("O primeiro jogador venceu!!! Segundo jogador estourou");
  } else if (secondSelfLoss === true && secondSelfLoss === false) {
    console.log("O segundo jogador venceu!!! primeiro jogador estourou");
  } else if (firstPlayerPoints === secondPlayerPoints) {
    console.log("EMPATE");
  } else if (firstPlayerPoints > secondPlayerPoints && firstSelfLoss == false) {
    console.log("Primeiro jogador VENCEU!!!");
  } else if (
    firstPlayerPoints < secondPlayerPoints &&
    secondSelfLoss == false
  ) {
    console.log("Segundo jogador VENCEU!!!");
  }
} else {
}
