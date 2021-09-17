
import styled from "styled-components"
import React from 'react';
import axios from "axios"




const DivMain = styled.div`
    min-height:100vh;
    width:100%;
    display:grid;
    grid-template-rows: 10% 10% 60% 20%;
    grid-template-columns:20% 20% 20% 20% 20%;

`
const Title = styled.div`
    text-align: center;
    grid-row:2;
    grid-column:2/5;

`
const PlaylistsDiv = styled.div`
  border:1px black solid;
  grid-column:1/4;
  grid-row:3;
  
`

const MusicDiv = styled.div`
  border:1px black solid;
  grid-column:4/6;
  grid-row:3;

`






export class Logged extends React.Component {

  state={
    name :this.props.name,
    list:[]
  }
  
  listCatcher = async()=>{
    let response
    try{
      response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {headers:{Authorization : this.state.name}})
    } catch(error){
      console.log(error)
    }
    
  }
  render(){
 
  return (
    <DivMain>
        <Title>
            <h1>{this.state.name} playlist</h1>
        </Title>
        <PlaylistsDiv>
          Playlist
          </PlaylistsDiv>  
          <MusicDiv>
            musicas
          </MusicDiv>
    </DivMain>
  );
  }
}


