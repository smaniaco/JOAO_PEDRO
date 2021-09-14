import React from 'react' 
import styled from "styled-components";
import axios from 'axios'
import {SpecifiedUser} from '../specifiedUser/specifiedUser'

const DivMain = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width:100vw;
`
const ItemFlex = styled.li`

  & >button {
    width:20px;
    height:20px;
    margin-left:1vw;
    font-size:5px;
  }
  display:flex;
  justify-content: center;
  align-items:center;
  
`

const Title = styled.h1`
  text-align: center;
`

export class Users extends React.Component {
  
  state = {
    list:[],
    user: false,
    userData: [],
    inputSearch:"",
    listSearch: [],
    onSearch: false
  }
  userList = async ()=>{
    
    try {
    const resposta = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {headers:{
      Authorization:"Marico-da-Silva"
    }})
      this.setState({list:resposta.data})
      console.log(resposta.data)
    
  }catch(error){
    console.log(error)
  }
    
    /***axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {headers:{
      Authorization:"Marico-da-Silva"
    }}).then((resposta)=>{
      this.setState({list:resposta.data})
      console.log(resposta.data)
    }).catch((error)=>{
      console.log(error)
    })***/
  }
  
  onTrigger = (event) => {
    this.props.parentCallback("register");
    event.preventDefault();
  }
  backToList = ()=>{
    this.setState({user:false})
    this.userList()
  }
  deleteUser = async (id)=>{
    const question = window.confirm("Quer realmente deletar esse usuário?")
    if (question){
    try{
    const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {headers:{Authorization:"Marico-da-Silva"}})

      alert("Usuário deletado com sucesso")
      const newList = [...this.state.list].filter((item)=>{
        if(item.id !== id){
          return true
        }
        else{
          return false
        }
      })
      this.setState({list:newList})
    
  }catch{
      alert("Erro ao deletar usuário")
    }
  }
  }
  showSpecifiedUser(name,id){
    this.setState({user:true})
    this.setState({userData:[name,id]})
  }
  searchUsers(name){
  const messagem = this.state.list.filter((item)=>{
    if (item.name.includes(name)){
      return true
    }
    else{return false}
  })
  this.setState({listSearch:messagem})
  
  this.setState({onSearch:!this.state.onSearch})
  }
  onChangeSearch(event){
    this.setState({inputSearch:event.target.value})
  }
  componentDidMount(){
    this.userList()
  }
  render(){ 
    const items = this.state.list.map((listItem)=>{
      return <ItemFlex key={listItem.id}> 
        <p onClick={()=>this.showSpecifiedUser(listItem.name,listItem.id)}>Nome: {listItem.name}</p>
        <button onClick={()=>this.deleteUser(listItem.id)} >X</button>
      </ItemFlex>
    })
    const itemSearch = this.state.listSearch.map((listItem)=>{
      return <ItemFlex>
          <p onClick={()=>this.showSpecifiedUser(listItem.name,listItem.id)}>Nome: {listItem.name}</p>
          <button onClick={()=>this.deleteUser(listItem.id)} >X</button>
        </ItemFlex>
    })
    return(
    
    <DivMain>
      
      
      {this.state.user === true ? <SpecifiedUser id={this.state.userData[1]} backToPage={this.backToList.bind(this)} parentCallback={this.deleteUser.bind(this)} name={this.state.userData[0]}/>
      :<div>
      <input onChange={this.onChangeSearch.bind(this)} value={this.state.inputSearch}/>
      <button onClick={()=>this.searchUsers(this.state.inputSearch)}>Buscar</button>
      <button onClick={this.onTrigger}>Voltar para registro</button>
      <Title>Lista de usuários</Title>
      <ol>
        {this.state.onSearch === false ? items:itemSearch}
      </ol>
      </div> }
    </DivMain>
  
  );
}
}


