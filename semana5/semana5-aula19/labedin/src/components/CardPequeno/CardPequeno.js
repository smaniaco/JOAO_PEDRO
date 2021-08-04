import React from 'react';

import styled from 'styled-components'

const Smallcard = styled.div`
    display: flex;
    width: 40vw;
    align-items: center;
    
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`

const Imagem = styled.img`
    width: 50px;
    margin-right: 10px;
`


const CardPequeno = (props)=> {
    
    return (
        <Smallcard>
            <Imagem src={props.imagem}/>
           
                <h4>{ props.area }</h4>
         
        </Smallcard>
    )
}

export default CardPequeno;