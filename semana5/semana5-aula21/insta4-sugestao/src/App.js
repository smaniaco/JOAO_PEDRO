import React from 'react';

import Post from './components/Post/Post';
import styled from 'styled-components'

const Form = styled.div `
  display:flex;
  flex-direction:column;
`
const InputE = styled.input`
border-radius:5px;
margin-bottom:5px;
`
const PostPhoto = styled.button`
  border-radius:5px;
  margin-bottom:5px;
`
const ContainerPrincipal = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`

class App extends React.Component {
  state = {
    posts : [{nomeUsuario:'paulinha',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'},{nomeUsuario:'joao',
    fotoUsuario:'https://picsum.photos/50/51',
    fotoPost:'https://picsum.photos/200/151'},{nomeUsuario:'amanda',
    fotoUsuario:'https://picsum.photos/50/52',
    fotoPost:'https://picsum.photos/200/152'}],

    inputNome : "",
    inputPost: "",
    inputFoto: ""
  }
  onChangeInputNome = (event) =>{
    this.setState({inputNome: event.target.value})
  }
  onChangeInputPost = (event) =>{
    this.setState({inputPost: event.target.value})
  }
  onChangeInputFoto = (event) =>{
    this.setState({inputFoto: event.target.value})
  }

  adicionaPost = () =>{
    
    const post = {nomeUsuario:this.state.inputNome,
    fotoUsuario:this.state.inputFoto,
    fotoPost:this.state.inputPost}
 
    this.setState({posts : [post, ...this.state.posts]}) 

  }
  render() {
    const novaLista = this.state.posts.map((poste)=>{
      return <Post nomeUsuario={poste.nomeUsuario} fotoUsuario = {poste.fotoUsuario}
      fotoPost = {poste.fotoPost}>
        </Post>
    })

    return (
      <ContainerPrincipal>
        <Form>
          <InputE type="text" placeholder="nome" value ={ this.state.inputNome } onChange={ this.onChangeInputNome }/>
          <InputE type="text" placeholder= "post" value = { this.state.inputPost } onChange={ this.onChangeInputPost }/>
          <InputE type="text" placeholder = "foto de perfil" value={ this.state.inputFoto } onChange={ this.onChangeInputFoto }/>
          <PostPhoto onClick = {this.adicionaPost}>Enviar</PostPhoto>
        </Form>
        {novaLista}
      </ContainerPrincipal>
    );
  }
}

export default App;
