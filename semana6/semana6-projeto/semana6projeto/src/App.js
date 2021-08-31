import React from "react";
import styled from "styled-components"
import { SiteCart } from "./components/Carrinho/Carrinho"
import { Filtro } from "./components/Filtro/Filtro"
import FloatingWhatsApp from 'react-floating-whatsapp'
import 'react-floating-whatsapp/dist/index.css'
import './App.css'



const DivPage = styled.div`

`

const DivDisplay = styled.div`
  display:grid;
  grid-template-columns: 10% 10% 60% 10% 10%;
  grid-template-rows: 10% 80% 10% ;
  width:100vw;
  min-height:90vh;

`
const DivPrincipal = styled.div`
  grid-column:2/5;
  grid-row:1/-1;
  display:grid;
  grid-template-columns: 10% 10% 10% 10% 10% 0% 10% 10% 10% 10%;
  grid-template-rows: 10% 10% 10% 10% 10% 0% 10% 10% 10% 10%;
  column-gap:1vw;
  width:100%;
  min-height:80vh;
  
`
const DivProdutos = styled.div`
  background-color:#fbfbfb;
  display:flex;
  flex-direction:column;
  align-items: center;
  grid-column: 3/9;
  grid-row:1/-1;
  width:100%;
  border:solid 1px black;
  border-radius: 5px;
  min-height:40vh;
  max-height:100vh;


`
const DivCompraveis = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
const DivProduto = styled.div`
  display:flex;
  width:30%;
  flex-direction:column;
  align-items: center;
  margin:10px;
  border-radius:5px;
  border:solid 1px black;
  padding:10px;

`
const TextoProduto = styled.div`
  & > h3 ,h4{
    display:inline-block;
    margin:10px;
    font-weight:normal;
    font-size:1.2vw;
  }
  display:flex;
  flex-direction: column;
  align-items: flex-start;
`
const Image = styled.img`
  width:100%;

`
const BotaoCompra = styled.button`
  background:linear-gradient(90deg, rgba(52,131,250,1) 0%, rgba(106,165,255,1) 100%);
  color:white;
  justify-self: center;
  border:none;
  padding:5px;
  &:hover {
    background:linear-gradient(90deg, rgba(86,151,249,1) 0%, rgba(115,171,255,1) 100%);
  }
  &:active {
    background: linear-gradient(90deg, rgba(32,84,162,1) 0%, rgba(50,79,122,1) 100%);
  }
 

`

const DivHeader =styled.div`
  background-color:red;
  height:8vh;
  margin-bottom:2vh;
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

    filter: [10,
      1000,
      "produto"]
  }

  
  

  FuncComprar (id){
    let listaProdutos
    let novaLista = this.state.carrinho
    let trigger = false
    if (novaLista !== null){
    for (let x of novaLista){
      if (x.id === id){
        trigger = true
      }
    }
  }
    
    if (this.state.carrinho){
    listaProdutos = this.state.carrinho.find(produto => id === produto.id)
    }
    if (novaLista && trigger === true){
      console.log("teste nova lista", novaLista)
      const novoProdutoCarrinho = this.state.carrinho.map((produto) => {
        if (id === produto.id && produto.quantity >0 ) {
          return {
            ...produto,
            quantity: produto.quantity + 1,
          }
        }else if (id !== produto.id){
        return produto}
    })
    this.setState({carrinho: novoProdutoCarrinho })
  } else {
    console.log("teste nova lista")
    const novoProduto = this.state.produtos.find(produto => id === produto.id)

    let novoProdutoCarrinho
    if (novaLista === null){
      console.log("teste nova lista", novaLista)
      let nLista =[novoProduto]
      this.setState({ carrinho: nLista })
    }
   
    else{
      console.log("teste nova lista 23", novaLista)
    novoProdutoCarrinho = [...novaLista,
    { 
      ...novoProduto,
  
    }]
    this.setState({ carrinho: novoProdutoCarrinho })
  
    }
    
    
  }

    
  }
  deleteProd(id){
    console.log("deleteprod teste", id)
    const newList = [...this.state.carrinho]
    let filtrada
    let exists = false
    for (let x of newList){
      if(x.id === id  && x.quantity == 1){
        exists = true
        filtrada = newList.filter((product)=>{
          if (product.id === id){
            return false
          }
          else{
            return true
          }
        })
      }
    }
    if (!exists){
    const newUpdatedList = newList.map((product)=>{
      if (product.id === id && product.price > 0){
        return {...product,
          quantity : product.quantity - 1
        }
      }
      else{
        return {...product}
      }

      }
    )
    this.setState({ carrinho: newUpdatedList})
    }
    else{
      this.setState({carrinho:filtrada})
    }

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
  componentDidUpdate(){
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))

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
    return <DivPage>
      <DivHeader/>
      <DivDisplay>

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
     
      <SiteCart deleteProd= {this.deleteProd.bind(this)} carrinho= {this.state.carrinho}/>
     
      </DivPrincipal>
      </DivDisplay>
      <FloatingWhatsApp phoneNumber = {"5511995770880"}accountName = {"CriadorDoSite"} chatMessage={"Olá, como posso ajudar?"} placeholder={"Digite uma mensagem..."} allowClickAway= {true} className={'WppVoador'} statusMessage= {"Normalmente responde em uma hora"}/>
      </DivPage>
    ;
  }
}

export default App;
