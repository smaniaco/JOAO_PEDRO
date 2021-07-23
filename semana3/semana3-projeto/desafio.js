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

/*variavel para manter o while loop como quisermos */
let loop = 0;

/*Cria loop para jogar varias vezes*/
while (loop === 0) {
  /*Da inicio a rodada*/
  if (confirm("Quer começar uma nova rodada?")) {
    /*Cria variaveis essenciais*/
    let firstSelfLoss = false;
    let secondSelfLoss = false;
    let firstPlayer = [comprarCarta(), comprarCarta()];
    let secondPlayer = [comprarCarta(), comprarCarta()];
    let addCards = "";
    let addCardsC = ""
    let firstPlayerPoints = firstPlayer[0].valor + firstPlayer[1].valor;
    let secondPlayerPoints = secondPlayer[0].valor + secondPlayer[1].valor;
    /*Verifica se alguem comprou 2 As*/
    if (
      (firstPlayer[0].texto[0] === "A" && firstPlayer[1].texto[0] === "A") ||
      (secondPlayer[0].texto[0] === "A" && secondPlayer[0].texto[1] === "A") === false 
    ) {
      draw = true;
      /*Sistema de compra de cartas*/
      while (draw) {
        
        console.log(`======================\nPrimeio jogador - cartas: ${firstPlayer[0].texto}, ${firstPlayer[1].texto} ${addCards}  Pontuação: ${firstPlayerPoints}\nComputador - cartas: ${secondPlayer[0].texto}, [CARTA SECRETA]\nDeseja comprar mais uma carta?\n======================`);
        /*Player 1 compra*/
        if (confirm("COMPRAR?")) {
          const newCard = comprarCarta();
          firstPlayer.push(newCard);
          addCards += `,${newCard.texto} `;
          firstPlayerPoints += newCard.valor;
          if (firstPlayerPoints > 21 || firstPlayerPoints === 21) {
            draw = false;
          }
        } else {
          /*Caso o player 1 nao estoure e se recuse a comprar o computador compra cartas ate estourar ou chegar a 21 */
          draw = false;
        }
        
        
      }
      if (firstPlayerPoints < 22)
            while (secondPlayerPoints < 21 && secondPlayerPoints < firstPlayerPoints){
              console.log("=====Agora é a vez do computador comprar as cartas=====")
              const newCard = comprarCarta()
              secondPlayer.push(newCard)
              secondPlayerPoints += newCard.valor
              addCardsC += `,${newCard.texto} `
            }

      console.log(
        `======================\nResultado final\nPrimeio jogador - cartas: ${firstPlayer[0].texto}, ${firstPlayer[1].texto} ${addCards}  Pontuação: ${firstPlayerPoints}\nComputador - cartas: ${secondPlayer[0].texto}, ${secondPlayer[1].texto} ${addCardsC} Pontuação: ${secondPlayerPoints}\n====================== `
      );
      /* Nome do vencedor */
      let winner = ''
      if (firstPlayerPoints > 21) {
        firstSelfLoss = true;
      } else if (secondPlayerPoints > 21) {
        secondSelfLoss = true;
      }
      /*Testes para saber quem venceu*/
      if (firstSelfLoss === true && secondSelfLoss === true) {
        console.log("OS DOIS  ESTOURARAM!!! EMPATE");
        winner = 'EMPATE'
      } else if (firstSelfLoss === false && secondSelfLoss === true) {
        console.log("O primeiro jogador venceu!!! computador estourou");
        winner = 'Primeiro jogador venceu'
      } else if (firstSelfLoss == true && secondSelfLoss === false) {
        console.log("O computador venceu!!! primeiro jogador estourou");
        winner = 'Computador  venceu'
      } else if (firstPlayerPoints === secondPlayerPoints) {
        console.log("EMPATE");
        winner = 'empate'
      } else if (
        firstPlayerPoints > secondPlayerPoints &&
        firstSelfLoss == false
      ) {
        console.log("Primeiro jogador VENCEU!!!");
        winner = 'Primeiro joagdor venceu'
      } else if (
        firstPlayerPoints < secondPlayerPoints &&
        secondSelfLoss == false
      ) {
        console.log("computador VENCEU!!!");
        winner = 'Computador venceu'
      }
      alert(
        `Resultado final\nPrimeio jogador - cartas: ${firstPlayer[0].texto}, ${firstPlayer[1].texto} ${addCards}  Pontuação: ${firstPlayerPoints}\nComputador - cartas: ${secondPlayer[0].texto}, ${secondPlayer[1].texto}  ${addCardsC}, Pontuação: ${secondPlayerPoints}\n${winner}`
      );
    } else {
      console.log(
        "Um dos jogadores tiroud dois As, vamos sortea-las novamente"
      );
    }
  } else {
    /*Quebra o loop caso o jogador se recuse acomeçar uma nova rodada */
    loop = 1;
  }
}

console.log("FINAL");
