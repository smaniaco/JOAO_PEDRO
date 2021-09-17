import "./App.css";
import styled from "styled-components";
import React from "react";
import axios from "axios";

const MainDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
const PanelModeTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80vw;
  min-width: 60vw;
`;
const Instructions = styled.ul`
  & > li {
    margin-bottom: 10px;
  }
  padding: 0;
  margin: 0;
  list-style-type: none;
`;
const Green = styled.span`
  font-weight: bold;
  color: green;
`;
const Red = styled.span`
  font-weight: bold;
  color: rgb(250, 158, 158);
`;
const Yellow = styled.span`
  font-weight: bold;
  color: Yellow;
`;

const Task = styled.div`
  & > p {
    text-align: center;
    font-size: 2vw;
    margin-left: 10px;
  }
  padding: 10px;
  min-height: 40vh;
  min-width: 60vw;

  max-width: 80vw;
  border: solid black 1px;
  border-radius: 5px;
`;

export class App extends React.Component {
  state = {
    task: "",
    onFireMode: false,
    message: false,
    participants: [],
    participantsNumber: 0,
    inputNumber: "",
  };
  getRandomTask = async () => {
    try {
      const response = await axios.get(
        "http://www.boredapi.com/api/activity?type=busywork"
      );
      console.log(response.data);
      this.setState({ message: true });
      this.setState({ task: response.data.activity.replace("your ", "") });
    } catch (error) {
      this.setState({ task: error });
    }
  };
  showInput = () => {
    this.setState({ onFireMode: !this.state.onFireMode });
  };
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  hardMode = async (number) => {
    this.setState({ message: false });

    this.setState({ participants: [] });
    for (let i = 0; i < number; i++) {
      let response;
      try {
        response = await axios.get(
          "http://www.boredapi.com/api/activity?type=busywork"
        );
      } catch (error) {
        console.log(error);
      }
      let cardNumber = this.getRandomInt(1, 7);
      if (cardNumber === 1) {
        cardNumber = "vermelho";
      } else if (cardNumber === 2) {
        cardNumber = "verde";
      } else if (cardNumber === 3) {
        cardNumber = "amarelo";
      } else {
        cardNumber = "sem cartão";
      }

      const participant = {
        task: response.data.activity.replace("your ", ""),
        id: i + 1,
        card: cardNumber,
      };
      this.setState({
        participants: [...this.state.participants, participant],
      });
    }
    this.setState({ inputNumber: "" });
  };
  onChangeNumber = (event) => {
    this.setState({ inputNumber: event.target.value });
  };
  render() {
    const participants = this.state.participants.map((person) => {
      return (
        <div>
          <h2>id: {person.id}</h2>
          <h2>Tarefa: {person.task}</h2>
          {person.card === "vermelho" ? (
            <h2>
              Cartão: <Red>{person.card}</Red>
            </h2>
          ) : (
            ""
          )}
          {person.card === "verde" ? (
            <h2>
              Cartão: <Green>{person.card}</Green>
            </h2>
          ) : (
            ""
          )}
          {person.card === "amarelo" ? (
            <h2>
              Cartão: <Yellow>{person.card}</Yellow>
            </h2>
          ) : (
            ""
          )}
          {person.card === "sem cartão" ? <h2>Cartão: {person.card}</h2> : ""}
        </div>
      );
    });
    return (
      <MainDiv>
        <Panel>
          <h1>GERADOR DE DINÂMICAS DE GRUPO PARA ENTREVISTAS</h1>
          <p>Para você meu caro funcionário de RH</p>
          <div>
            <button onClick={this.getRandomTask}>GERAR!!!</button>
            <button onClick={this.showInput}>
              BOTE FOGO NOS ENTREVISTADOS
            </button>
          </div>
          {this.state.onFireMode === true ? (
            <PanelModeTwo>
              <p>REGRAS:</p>
              <Instructions>
                <li>1- sera atribuída uma tarefa para cada candidato</li>
                <li>
                  2- você pode abdicar de sua tarefa para fazer uma tarefa em
                  dupla com outra pessoa, ao escolher uma dupla você permanece
                  nela até o fim, sem direito de mudança
                </li>
                <li>
                  3- candidatos tem a chance de ganhar um cartão vermelho,verde
                  ou amarelo
                </li>
                <li>
                  4- Teremos três cartões, porém ninguém pode revelar a cor do
                  seu. Cada cartão terá uma função
                </li>
              </Instructions>

              <Instructions>
                <li>
                  <p>
                    <Red>Vermelho</Red> - Deve se manter na parte esquerda da
                    sala e recebera a informação que DEVE encontrar alguém de
                    cartão verde para fazer dupla
                  </p>
                </li>
                <li>
                  <p>
                    <Green>Verde</Green> - Deve se manter sentado e deve receber
                    a informação que DEVE encontrar alguém de cartão vermelho
                    para fazer dupla
                  </p>
                </li>
                <li>
                  <p>
                    <Yellow>Amarelo</Yellow> - Pode ficar como quiser, porém se
                    alguém quiser fazer dupla deve aceitar e criar problemas
                    agindo de forma anti-produtiva. Indo de ser uma pessoa que
                    só reclama ou até ser alguém que não faz nada, vai da
                    imaginação do participante
                  </p>
                </li>
                <li>
                  <p>
                    Pessoas sem cartão estarão livres para fazerem o que bem
                    entenderem
                  </p>
                </li>
              </Instructions>
              <p>
                AVISO: Cogitamos a chance de sairem só cartões de uma cor ou não
                equivalentes, use essa oportunidade para ver como alguém se
                comporta quando não há vermelhos ou verdes disponíveis para
                fazer par
              </p>
              <input
                onChange={this.onChangeNumber}
                value={this.state.inputNumber}
                type="number"
                placeholder={"numero de candidatos"}
              />
              <div>
                <a href="#task">
                  <button
                    onClick={() =>
                      this.hardMode(Number(this.state.inputNumber))
                    }
                  >
                    ASSISTA TUDO QUEIMAR!!!
                  </button>
                </a>
                <button onClick={this.showInput}>Fechar</button>
              </div>
            </PanelModeTwo>
          ) : (
            ""
          )}
        </Panel>
        <Task id="task">
          {this.state.message ? <p>{this.state.task}</p> : ""}
          {this.state.message ? <p>DIVIRTA-SE :)</p> : ""}
          {participants}
        </Task>
      </MainDiv>
    );
  }
}

export default App;
