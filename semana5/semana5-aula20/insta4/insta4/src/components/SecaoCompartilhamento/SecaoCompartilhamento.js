import React, {Component} from 'react'
import styled from 'styled-components'
import twitter from '../../img/twitter.png'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

const ShareContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`



export class SecaoCompartilhamento extends Component {
	state = {
		comentario : ''
	}
  onClickTwitter = () =>{
    console.log("Compartilhado No Twitter com a mensagem: ")
    console.log(this.props.inputMensagem)
  }
  onClickInstagram = () =>{
    console.log("Compartilhado No Instagram com a mensagem: ")
  }
  onClickFacebook = () =>{
    console.log("Compartilhado No Facebook com a mensagem: ")
    console.log(this.props.inputMensagem)
  }
  
	render() {


		return <ShareContainer>
			<IconeSemContador
          icone = {twitter}
          onClickIcone = {this.onClickTwitter}
          inputM = {this.props.inputMensagem}
         
        />
        <IconeSemContador
          icone={instagram}
          onClickIcone={this.onClickInstagram}
          inputM = {this.props.inputMensagem}
         
        />
        <IconeSemContador
          icone={facebook}
          onClickIcone={this.onClickFacebook}
        
         
        />
        
        
        
		</ShareContainer>
	}
}
