
import styled from "styled-components"
import React from 'react';

import { Identify } from "./components/Identify/Identify"
import { Logged } from "./components/Logged/Logged"
import "./App.css"


const MainDiv = styled.div`
  
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
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
  callBackToHome = ()=>{

    this.setState({page:"start"})
  }

  render(){
 
  return (
    <MainDiv>
      {this.state.page === "start" ?<Identify mainComp= {this.callBackName}/>: ""}
      {this.state.page === "logged" ?<Logged mainComp= {this.callBackToHome} name= {this.state.name}/>: ""}
    </MainDiv>
  );
  }
}

export default App;
