
import styled from "styled-components"
import React from 'react';
import axios from "axios"
import { Identify } from "./components/Identify/Identify"
import { Logged } from "./components/Logged/Logged"
const MainDiv = styled.div`
  
  min-height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
`

const PanelModeTwo = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  max-width: 80vw;
  min-width:60vw;

`
const Instructions = styled.ul`
  & >li{
    margin-bottom:10px;
  }
  padding:0;
  margin:0;
  list-style-type: none;

`
const Green = styled.span`
  font-weight: bold;
  color:green;
`
const Red = styled.span`
  font-weight: bold;
  color:rgb(250, 158, 158);
`
const Yellow = styled.span`
  font-weight: bold;
  color:Yellow;
`

const Task = styled.div`
  & > p {
    text-align:center;
    font-size:2vw;
    margin-left:10px;
  }
  padding:10px;
  min-height:40vh;
  min-width:60vw;

  max-width:80vw;
  border:solid black 1px;
  border-radius:5px;
`



export class App extends React.Component {

  state={
    name:"",
    page:"start",
    message:false,
    participants:[],
    participantsNumber:0,
    inputNumber:""

  }
  

  callBackName = (name)=>{
    this.setState({name:name})
    this.setState({page:"logged"})
  }

  render(){
 
  return (
    <MainDiv>
      {this.state.page === "start" ?<Identify mainComp= {this.callBackName}/>: ""}
      {this.state.page === "logged" ?<Logged name= {this.state.name}/>: ""}
    </MainDiv>
  );
  }
}

export default App;
