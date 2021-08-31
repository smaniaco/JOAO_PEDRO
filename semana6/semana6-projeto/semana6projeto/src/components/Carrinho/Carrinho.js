import React, { Component } from "react";
import styled from "styled-components";


const CartProducts = styled.div`
  & > p {
    display:inline;

    margin-right:10px;
    align-self: flex-end;
    justify-self:flex-end;
  }
  background-color:#fbfbfb;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  grid-column: 9/11;
  grid-row: 1/9;
  width: 100%;
  min-height:75vh;
  border-radius: 5px;
  border: solid 1px black;
`;
const Product = styled.div`
  
  margin-left:10px;
  margin-right:10px;
  margin-bottom:5px;
  width:15vw;
  height:20vh;
`;

const Title = styled.h1`
  align-self: center;
  font-size:2.5vw;
`

const ButtonDelete = styled.button`
  font-size:1.1vw;
  border:none;
  color:white;
  width:5vw;
  height: 2.5vh;
  background:linear-gradient(90deg, rgba(193,22,22,1) 0%, rgba(218,123,135,1) 100%);
  &:hover {
    background:linear-gradient(90deg, rgba(193,22,22,0.5) 0%, rgba(218,123,135,1) 100%);
  }
  &:active {
    background: linear-gradient(90deg, rgba(222,22,22,1) 0%, rgba(222,79,122,1) 100%);
  }
`

const DivProdList = styled.div`
  height:70%;

`

export class SiteCart extends React.Component {
  state = {}
  deleteButton(id){
    this.props.deleteProd(id)
  }
  render() {
    let totalPrice = 0;
    const primaryList = this.props.carrinho;
    let items = []
    if (primaryList){
    
    
        items = primaryList.map((product) => {
        totalPrice += product.price * product.quantity;

        return (
          <Product key ={product.id}>
            <h3>{product.name}</h3>
            <h3>R${product.price}</h3>
            <h4>Quantidade: {product.quantity}</h4>
            <ButtonDelete onClick={()=>this.deleteButton(product.id)}>Delete</ButtonDelete>
          </Product>
        );
      });
    }
    return (
  
        
      <CartProducts>
         
         
        <Title>Produtos</Title>
        <DivProdList>
        {items}
        </DivProdList>
        {totalPrice > 0 ? <p>R${totalPrice}</p> : ""}
      </CartProducts>
      
    );
  }
}
