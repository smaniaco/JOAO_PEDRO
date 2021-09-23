import styled from "styled-components"
import axios from "axios"
import React from "react"


const MainDiv = styled.div`
  height:100%;
`
const Header = styled.header`
  display:flex;
  height:10%;
  width:100%;
`

const Footer = styled.footer`
  height:20%;
`

const MenuUl = styled.ul`
  display: flex;
  padding:0;
  width:50%;
  list-style-type: none;
  justify-content: space-around;
  
`

const Landing = styled.div`
  height:80%;
  display: flex;
  align-items:center;
  justify-content: center;

`

const ButtonsDiv = styled.div`

`

export class Find extends React.Component {
  render(){
  return (
    <MainDiv>
        <h1>Procure</h1>
    </MainDiv>
  )}
}


