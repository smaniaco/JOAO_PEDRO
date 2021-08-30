import React from "react";
import styled from "styled-components"
import { SiteCart } from "./components/Carrinho/Carrinho"
import { Filtro } from "./components/Filtro/Filtro"

const DivDisplay = styled.div`
  display:grid;
  grid-template-columns: 10% 10% 60% 10% 10%;
  grid-template-rows: 10% 80% 10% ;
  width:100vw;

`
const DivPrincipal = styled.div`
  grid-column:2/5;
  grid-row:1/3;
  display:grid;
  grid-template-columns: 10% 10% 10% 10% 10% 0% 10% 10% 10% 10%;
  grid-template-rows: 10% 10% 10% 10% 10% 0% 10% 10% 10% 10%;
  column-gap:1vw;
  width:100%;
  height:100vh;
  
`
const DivProdutos = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  grid-column: 3/9;
  grid-row:1/-1;
  width:100%;
  border:solid 1px black;
  min-height:70%;


`
const DivCompraveis = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
const DivProduto = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin:10px;
  border:solid 1px black;
  padding:10px;

`
const TextoProduto = styled.div`
  & > h3 ,h4{
    margin:10px;
    font-weight:normal;
  }
  display:flex;
  flex-direction: column;
  align-items: flex-start;
`
const Image = styled.img`
  width:100%;

`
const BotaoCompra = styled.button`
  justify-self: center;

`


class App extends React.Component {
  state= {
    produtos:[{
      name:"produto-legal",
      price:13.50,
      id: 1,
      quantity: 1
    },
    {
      name:"produto-generico",
      price:10,
      id: 2,
      quantity:1
    },
  ],
    carrinho: [],

    filter: [100,
      1000,
      "produto"]
  }

  
  

  FuncComprar (id){
    let listaProdutos
    let novaLista = this.state.carrinho
    
    if (this.state.carrinho){
    listaProdutos = this.state.carrinho.find(produto => id === produto.id)
    }
    if (listaProdutos){
      const novoProdutoCarrinho = this.state.carrinho.map(produto => {
        if (id === produto.id) {
          return {
            ...produto,
            quantity: produto.quantity + 1,
          }
        }

        return produto
    })
    this.setState({carrinho: novoProdutoCarrinho })
  } else {
    const novoProduto = this.state.produtos.find(produto => id === produto.id)
    console.log(this.state.carrinho)
    let novoProdutoCarrinho
    if (!novaLista){
      let nLista =[...novaLista, novoProduto]
      this.setState({ carrinho: nLista })
    }
   
    else{
    novoProdutoCarrinho = [...novaLista,
    {
      ...novoProduto,
      qntdCompra: 1,
    }]
    this.setState({ carrinho: novoProdutoCarrinho })
    console.log(this.state.carrinho)
    }
    
    
  }

    
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))
  }
  onChangeSelectFilter(event){
    const newProdList = this.state.produtos
    let newProdSortedList = []
 
    if (event.target.value === "Crescente"){
 
    newProdSortedList = newProdList.sort((prodOne, prodTwo)=>{
      return parseFloat(prodOne.price) - parseFloat(prodTwo.price)
    })
    this.setState({produtos : newProdSortedList})}
    else if (event.target.value === "Decrescente") {
  
      newProdSortedList = newProdList.sort((prodOne, prodTwo) => parseFloat(prodTwo.price) - parseFloat(prodOne.price))
      this.setState({produtos : newProdSortedList})

    }
    
   }
  checkFilter(filtro){
  
    this.setState({filter:filtro})
  }
  
  componentDidMount(){
    const loadCarrinho = JSON.parse(localStorage.getItem("carrinho"))
    this.setState({carrinho:loadCarrinho})
   
  }
  render() {
    
    const filteredItems = this.state.produtos.filter((produto)=>{
      if ( produto.price >= this.state.filter[0] && produto.price <= this.state.filter[1] && produto.name.includes(this.state.filter[2])){

        return true
      }
      else{
      
        return false
      }
    }
    )
    
    const items = filteredItems.map((produto)=>{
      return<DivProduto>
          <Image src="https://picsum.photos/200/200?a=1"/>
          <TextoProduto>
          <h3>{produto.name}</h3>
          <h4>R${produto.price}</h4>
          </TextoProduto>
          <BotaoCompra onClick={()=>this.FuncComprar(produto.id)} >Comprar Produto</BotaoCompra>
        </DivProduto>
    })
    return <DivDisplay>
      
    <DivPrincipal>
      <Filtro checkFilter={this.checkFilter.bind(this)}>
        
      </Filtro>
      <DivProdutos>
      <p>Quantidade de produtos {this.state.produtos.length}</p>
      
      <select onChange= {this.onChangeSelectFilter.bind(this)}>
        <option>
          Filtro
        </option>
        <option>
          Crescente
        </option>
        <option>
          Decrescente
        </option>
      </select>
      <DivCompraveis>
      { items }
      </DivCompraveis>
      </DivProdutos>
     
      <SiteCart carrinho= {this.state.carrinho}/>
     
      </DivPrincipal>
      </DivDisplay>
    ;
  }
}

export default App;
