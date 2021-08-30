import React, { Component } from "react";
import styled from "styled-components";

const CartProducts = styled.div`
  grid-column: 9/11;
  grid-row: 1/9;
  width: 100%;

  border: solid 1px black;
`;
const Product = styled.div``;

export class SiteCart extends React.Component {
  render() {
    let totalPrice = 0;
    const primaryList = this.props.carrinho;
    let items = []
    if (primaryList){
    
    
        items = primaryList.map((product) => {
        totalPrice += product.price * product.quantity;

        return (
          <Product>
            <h3>{product.name}</h3>
            <h3>R${product.price}</h3>
            <h4>Quantidade: {product.quantity}</h4>
          </Product>
        );
      });
    }
    return (
      <CartProducts>
        <h1>Produtos</h1>
        {items}
        {totalPrice > 0 ? <p>R${totalPrice}</p> : ""}
      </CartProducts>
    );
  }
}
