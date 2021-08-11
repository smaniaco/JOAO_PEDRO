import React from 'react'
import styled from 'styled-components'
import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;


`
const ComentContainer = styled.li`
    
    margin:5px 0 0 0;
    border:1px solid black;
    border-radius:5px;
    list-style-type:none;
    padding:0;
    

`
const ComentList = styled.ul`
  display:flex;
  flex-direction: column;
  padding:0;
  padding-left:5px;
  padding-right:5px;
`

const PostHeader = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const PostFooter = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`

const UserPhoto = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`
const PostPhoto = styled.img`
    width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    comentarios : []
  }

  onClickCurtida = () => {
    let novoNumeroCurtidas

    if(this.state.curtido) {
      novoNumeroCurtidas = this.state.numeroCurtidas - 1
    } else {
      novoNumeroCurtidas = this.state.numeroCurtidas + 1
    }

    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: novoNumeroCurtidas
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = (coment) => {
    if (coment != ""){
      this.setState({
        comentando: false,
        numeroComentarios: this.state.numeroComentarios + 1,
        comentarios : [...this.state.comentarios, coment]
      })
      console.log(this.state.comentarios)
  }else{
    alert("Você deve escrever algo antes de enviar o comentário.")
  }

  }

  render() {
    const comnetariosMapeados = this.state.comentarios.map((coment)=>{
      return<ComentContainer>{ coment }</ComentContainer>
    })
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
      <ComentList>{comnetariosMapeados}</ComentList>
    </PostContainer>
  }
}

export default Post
