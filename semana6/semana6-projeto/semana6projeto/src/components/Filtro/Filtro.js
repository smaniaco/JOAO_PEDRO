import React from "react";
import styled from "styled-components"


const  Filter = styled.div`
  & > h1 {
    text-align:center;
  }
  & > input {
    border-radius: 5px;
  }
  min-height:75vh;

  background-color:#fbfbfb;
  grid-column:1/3;
  grid-row:1/9 ;
  width:100%;
  border-radius: 5px;
  border:solid 1px black;

`

const DivFContent = styled.div`
  & > input{
    width:80%;
  }
  display:flex;
  flex-direction:column;
  margin-left:10px;
`



export class Filtro extends React.Component {
  state = {
    valMin :10,
    valMax :1000,
    prodName:"produto"

  }
  onChangeMin(event){
    this.setState({valMin:event.target.value})
    this.props.checkFilter([event.target.value,this.state.valMax, this.state.prodName])
  }
  onChangeMax(event){
    this.setState({valMax:event.target.value})
    this.props.checkFilter([this.state.valMin,event.target.value, this.state.prodName])
  }
  onChangeProdName(event){
    this.setState({prodName:event.target.value})
    this.props.checkFilter([this.state.valMin,this.state.valMax, event.target.value.toLowerCase()])
  }

  
  render() {

    
    return <Filter>
      <h1>Filtro</h1>
      <DivFContent>
      
        <p>Valor Minimo</p>
        <input onChange={this.onChangeMin.bind(this)} type="number" value={ this.state.valMin }/>
        <p>Valor Máximo</p>
        <input onChange={this.onChangeMax.bind(this)} type="number" value={ this.state.valMax }/>
        <p>Nome do Produto</p>
        <input onChange={this.onChangeProdName.bind(this)} type="text" value={ this.state.prodName }/>
        </DivFContent>
      </Filter>
      ;
  }
}


