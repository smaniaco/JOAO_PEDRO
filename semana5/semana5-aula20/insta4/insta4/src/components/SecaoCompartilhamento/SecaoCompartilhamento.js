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
	
	render() {
		return <ShareContainer>
			<IconeSemContador
          icone={twitter}
          onClickIcone={this.onClickMarcar}
         
        />
        <IconeSemContador
          icone={instagram}
          onClickIcone={this.onClickMarcar}
         
        />
        <IconeSemContador
          icone={facebook}
          onClickIcone={this.onClickMarcar}
         
        />
        
        
        
		</ShareContainer>
	}
}
