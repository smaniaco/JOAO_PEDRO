
import React from 'react' 
import styled from "styled-components";
import axios from 'axios'



const DivMain = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width:100vw;
`


const RegDiv = styled.div`
    & > p {
        text-align:center;
        margin-top:50px;
        margin-bottom:50px;
        font-size:1vw;
    }
    & > input{
        font-size:1em;
        margin:0 auto;
        margin-bottom:1vh;
        width:15vw;
    }

    & >h1 {
        
        text-align:center;
        font-size:2em;
    }
    
    box-sizing:border-box;
    margin:0 auto;
    
    min-width:30vw;
    min-height:40vh;
    display:flex;
    border:solid 2px black;
    flex-direction:column;
    border-radius:5vw;
`



const ButtonReg = styled.button`
    margin-top:10%;
    align-self: center;
   

`

const UserList = styled.span`
    color:blue;
`


export class Register extends React.Component {

    state ={
        email:"",
        nome:"",
        erro:false

    }


    createNewUser =() =>{
        const body = {
            name:this.state.nome,
            email:this.state.email
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {headers:{Authorization:"Marico-da-Silva"}}).then((resposta)=>{
            console.log(resposta.data)
            alert("Usuario Criado com Sucesso")
            this.setState({erro:false})
        }).catch((error)=>{
           console.log("tamanho do erro", error, "length",`${error}`.length)
           alert("Parece que temos um problema")
           this.setState({erro:true})
        })
        this.setState({email:"",nome:""})
       
        
            


        

    }
    onTrigger = (event) => {
        this.props.parentCallback("teste");
        event.preventDefault();
    }
  
    onChangeEmail(event){

        this.setState({email:event.target.value})

    }
    onChangeNome(event){

        this.setState({nome:event.target.value})
    }
   
  render(){ 
    return(
    <DivMain>
        <RegDiv>
            <h1>Registre-se</h1>
            <input type="email" placeholder="Email" onChange={this.onChangeEmail.bind(this)} value={this.state.email}></input>
            <input type="text" value={ this.state.nome} onChange={this.onChangeNome.bind(this)} placeholder="Nome"></input>
            <ButtonReg onClick={this.createNewUser}>REGISTRAR</ButtonReg>
            {this.state.erro === true ? <p>Parece que temos algo errado pr aqui</p> : <p>Usuário criado com sucesso</p>}
            <p>Já é cadastrado? Veja nossa <UserList onClick= {this.onTrigger}>lista de usuários</UserList></p>
        </RegDiv>
        
        
    </DivMain>
  );
}
}


