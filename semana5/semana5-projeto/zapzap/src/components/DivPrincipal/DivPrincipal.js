import React from 'react'
import styled from "styled-components";
import { TextBox } from "../../components/TextBox/TextBox"

const DivP = styled.div`
box-sizing:border-box;
display: flex;
flex-direction:column;
min-height:100vh;
width: 40%;
margin:0 auto;
border:1px solid black;

`


const PainelFrontal = styled.div`
display: flex;
box-sizing: border-box;
justify-content: space-evenly;
align-items: center;
height:10%;
width: 100%;
align-self:flex-end;



`

const MsgBox = styled.div`
  min-width: 20%;
  display:inline-flex;
  flex-direction: column;
  max-width:65%;

  box-sizing:border-box;
  background-color:white;
  padding:5px;
  padding-left:10px;

  border-radius: 5px;
  margin-bottom:10px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`
const MsgBoxL = styled.div`
  min-width: 20%;
  display:inline-flex;
  flex-direction: column;
  max-width:65%;
  align-self: flex-end;
  box-sizing:border-box;
  background-color:white;
  padding:5px;
  padding-left:10px;

  border-radius: 5px;
  margin-bottom:10px;

`
const Esquerda = styled.div`
  border-radius: 5px;
  display:flex;
  margin:0;
  min-width: 20%;
  max-width:65%;
  padding:0;
  background-color: white;
 
  align-self: flex-end;
  margin-bottom:10px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

`
const Enviar = styled.button`


width:15%;

font-size: 0.7em;
height:5vh;
border:2px solid black;
border-radius: 5px;
&:hover{
  border:2px solid lightblue;
}`
const User = styled.input`
box-sizing: border-box;
display: flex;
justify-content: flex-start;
font-size: 20px;
height:5vh;
width:20%;
margin: 4% 5%;
margin-right:0;
border:2px solid black;
border-radius: 5px;
&:hover{
  border:2px solid lightblue;
}
`
const Msg = styled.input`

box-sizing: border-box;
border-radius: 5px;
justify-content: flex-start;
font-size: 20px;

height:5vh;
width:50%;


border:2px solid black;
&:hover{
  border:2px solid lightblue;
}`

const MsgTitle = styled.h3`
display:inline-block;

color: #9AAC8C;
font-size: 0.8em;
font-weight: 600;
margin-bottom: 0.2em;


`
const MsgContent = styled.p`





background-color: white;
`

export class DivPrincipal extends React.Component {
  state = {
    mensagens : [],
    mensagem : "",
    user: ""

    };

    onChangeInputUser = (event) =>{
    this.setState({user: event.target.value})
    
    }

    onChangeInputMensagem = (event) =>{
    this.setState({mensagem: event.target.value})
    }
    adicionaMensagem = () =>{
      if (this.state.user !== "" && this.state.mensagem !== ""){
      const mensagemC = {
        id : Math.random(),
        nome : this.state.user,
        mensagem : this.state.mensagem
      }
      
    
      this.setState({mensagens : [...this.state.mensagens, mensagemC]}) 
      this.setState({mensagem : ""}) 
      this.setState({user : ""}) 
    }
    else{
      alert("Temos um campo faltando, por favor cheque tudo antes de enviar a mensagem.")
    }
    }
    excluiMensagem = (id) =>{

     
      console.log(id)
      const copiaArray = [...this.state.mensagens]
      const arrayOrganizado = copiaArray.filter((MSG)=>{
  
        return MSG.id !== id
      })
      this.setState({mensagens: arrayOrganizado})
      
    }
    adicionaEnter = (event) =>{
        if (event.which === 13)
        this.adicionaMensagem()
    }

    render() {
      
      const novaLista = this.state.mensagens.map((pessoa)=>{
      
        if (pessoa.nome.toLowerCase()  !== "eu"){
          return (
            <div >
            <MsgBox key = {pessoa.id} onDoubleClick= {() =>this.excluiMensagem(pessoa.id)} tabIndex="0">
            
            <MsgTitle>{pessoa.nome}</MsgTitle>
            <MsgContent>{pessoa.mensagem}</MsgContent>

            </MsgBox>
            </div>
          )
        }  else {
          return (<Esquerda>
            <MsgBoxL key = {pessoa.id} onDoubleClick= {() =>this.excluiMensagem(pessoa.id)} tabIndex="0">
            
            
            <MsgContent>{pessoa.mensagem}</MsgContent>

            </MsgBoxL>
            </Esquerda>)
        }

       
      })
      
      
      return <DivP  onKeyDown={(e) => this.adicionaEnter(e) } tabIndex="0">
        <TextBox   lista = { novaLista } mensagem = "testando 1 2 3"/>
        <PainelFrontal >
        <User placeholder="User" onChange={this.onChangeInputUser} value = {this.state.user}  />
   
        <Msg placeholder="Message" onChange={this.onChangeInputMensagem} value= {this.state.mensagem}/>
        <Enviar onClick= { this.adicionaMensagem  }>Enviar</Enviar>
        </PainelFrontal>
        </DivP>;
    }
  }