import styled from "styled-components"
import axios from "axios"
import React from "react"
import { Button } from "antd"
import "./App.css"
import 'antd/dist/antd.css';
import { BeSamurai } from "./Components/BeSamurai/BeSamurai"
import { Find } from "./Components/Find/Find"


const MainDiv = styled.div`
  height:100vh;
  font-size:2.1vw;
`
const Header = styled.header`
  background-color:#1B4C7A;
  display:flex;
  height:10%;
  width:100%;
`

const Footer = styled.footer`
  display:flex;
  justify-content: center;
  background-color:#2C7CC7;
  height:20%;
`

const MenuUl = styled.ul`
  & > li {
    color:#c4c4c4;
    display:flex;
    align-items: center;
    height:100%;
    cursor:pointer;
    
    &:hover{
      transition:1s;
      color:white;
    }
 
  }
  display: flex;
  padding:0;
  width:50%;
  height:100%;
  align-items:center;
  list-style-type: none;
  justify-content: space-around;
  
`

const Landing = styled.div`
  height:80%;
  display: flex;
  align-items:center;
  justify-content: center;
 
  

`

const ButtonsDiv = styled.div`

  & > button {
    background-color:#379CFA;
    border-radius:15px;
  }
  opacity:1.0 !important;
  
  width:40%;
  display:flex;
  justify-content:space-around;

`

const Filter = styled.div`
  
  & > h1 {
    color:white;
  }
  & > h2 {
    color:white;
  }
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  
  background-color: rgba(0,0,0,0.5);
  height:100%;
  width:100%;
`

const Logo = styled.div`
  margin:0 3vw;
  height:6vw;
  width:6vw;
`



class App extends React.Component {
  state = {
    page:"home"
  }
  changePage(page){

    this.setState({page:page})

  }
  render(){
  return (

    <MainDiv>
      
      <Header>
        <Logo>
          LOGO
        </Logo>
        <MenuUl>
          <li onClick={()=>this.changePage("home")}>
            HOME
          </li>
          <li  onClick={()=>this.changePage("hire")}>
            BUSQUE UM SAMURAI
          </li>
          <li onClick={()=>this.changePage("beHired")}>
            SEJA UM SAMURAI
          </li>
        </MenuUl>

      </Header>
      {this.state.page === "home" ?
      <Landing id="landing-page">
        <Filter>
          <h1>Encontre freelancers</h1>
          <h2>Serviço de freelancers para todas as necessidades</h2>
          <ButtonsDiv>
            <Button  onClick={()=>this.changePage("hire")} type="primary">ACHE UM SAMURAI</Button>
            <Button  onClick={()=>this.changePage("beHired")} type="primary">SEJA UM SAMURAI</Button>
          </ButtonsDiv>
        </Filter>
      </Landing>
      :""}
      {this.state.page === "hire" ?  <Find/>:""}
      {this.state.page === "beHired" ?  <BeSamurai/>:""}
      <Footer>
        TODOS OS DIREITOS RESERVADOS
      </Footer>
    </MainDiv>
  )}
}

export default App;
