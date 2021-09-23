import styled from "styled-components"
import axios from "axios"
import React from "react"
import { Row, Col} from "antd"
import 'antd/dist/antd.css';
import { DatePicker } from "antd";

const MainDiv = styled.div`
  height:90%;
`


const PageGrid = styled.div`
  height:100%;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows:1fr 1fr 1fr;

`

const FormDiv = styled.div`

  text-align:center;
  grid-row:2;
  grid-column: 3;
  width:100%;
`





export class BeSamurai extends React.Component {
  state= {
    title:"",
    description:"",
    price:"",
    payment:"",
    date:""
  }

  onChangeTitle(event){
    this.setState({title:event.target.value})
  }
  onChangeDescription(event){
    this.setState({description:event.target.value})
  }
  onChangePrice(event){
    this.setState({price:event.target.value})
  }
  onChangePayment(event){
    this.setState({payment:event.target.value})
  }
  onChangeDate(event){
    this.setState({date:event.target.value})
  }

  render(){
  return (
    <MainDiv>
      
      <PageGrid>
        <FormDiv>
          <p>Título</p>
          <input value={this.state.title} onChange={this.onChangeTitle.bind(this)}/>
          <p>Descrição</p>
          <input value={this.state.description} onChange={this.onChangeDescription.bind(this)}/>
          <p>Preço</p>
          <input value={this.state.price} onChange={this.onChangePrice.bind(this)} type="number"/>
          <select value={this.state.payment} onChange={this.onChangePayment.bind(this)}>
            <option>
              Cartão de débito
              </option>
              <option>
              Cartão de Crédito
              </option>
              <option>
              Paypal
              </option>
              <option>
              Boleto
              </option>
              <option>
              Pix
              </option>
            </select>
            <DatePicker value={this.state.date} onChange={this.onChangeDate.bind(this)} type="date"/>
          </FormDiv>
        </PageGrid>
    </MainDiv>
  )}
}


