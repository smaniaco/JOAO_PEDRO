import React from "react";
import styled from "styled-components";



export class PerguntaFechada  extends React.Component  {
    state = {
        selecionando: ""
    }
    onChangeSelect = (event)=> {
        
        
        this.setState({selecionando: event.target.value})
        this.props.pegaInput(event.target.value)}
        
    render(){
        const selecionar = this.props.selecao
        const selecaoSolucionada = selecionar.map((tag)=>{
            return <option key = {Math.random()}>{tag}</option>
        })
        return <div className="perguntaFechada">

        <select onChange = {this.onChangeSelect} id= "selectP">
            { selecaoSolucionada }
        </select>
        
        </div>;
    }
}