
import React from 'react' 
import styled from "styled-components";
import axios from "axios"

const DivMain = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width:100vw;
`

const UserCard = styled.div`
    min-width:40vw;
    min-height:20vh;
    border:solid 1px black;
`


export class SpecifiedUser extends React.Component {
  state = {
   id:this.props.id,
   name:this.props.name,
   input: false,
   emailInput:"",
   nameInput:""
  }
  onTrigger = (event) => {
    this.props.parentCallback(this.state.id);
    this.props.backToPage()
    event.preventDefault();
  }
  back = (event)=>{
    this.props.backToPage()
    event.preventDefault();
  }
  openInput = ()=>{
    this.setState({input:!this.state.input})
  }
  editUser = (id)=>{
    const body =  {
      name:this.state.nameInput,
      email:this.state.emailInput

    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, body, {headers:{Authorization:"Marico-da-Silva"}}).then((message)=>{
      console.log(message.data)
      alert("Usuario editado com sucesso")
    }).catch((error)=>{
      console.log(error)
      alert("Problema ao editar o usuário")
    })
    console.log(body)
    this.setState({name:this.state.nameInput})
    this.setState({input:false})
  
  }
  onChangeEmail(event){
    this.setState({emailInput:event.target.value})
  }
  onChangeName(event){
    this.setState({nameInput:event.target.value})
  }
  render(){ 
    return(
    <DivMain>
        <UserCard>
            <h1>{this.state.name}</h1>
            <p>id: {this.state.id}</p>
            {this.state.input ? <div>
              <input type="email" placeholder="Email" onChange={this.onChangeEmail.bind(this)} value={this.state.emailInput}/>
              <input type="text" placeholder="Nome" onChange={this.onChangeName.bind(this)} value={this.state.nameInput}/>
              <button onClick={()=>this.editUser(this.state.id)}>Salvar</button>
              </div>:""}
            <button onClick={this.onTrigger}>Deletar Usuário</button>
            <button onClick={this.back}>Voltar</button>
            { this.state.input === false ? <button onClick={this.openInput}>Editar</button>: ""}
        </UserCard>
    </DivMain>
  );
}
}


