import React from "react";
import styled from "styled-components";
import { PerguntaAberta } from "../PerguntaAberta/PerguntaAberta"
import { PerguntaFechada } from "../PerguntaFechada/PerguntaFechada"


export class EtapaTres  extends React.Component  {
    state= {
        inputMotivo : ""
    }
    sendData = () => {
        this.props.parentCallback("etapaF")
    }
    onCallBackInputMotivo = (childData) =>{
        this.setState({inputMotivo: childData})
     
    }
    render(){
        return <div className="EtapaTres">
        <h1>Etapa Tres</h1>
        <h2>Por que você não terminou o curso de graduação?</h2>
        <PerguntaAberta pegaInput = {this.onCallBackInputMotivo}type="text" id="inputMotivo" placeholder="Motivo"></PerguntaAberta>
        <h2>Você fez algum curso complementar?</h2>
        <PerguntaFechada selecao={["Selecionar Opção","Curso técnico","Cursos de inglês", "Não fiz curso complementar"]}>
        </PerguntaFechada>
        <button onClick={this.sendData}>Enviar</button>
        
        
        </div>;
    }
}