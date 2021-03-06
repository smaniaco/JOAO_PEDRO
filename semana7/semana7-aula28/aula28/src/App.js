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
        cardNumber = "sem cart??o";
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
              Cart??o: <Red>{person.card}</Red>
            </h2>
          ) : (
            ""
          )}
          {person.card === "verde" ? (
            <h2>
              Cart??o: <Green>{person.card}</Green>
            </h2>
          ) : (
            ""
          )}
          {person.card === "amarelo" ? (
            <h2>
              Cart??o: <Yellow>{person.card}</Yellow>
            </h2>
          ) : (
            ""
          )}
          {person.card === "sem cart??o" ? <h2>Cart??o: {person.card}</h2> : ""}
        </div>
      );
    });
    return (
      <MainDiv>
        <Panel>
          <h1>GERADOR DE DIN??MICAS DE GRUPO PARA ENTREVISTAS</h1>
          <p>Para voc?? meu caro funcion??rio de RH</p>
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
                <li>1- sera atribu??da uma tarefa para cada candidato</li>
                <li>
                  2- voc?? pode abdicar de sua tarefa para fazer uma tarefa em
                  dupla com outra pessoa, ao escolher uma dupla voc?? permanece
                  nela at?? o fim, sem direito de mudan??a
                </li>
                <li>
                  3- candidatos tem a chance de ganhar um cart??o vermelho,verde
                  ou amarelo
                </li>
                <li>
                  4- Teremos tr??s cart??es, por??m ningu??m pode revelar a cor do
                  seu. Cada cart??o ter?? uma fun????o
                </li>
              </Instructions>

              <Instructions>
                <li>
                  <p>
                    <Red>Vermelho</Red> - Deve se manter na parte esquerda da
                    sala e recebera a informa????o que DEVE encontrar algu??m de
                    cart??o verde para fazer dupla
                  </p>
                </li>
                <li>
                  <p>
                    <Green>Verde</Green> - Deve se manter sentado e deve receber
                    a informa????o que DEVE encontrar algu??m de cart??o vermelho
                    para fazer dupla
                  </p>
                </li>
                <li>
                  <p>
                    <Yellow>Amarelo</Yellow> - Pode ficar como quiser, por??m se
                    algu??m quiser fazer dupla deve aceitar e criar problemas
                    agindo de forma anti-produtiva. Indo de ser uma pessoa que
                    s?? reclama ou at?? ser algu??m que n??o faz nada, vai da
                    imagina????o do participante
                  </p>
                </li>
                <li>
                  <p>
                    Pessoas sem cart??o estar??o livres para fazerem o que bem
                    entenderem
                  </p>
                </li>
              </Instructions>
              <p>
                AVISO: Cogitamos a chance de sairem s?? cart??es de uma cor ou n??o
                equivalentes, use essa oportunidade para ver como algu??m se
                comporta quando n??o h?? vermelhos ou verdes dispon??veis para
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
