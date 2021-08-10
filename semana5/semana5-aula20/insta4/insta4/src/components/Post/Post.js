import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhamento } from '../SecaoCompartilhamento/SecaoCompartilhamento'
import iconeMarcarDesativado from '../../img/marcar.png'
import iconeMarcarAtivo from '../../img/marcarAtivo.png'
import compartilhar from '../../img/compartilhar.png'




const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
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
    marcado : false,
    compartilhar : false,
    message : ""
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    if (this.state.curtido === false){
      this.setState({curtido : true})
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})}
      
    else{
      this.setState({curtido : false})
      this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})
    }

  }

  onClickMarcar = () => {
    
    if (this.state.marcado=== false){
      this.setState({marcado : true})}
      
    else{
      this.setState({marcado : false})
    }

  }
  onClickComp = () => {

    if (this.state.compartilhar=== false){
      this.setState({compartilhar : true})}
      
    else{
      this.setState({compartilhar : false})
    }

  }
  

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  callbackFunction = (childData) => {
    this.setState({message: childData})
  } 



  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida
    let iconeMarcar
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.marcado) {
      iconeMarcar = iconeMarcarDesativado
    } else {
      iconeMarcar = iconeMarcarAtivo
    }

    let componenteComentario
    let componenteCompartilhar
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} parentCallback = {this.callbackFunction}/>
    }
    if(this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhamento inputMensagem ={this.state.message} />
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
        <IconeSemContador
          icone={compartilhar}
          onClickIcone={this.onClickComp}
         
        />
         <IconeSemContador
          icone={iconeMarcar}
          onClickIcone={this.onClickMarcar}
         
        />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        
        
        
        

        

        
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post