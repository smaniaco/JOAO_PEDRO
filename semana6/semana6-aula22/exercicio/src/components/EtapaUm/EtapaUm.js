import React from "react";
import styled from "styled-components";
import { PerguntaAberta } from "../PerguntaAberta/PerguntaAberta"
import { PerguntaFechada } from "../PerguntaFechada/PerguntaFechada"

const RedText= styled.p `
    color:red;
`

export class EtapaUm  extends React.Component  {
    state= {
        perguntaQuatro: "",
        inputNome : "",
        inputIdade: "",
        inputEmail: "",
        inputSelec : "",
        nomeWarn : 0,
        selecWarn : 0
    }
    sendData = () => {
        if ((this.state.inputNome !== "") && (this.state.inputSelec !== "")){
            if ((this.state.inputSelec === "Ensino superior completo") || this.state.inputSelec == "Ensino superior incompleto"){
                this.props.parentCallback("etapa2")}
                else{
                    this.props.parentCallback("etapa3")
                }
            }
        else{
            alert("Você deve preencher todas as perguntas antes de continuar")
        }
        if (this.state.inputNome === ""){
            this.setState({nomeWarn: 1})

        }
        else {
            this.setState({nomeWarn: 0})
        }
        if  (this.state.inputSelec === "" || this.state.inputSelec === "Selecionar Opção" ){
        
            this.setState({selecWarn: 1})

        }
        else {
            this.setState({selecWarn: 0})
        }
       

    }
    onCallBackInputNome = (childData) =>{
        this.setState({inputNome: childData})
     
    }
    onCallBackInputIdade = (childData) =>{
        this.setState({inputIdade: childData})
   
    }
    onCallBackInputEmail = (childData) =>{
        this.setState({inputEmail: childData})
    
    }
    onCallBackSelect = (childData) =>{
        this.setState({inputSelec: childData})
      
    }
    
    render(){
       
        return <div className="etapaUm">
        <h1>Etapa Um</h1>
        <h2>Seu nome</h2>
        {this.state.nomeWarn === 1 ?<RedText>É obrigatório digitar o nome</RedText> : ''}
        <PerguntaAberta pegaInput= {this.onCallBackInputNome} value={this.state.inputNome}  type="text" id="inputNome" placeholder="Nome"></PerguntaAberta>
        <h2>Sua Idade</h2>
        <PerguntaAberta pegaInput= {this.onCallBackInputIdade} type="number" id="inputIdade" placeholder="Idade"></PerguntaAberta>
        <h2>Seu Email</h2>
        <PerguntaAberta pegaInput= {this.onCallBackInputEmail} type="email" id="inputEmail" placeholder="Email"></PerguntaAberta>
        <h2>Escolaridade</h2>
        {this.state.selecWarn === 1 ?<RedText>É obrigatório selecionar a ecolaridade</RedText> : ''}
        <PerguntaFechada pegaInput= {this.onCallBackSelect} selecao = {["Selecionar Opção","Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"]}>
        </PerguntaFechada>
        <button onClick={this.sendData}>Enviar</button>
        
        
        </div>;
    }
}