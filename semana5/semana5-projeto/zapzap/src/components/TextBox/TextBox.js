import React from 'react'
import styled from "styled-components";

const DivText = styled.div`

display:flex;
flex-direction: column;
box-sizing:border-box;
padding:10px;
word-wrap: break-word;
min-height:90vh;
background-color:lightblue;
width: 100%;
`

export class TextBox extends React.Component {
    
    render() {

     
      return <DivText>
         
          { this.props.lista }
         
        </DivText>;
    }
  }