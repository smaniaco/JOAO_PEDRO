import React from 'react';

import styled from 'styled-components'

const BigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const BigCardInside = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const TitleFour = styled.h4`
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <BigCard>
            <Imagem src={ props.imagem } />
            <BigCardInside>
                <TitleFour>{ props.nome }</TitleFour>
                <p>{ props.descricao }</p>
            </BigCardInside>
        </BigCard>
    )
}

export default CardGrande;