import styled from "styled-components"
import axios from "axios"
import React from "react"
import { Button } from "antd"
import "./App.css"
import 'antd/dist/antd.css';
import { BeSamurai } from "./Components/BeSamurai/BeSamurai"
import { Find } from "./Components/Find/Find"
import { CartPage } from "./Components/Cart/Cart"



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
  width:70%;
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
  display:flex;
  color:white;
  justify-content:center;
  align-items:center;
  margin:0 3vw;
  height:100%;
  width:6vw;
`





class App extends React.Component {
  state = {
    page:"home",
    carrinho: []
   
  }

  changePage(page){

    this.setState({page:page})

  }
  cartAdd(product){
    let state = false
    for (let prod of this.state.carrinho){
      if(product.id === prod.id){
        state = true
      }
    }
    if (state === false){
    product = {...product, idCart:Math.random()}
    let oldList = [...this.state.carrinho,product]
    this.setState({carrinho:[...oldList]})
    console.log(this.state.carrinho)}
    else{
      alert("este produto ja existe no carrinho")
    }
  }

  deleteProd(id){
    const oldList = [...this.state.carrinho]
    const newList = oldList.filter((product)=>{
      console.log(product.id, " e ", id)
      if(product.idCart === id){
          return false
      }
      else{
        return true
      }
    }
    )
    this.setState({carrinho:newList})
    console.log(this.state.carrinho)
  }

  clearList = ()=>{
    this.setState({carrinho:[]})
  }

  componentDidMount(){
    const loadCarrinho = JSON.parse(localStorage.getItem("carrinho"));
    if (loadCarrinho !== null && loadCarrinho !== undefined){
    this.setState({ carrinho: loadCarrinho })}
  }
  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
  }
  
  render(){


  const key="c031e0dd-6176-4cbf-9978-49c392be9b8c"
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
          <li onClick={()=>this.changePage("cart")}>
            CARRINHO
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
      {this.state.page  === "hire" ?  <Find deleter = {this.deleteProd.bind(this)} cartCallBack={this.cartAdd.bind(this)}/>:""}
      {this.state.page === "beHired" ?  <BeSamurai changePage = {this.changePage.bind(this)}/>:""}
      {this.state.page === "cart" ?  <CartPage clearCart={this.clearList.bind(this)}  deleter={this.deleteProd.bind(this)} cartProd={this.state.carrinho}/>:""}
     
      <Footer>
        TODOS OS DIREITOS RESERVADOS
      </Footer>
    </MainDiv>
  )}
}

export default App;
