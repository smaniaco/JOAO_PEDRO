import React, { Component } from "react";
import styled from "styled-components";

const CartProducts = styled.div`
  font-size: 1.5vw;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 80% 20%;
  background-color: #fbfbfb;
  grid-column: 9/11;
  grid-row: 1/9;
  width: 100%;
  height: 100%;
  @media (max-width: 656px) {
    max-height: 60%;
    min-height:40%;
  }
  @media (max-width: 539px) {
    max-height: 50%;
    min-height:40%;
  }

  @media (max-width: 457px) {
    max-height: 55%;
    min-height:45%;
  }

  border-radius: 5px;
  border: solid 1px black;
`;
const Product = styled.div`
  font-size: 0.9em;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 15vw;
`;

const Title = styled.h1`
  text-align: center;

  align-self: center;
  font-size: 2.5vw;
`;

const ButtonDelete = styled.button`
  font-size: 1.1vw;

  @media (max-width: 500px) {
    width: 80%;
  }
  border: none;
  color: white;
  width: 5vw;
  height: 15%;
  background: linear-gradient(
    90deg,
    rgba(193, 22, 22, 1) 0%,
    rgba(218, 123, 135, 1) 100%
  );
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(193, 22, 22, 0.5) 0%,
      rgba(218, 123, 135, 1) 100%
    );
  }
  &:active {
    background: linear-gradient(
      90deg,
      rgba(222, 22, 22, 1) 0%,
      rgba(222, 79, 122, 1) 100%
    );
  }
`;

const DivProdList = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
`;
const Total = styled.div`
  position: relative;
  margin-top: 15px;
  box-sizing: border-box;
  color: green;
  padding-right: 10px;
  text-align: right;
  align-self: center;

  justify-content: flex-start;
`;

export class SiteCart extends React.Component {
  state = {};
  deleteButton(id) {
    this.props.deleteProd(id);
  }
  render() {
    let totalPrice = 0;
    const primaryList = this.props.carrinho;
    let items = [];
    if (primaryList) {
      items = primaryList.map((product) => {
        totalPrice += product.price * product.quantity;

        return (
          <Product key={product.id}>
            <h3>{product.name}</h3>
            <h3>R${product.price}</h3>
            <h4>Quantidade: {product.quantity}</h4>
            <ButtonDelete onClick={() => this.deleteButton(product.id)}>
              Delete
            </ButtonDelete>
          </Product>
        );
      });
    }
    return (
      <CartProducts>
        <DivProdList>
          <Title>Produtos</Title>
          {items}
        </DivProdList>

        <Total>{totalPrice > 0 ? <p>R${totalPrice}</p> : ""}</Total>
      </CartProducts>
    );
  }
}
