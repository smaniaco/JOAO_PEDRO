import React from "react";
import styled from "styled-components";
import { EtapaUm } from "./components/EtapaUm/EtapaUm"
import { EtapaDois } from "./components/EtapaDois/EtapaDois"
import { EtapaTres } from "./components/EtapaTres/EtapaTres"
import { EtapaFinal } from "./components/EtapaFinal/EtapaFinal"


const DivP = styled.div`
  display:flex;
  width:40%;
  flex-direction: column;
  text-align:center;
  align-items: center;
  margin:0 auto;
 
`

class App extends React.Component {
  state = { 
    etapa: "etapa1",
    perguntaQuatro: ""

  }
  callbackFunction = (event) => {
    this.setState({etapa: event})
 
  }

  render() {
    switch (this.state.etapa){
    case "etapa1": 
      return <DivP>
      
        <EtapaUm parentCallback = {this.callbackFunction}/>
        
        </DivP>;

    case "etapa2":
      return <DivP>
      
        <EtapaDois parentCallback = {this.callbackFunction} />
        
        </DivP>;
    
    case "etapa3":
      return <DivP>
      
        <EtapaTres parentCallback = {this.callbackFunction} />
        
        </DivP>;
    case "etapaF":
      return <DivP>
      
        <EtapaFinal/>
        
        </DivP>;
    }
  }
}

export default App;
