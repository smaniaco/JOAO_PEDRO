import styled from "styled-components";
import React from "react";
import axios from "axios";
import close from "../../images/close.png";
import play from "../../images/play.png";
import LogoPlace from "../../images/logo-placeholder-1.png";

const DivMain = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 10% 10% 60% 20%;
  @media (max-width: 800px) {
    grid-template-rows: 5% 5% 70% 20%;
  }
  grid-template-columns: 20% 20% 20% 20% 20%;
`;

const FormTrack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    font-family: "Roboto";

    margin-top: 5%;
    margin-bottom: 5%;
    align-self: center;
    font-weight: bold;
    border-radius: 10px;

    color: #222222;
    border: none;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  & > input {
    font-size: 1em;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom: 1vh;
    width: 15vw;
  }
  & > p {
    text-align: center;
  }
`;

const FormTrackInputs = styled.div`
  & > button {
    font-family: "Roboto";

    margin-top: 5px;
    margin-bottom: 5px;
    align-self: center;
    font-weight: bold;
    border-radius: 10px;

    color: #222222;
    border: none;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  & > input {
    font-size: 1em;

    border-radius: 5px;

    width: 15vw;
  }
  & > p {
    text-align: center;
  }
  padding: 1vw;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px black solid;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
& > button {
    font-family: "Roboto";
    margin-right:5vw;
    margin-top: 5%;
    margin-bottom: 5%;
    align-self: center;
    font-weight: bold;
    border-radius: 10px;
    background-color: rgba(255, 0, 0, 0.5);
    color: white;
    border: none;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  display: flex;
  padding-left: 1vw;
  @media (max-width: 800px) {
    padding-left: 0;
  }
  grid-row: 1/2;
  grid-column: 1/6;

  background-color: #c4c4c4;
  border-bottom: 1px solid black;
  opacity: 0.7;
  align-items: center;
`;

const Logo = styled.img`
  height: 100%;
  @media (max-width: 800px) {
    display: none;
    height: 50%;
  }
`;

const NavMenu = styled.ul`
  & > li {
    &:hover {
      color: grey;
    }
  }
  & > a {
    color: black;
    text-decoration: none;
    &:hover {
      color: grey;
    }
  }
  list-style-type: none;
  width: 100%;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
  }
`;

const Footer = styled.div`
  grid-row: 4/6;
  grid-column: 1/-1;
  width: 100%;
  background-color: #222222;
  margin-top: 1%;
  text-align: center;
  color: white;
`;

const Bottom = styled.div`
  grid-row: 1/2;
  grid-column: 1/-1;
  width: 100%;
  background-color: red;
`;

const Title = styled.div`
  & > h1 {
    margin: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #222222;
    height: 100%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 2;
  grid-column: 1/-1;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const PlaylistsDiv = styled.div`
  & > button {
    margin-top: 5%;
  }
  & > h1 {
    width:80%;
    text-align:center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color:rgba(255, 255, 255, 0.5);
    margin-bottom:0;
  }
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1/4;
  grid-row: 3;
  margin-top: 1vh;
`;
const PlaylistBox = styled.div`
  border-radius: 2px;
  background-image: url("../../images/close.png");
  width: 80%;
  height: 20vh;

  border: solid 1px black;
  overflow-y: auto;
  white-space: nowrap;
`;
const PlayListItems = styled.div`
  

  & > button {
    height: 2vw;
    width: 3vw;
    font-size: 1vw;
  }
  & > h2 {
    font-size: 1.7vw;
    @media (max-width: 800px) {
      font-size: 5vw;
    }
    cursor:pointer;
  }
  background-color: rgba(255, 255, 255, 0.5);

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.5),
    rgba(0, 0, 0, 0.5)
  );
  border-bottom: 1px rgba(0, 0, 0, 0.5) solid;
  padding: 0 10px;
`;

const PlaylistTitle = styled.div`
  & > h2 {
    margin-right:1.5vw;
    font-size:1.6vw;
  }
  cursor:pointer;
  display:flex;
  align-items:center;
  box-sizing:border-box;
  justify-content: space-around;

`

const PlaylistIcons = styled.div`
  & > img {
    width: 1vw;
    height: 1vw;
    @media (max-width: 800px) {
      width: 5vw;
      height: 5vw;
    }
    &:hover {
      filter: brightness(0%);
    }
    &:active {
      width: 1.5vw;
      height: 1.5vw;
      @media (max-width: 800px) {
        width: 5vw;
        height: 5vw;
      }
    }
  }
  & > h3{
    line-height: 20px;
    font-size:1.5vw;
    color:white;
    &:hover{
      filter: brightness(0%);
    }
    cursor:pointer;
    
  }
  width:40%;
  display:flex;
  align-items:center;
  justify-content: space-around;
  
`
const SendPlayList = styled.div`
  & > button {
    font-family: "Roboto";

    margin-top: 5%;
    margin-bottom: 5%;
    align-self: center;
    font-weight: bold;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    color: #222222;
    border: none;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  display: flex;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 0;
  border-left: black 1px solid;
  border-right: black 1px solid;
  border-bottom: black 1px solid;
  width: 80%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

const MusicDiv = styled.div`
  & > h1 {
      width:80%;
      text-align:center;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color:rgba(255, 255, 255, 0.5);
      margin-bottom:0;
  }
  display: flex;
  margin-top: 3vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  @media (max-width: 800px) {
    margin-top: 100px;
    z-index: 999;
    margin-bottom: 100px;
  }
  grid-column: 4/6;
  grid-row: 3/4;
`;

const MusicBox = styled.div`
  background-color: rgba(255, 255, 255, 0.5);

  box-sizing:border-box;
  padding:1vw;
  width: 80%;
  height: 90%;
  @media (max-width: 800px) {
    height: 20vh;
  }
  overflow-y: auto;
  white-space: nowrap;
`;

const MusicItem = styled.div`
  & > img {
    width: 1vw;
    height: 1vw;
    @media (max-width: 800px) {
      width: 5vw;
      height: 5vw;
    }
    &:hover {
      filter: brightness(0%);
    }
    &:active {
      width: 1.5vw;
      height: 1.5vw;
    }
  }

  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Player = styled.div`
  
    position: fixed;
    top:85vh;
    animation-duration: 3s;
    animation-name: slidein;
    @keyframes slidein {
    from {
      margin-left: 100%;
    
    }
  
    to {
      margin-left: 0%;
      
    }
  }

`

const Form = styled.div`
position: fixed;
    top:35vh;
    animation-duration: 3s;
    animation-name: slidein;
    @keyframes slidein {
    from {
      margin-left: 100%;
    
    }
  
    to {
      margin-left: 0%;
      
    }
  }
`


export class Logged extends React.Component {
  state = {
    name: this.props.name,
    list: [],
    songList: [],
    createPlaylist: false,
    addTrack: false,
    audioLink: "",
    audioPlay: false,
    spotifyOn: false,
    playlistName: "",
    playlistId: "",
    inputAddTrack: "",
    inputAddTrackArtist: "",
    inputAddTrackLink: "",
    inputSpotify: "",
    spotifyAuth: "",
    playlistNameDisplay:""
  
  };
  createList = async () => {
    if (this.state.playlistName !== "") {
      let response;
      const body = {
        name: this.state.playlistName,
      };

      try {
        response = await axios.post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
          body,
          { headers: { Authorization: this.state.name } }
        );
      } catch (error) {
        console.log(error);
      }

      this.setState({ playlistName: "" });
      this.listCatcher();
    } else {
      alert("Não aceitamos espaços em branco");
    }
  };
  

  deletePlaylist = async (id) => {
    let response;
    try {
      response = await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        { headers: { Authorization: this.state.name } }
      );
    } catch (error) {
      console.log(error);
    }
    this.listCatcher();
  };

  listCatcher = async () => {
    let response;

    try {
      response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        { headers: { Authorization: this.state.name } }
      );
    } catch (error) {
      console.log(error);
    }
    response = response.data.result.list;

    this.setState({ list: [...response] });
  };

  getTracks = async (id, name) => {
    let response;

    try {
      response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        { headers: { Authorization: this.state.name } }
      );
    } catch (error) {
      console.log(error);
    }

    this.setState({ songList: response.data.result.tracks });
    this.setState({ playlistId: id });
    this.setState({playlistNameDisplay:name})
  };

  addTrack = async (id) => {
    if (
      this.state.inputAddTrack !== "" &&
      this.state.inputAddTrackArtist !== "" &&
      this.state.inputAddTrackLink !== "" &&
      this.state.playlistId !== ""
    ) {
      let response;
      const body = {
        name: this.state.inputAddTrack,
        artist: this.state.inputAddTrackArtist,
        url: this.state.inputAddTrackLink,
      };

      try {
        response = await axios.post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
          body,
          { headers: { Authorization: this.state.name } }
        );
      } catch (error) {
        console.log(error);
      }

      this.setState({ inputAddTrack: "" });
      this.setState({ inputAddTrackArtist: "" });
      this.setState({ inputAddTrackLink: "" });
      this.getTracks(this.state.playlistId);
      this.addTrackShow();
    } else {
      alert(
        "ops, parece que você deixou um espaço em branco ou esqueceu de clicar em uma playlist"
      );
    }
  };
  deleteTrack = async (id) => {
    let response;
    try {
      response = await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks/${id}`,
        { headers: { Authorization: this.state.name } }
      );
    } catch (error) {
      console.log(error);
    }
    this.getTracks(this.state.playlistId);
  };

  playTrack = (link) => {
    this.setState({ audioLink: link });
    this.setState({ audioPlay: !this.state.audioPlay });
  };
 
  
  addTrackShow = () => {
    this.setState({ addTrack: !this.state.addTrack });
  };
  sendName(event){
    
    this.props.mainComp(this.state.input)
    event.preventDefault()
    
    
  }
  onChangeNome(event) {
    this.setState({ playlistName: event.target.value });
  }
  onChangeTrack(event) {
    this.setState({ inputAddTrack: event.target.value });
  }
  onChangeTrackArtist(event) {
    this.setState({ inputAddTrackArtist: event.target.value });
  }
  onChangeTrackLink(event) {
    this.setState({ inputAddTrackLink: event.target.value });
  }
  onChangeSpotify(event) {
    this.setState({ inputSpotify: event.target.value });
  }
  componentDidMount() {
    this.listCatcher();
  }
  render() {
    
    const listItems = this.state.list.map((playlist) => {
      return (
        <PlayListItems key={playlist.id}>
          <PlaylistTitle>
            {playlist.name.length < 12 ?
          <h2 onClick={() => this.getTracks(playlist.id, playlist.name)}>{playlist.name}</h2>
          :  <h2 onClick={() => this.getTracks(playlist.id, playlist.name)}>{playlist.name.slice(0, 12)}...</h2> }
          {this.state.playlistNameDisplay === playlist.name ? <p>►</p>:""}
          </PlaylistTitle>
          <PlaylistIcons>
            
          <h3 onClick={() => this.getTracks(playlist.id, playlist.name)}>ABRIR PLAYLIST</h3>
          <img src={close} onClick={() => this.deletePlaylist(playlist.id)} />
          </PlaylistIcons>
        </PlayListItems>
      );
    });
    const songList = this.state.songList.map((song) => {
      return (
        <MusicItem key = {song.id}>
          {" "}
          <h3>
            <span onClick={() => this.playTrack(song.url)}>{song.name}</span> -{" "}
            {song.artist}
          </h3>
          <PlaylistIcons>
          <img id="play" src={play} onClick={() => this.playTrack(song.url)}/>
          <img src={close} onClick={() => this.deleteTrack(song.id)}/>
          </PlaylistIcons>
        </MusicItem>
      );
    });
    return (
      <DivMain>
        <Header>
          <Logo src={LogoPlace} />
          <NavMenu>
            <a href="#">
              <li>HOME</li>
            </a>
          </NavMenu>
          <button onClick={this.sendName.bind(this)}>SAIR</button>
        </Header>
        <Title id="titulo">
          <h1>Usuario: {this.state.name}</h1>
          
        </Title>
        <PlaylistsDiv>
          <h1>Playlists</h1>
          <PlaylistBox id="playlistid">{listItems}</PlaylistBox>

          {!this.state.createPlaylist ? (
            <SendPlayList>
              <p>NOME</p>
              <input
                value={this.state.playlistName}
                onChange={this.onChangeNome.bind(this)}
              />
              <button onClick={() => this.createList(this.state.playlistId)}>
                ADICIONAR PLAYLIST
              </button>
            </SendPlayList>
          ) : (
            <button>CRIAR</button>
          )}
        </PlaylistsDiv>
        <MusicDiv>
          <h1>Musicas</h1>
          <MusicBox>{songList}</MusicBox>
          {this.state.addTrack ? (
            <Form>
              <FormTrackInputs>
                <p>Nome:</p>
                <input
                  value={this.state.inputAddTrack}
                  onChange={this.onChangeTrack.bind(this)}
                />
                <p>Artista:</p>
                <input
                  value={this.state.inputAddTrackArtist}
                  onChange={this.onChangeTrackArtist.bind(this)}
                />
                <p>Link:</p>
                <input
                  value={this.state.inputAddTrackLink}
                  onChange={this.onChangeTrackLink.bind(this)}
                />

                <button onClick={() => this.addTrack(this.state.playlistId)}>
                  ENVIAR
                </button>
                <button onClick={this.addTrackShow}>CANCELAR</button>
              </FormTrackInputs>
            </Form>
          ) : (
            <FormTrack>
              <button onClick={this.addTrackShow}>ADD TRACK</button>
            </FormTrack>
          )}
         
          {this.state.audioPlay ? (
            <Player>
            <audio controls>
              <source src={this.state.audioLink} type="audio/ogg" />
            </audio>
            </Player>
          ) : (
            ""
          )}
          
        </MusicDiv>
        <Footer>
          <p>Todos os direitos não reservados</p>
        </Footer>
      </DivMain>
    );
  }
}
