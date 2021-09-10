import React from "react";
import styled from "styled-components"


const  Filter = styled.div`
  & > h1 {
    text-align:center;
  }
  & > input {
    border-radius: 5px;
  }
  min-height:50vh;

  background-color:#fbfbfb;
  grid-column:1/3;
  grid-row:1/9 ;
  width:100%;
  height:20vh;
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
    if (event !== ""){
    this.setState({valMin:event.target.value})
    this.props.checkFilter([Number(event.target.value),Number(this.state.valMax), this.state.prodName])
    }else{
      this.setState({valMax:event.target.value})
      this.props.checkFilter([-9999999,Number(this.state.valMax), this.state.prodName])

    }
  }
  onChangeMax(event){
    console.log(event.target.value)
    if (event.target.value.length !== 0){
      console.log("foi")
    this.setState({valMax:event.target.value})
    this.props.checkFilter([Number(this.state.valMin),Number(event.target.value), this.state.prodName])
    } else{
      this.setState({valMax:event.target.value})
      this.props.checkFilter([Number(this.state.valMin),99999999, this.state.prodName])

    }
  }
  onChangeProdName(event){
    if (event !== ""){
    this.setState({prodName:event.target.value})
    this.props.checkFilter([Number(this.state.valMin),Number(this.state.valMax), event.target.value.toLowerCase()])
    }else{
      this.setState({valMax:event.target.value})
      this.props.checkFilter([Number(this.state.valMin),Number(this.state.valMax), this.state.prodName])

    }
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


