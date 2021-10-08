
import styled from "styled-components"
import React from 'react';
import axios from "axios"




const DivMain = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width:100vw;
`



const ButtonReg = styled.button`
    font-family:"Roboto";
    margin-top:10%;
    margin-bottom:10%;
    align-self: center;
    font-weight: bold;
    border-radius: 10px;
    background-color:rgba(255,255,255,0.5);
    color:#222222;
    border:none;
    &:hover{
      background-color:rgba(255,255,255,0.8);
    }
    &:active{
      background-color:rgba(0,0,0,0.1);
    }

`


const RegDiv = styled.div`
    & > p {
        text-align:center;
        margin-top:50px;
        margin-bottom:50px;
        font-size:1vw;
    }
    & > input{
        font-size:1em;
        margin:0 auto;
        border-radius:5px;
        margin-bottom:1vh;
        width:15vw;
    }

    & >h1 {
        width:80%;
        text-align:center;
        font-size:2em;
        margin-bottom:5vh;
    }
    
    box-sizing:border-box;
    margin:0 auto;
    background-color:rgba(255,255,255,0.5);
    min-width:30vw;
    min-height:35vh;
    display:flex;
    align-items: center;
    color:#222222;
    flex-direction:column;
    border-radius:5vw;
`




export class Identify extends React.Component {

  state={
    input:""

  }
  
  sendName(event){
    if (this.state.input !== ""){
    this.props.mainComp(this.state.input)
    event.preventDefault()
    this.setState({input:""})}
    else{
      alert("Não aceitamos espaços em branco")
    }
    
  }
  onChange(event){
    this.setState({input:event.target.value})
  }

  render(){
 
  return (
    <DivMain>
      <RegDiv>
            <h1>Informe seu nome</h1>
            <input onChange={this.onChange.bind(this)} value={this.state.input}></input>
         
            <ButtonReg onClick={this.sendName.bind(this)}>ENTRAR</ButtonReg>
        </RegDiv>
    </DivMain>
  );
  }
}


