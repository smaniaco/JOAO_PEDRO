import React from "react";
import styled from "styled-components";
import { PerguntaAberta } from "../PerguntaAberta/PerguntaAberta"


export class EtapaDois  extends React.Component  {
    state = {
        inputCurso: "",
        inputUnidadeE : ""
    }
    
    sendData = () => {
        this.props.parentCallback("etapa3")
        
    }
    onCallBackInputCurso = (childData) =>{
        this.setState({inputCurso: childData})
     
    }
    onCallBackInputUnidadeE = (childData) =>{
        this.setState({inputUnidadeE: childData})
     
    }
    render(){
        return <div className="EtapaDois">
        <h1>Etapa Dois</h1>
        <h2>Qual Curso?</h2>
        <PerguntaAberta pegaInput = {this.onCallBackInputCurso} type="text" id="inputCurso" placeholder="Curso"></PerguntaAberta>
        <h2>Qual Unidade de ensino?</h2>
        <PerguntaAberta pegaInput = {this.onCallBackInputUnidadeE} type="text" id="inputUnidadeE" placeholder="Idade"></PerguntaAberta>
        <button onClick={this.sendData}>Enviar</button>
        
        
        </div>;
    }
}