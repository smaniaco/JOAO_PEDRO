import styled from "styled-components"
import axios from "axios"
import React from "react"
import { Card } from "antd"
import { Button } from "antd"
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";

const MainDiv = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-content:center;
  
`






const CartList = styled.div`
    & > div{
        width:100%;
    }
    display:grid;
    width:100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap:10px;
    overflow-y: auto;
    max-height: 60%;
    @media (max-width:800px){
        grid-template-columns: 1fr 1fr 1fr ;
        max-height: 65%;
    
    }
    @media (max-width:600px){
        grid-template-columns: 1fr 1fr  ;
        max-height: 70%;
    }
    @media (max-width:500px){
        grid-template-columns: 1fr   ;
        max-height: 80%;
    }

`
const CardInfoCont = styled.div`
    & > h2 {
        font-size:1.5vw;
    }
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    height:100%;
`

const ButtonDiv = styled.div`
    display:flex;
    justify-content:center;
    width:100%;


`
const ButtonsContainer = styled.div`
    display:flex;
    justify-content:space-around;
    width:40%;
    margin-bottom:5vh;

`

const Alert = styled.div`
    
    background-color: rgba(0,0,0,0.5);
    display:flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    z-index:999;
    height:100%;
    width:100%;

    
   
    
`
const DivCarrinho = styled.div`
    & > h1 {
        text-align:center;
    }
    & > h2 {
        text-align:center;
       
    }
    height:80%;
   

`

const AlertMessage = styled.div`
    display:flex;
    flex-direction: column;
    width:60%;
    border-radius:15px;
    background-color: white;
    padding:1vw;

   
    animation-name: fadeIn;
    -webkit-animation-name: fadeIn; 
    animation-duration: 1.5s;   
    -webkit-animation-duration: 1.5s;
    animation-timing-function: ease-in-out; 
    -webkit-animation-timing-function: ease-in-out;     
    visibility: visible !important; 

    @keyframes fadeIn {
    0% {
        transform: scale(0);
        opacity: 0.0;       
    }
    60% {
        transform: scale(1.1);  
    }
    80% {
        transform: scale(0.9);
        opacity: 1; 
    }   
    100% {
        transform: scale(1);
        opacity: 1; 
    }       
}

    @-webkit-keyframes fadeIn {
    0% {
        -webkit-transform: scale(0);
        opacity: 0.0;       
    }
    60% {
        -webkit-transform: scale(1.1);
    }
    80% {
        -webkit-transform: scale(0.9);
        opacity: 1; 
    }   
    100% {
        -webkit-transform: scale(1);
        opacity: 1; 
    }       
}

`

export class CartPage extends React.Component {
  state ={
    minValue:"",
    maxValue:"",
    TitleDescription:"",
    order:"",
    list: [],
    alertOn:false
  }
  onChangeMin = (event) =>{
    this.setState({minValue:event.target.value})
  }
  onChangeMax = (event) =>{
    this.setState({maxValue:event.target.value})
  }
  onChangeTitleDescription = (event) =>{
    this.setState({TitleDescription:event.target.value})
  }
  onChangeOrder = (event) =>{
    this.setState({order:event.target.value})
  }
  deleteProduct = (id)=>{
    this.props.deleter(id)
  }
  onClickAlert = ()=>{
    
    this.setState({alertOn:!this.state.alertOn})
  
  }
  onClickBuy = ()=>{
    if (this.props.cartProd.length > 0 ){
      this.onClickAlert()
      this.props.clearCart()
    }
  }
  
  render(){
  const items = this.props.cartProd
  const cartItems = items.map((product)=>{
    return <Card.Grid >
        <CardInfoCont>
        {product.title.length < 25 ?
        <h2>{product.title}</h2>:
        <h2>{product.title.slice(0,25)}...</h2>
  }
        <p>{product.desciption}</p>
        <p>R$ {product.price}</p>
        <Button onClick={()=>this.deleteProduct(product.idCart)}>Excluir</Button>
        </CardInfoCont>
    </Card.Grid>
  }) 
  
  return (
    <MainDiv>
        {this.state.alertOn ?
        <Alert>
            <AlertMessage>
            <p>Obrigado por comprar conosco, volte sempre.</p>
            <Button onClick={this.onClickAlert}>
                Fechar
            </Button>
            </AlertMessage>
        </Alert>:""}
        <DivCarrinho>
        <h1>Carrinho de Compras</h1>
        {items.length >0 ?
        <CartList id="cartList">
        {cartItems}
        </CartList>:<h2>Parece que você ainda não fez nenhuma compra</h2>
        }
        </DivCarrinho>
        <ButtonDiv> 
            <ButtonsContainer>
            <Button onClick={this.onClickBuy}>Comprar</Button>
            <Button onClick={this.props.clearCart}>Cancelar Compra</Button>
            </ButtonsContainer>
       </ButtonDiv>
   
    </MainDiv>
  )}
}


