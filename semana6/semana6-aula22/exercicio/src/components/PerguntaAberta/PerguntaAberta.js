import React from "react";
import styled from "styled-components";



export class PerguntaAberta  extends React.Component  {
    state = {
        inputE:""
    }
    onChangeInput = (event)=> {
        
        
        this.setState({inputE: event.target.value})
        this.props.pegaInput(event.target.value)}
        
    render(){
        return <div className="perguntaAberta">

        <input  onChange={this.onChangeInput} value={this.props.value} value={this.inputE}
        type = {this.props.type} placeholder={this.props.placeholder} />
        
        </div>;
    }
}