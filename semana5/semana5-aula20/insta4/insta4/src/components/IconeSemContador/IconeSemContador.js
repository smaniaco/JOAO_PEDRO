import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	width:40px;

`

export function IconeSemContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'}  src={props.icone} onClick={props.onClickIcone}/>
		
	</IconContainer>
}