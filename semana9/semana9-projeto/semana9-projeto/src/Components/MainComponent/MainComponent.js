import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import axios from "axios"
import {Card} from "antd"
import Lottie from 'react-lottie';
import animationData from "./lotties/heart"
import rocket from "./lotties/rocket-launch.json"
import check from "./svg/check-sign.svg"
import refuse from "./svg/deny-sign.svg"

const MainDiv = styled.div`
  font-size:16px;
  height:600px;
  @media (max-width:2500px){
    height:1300px;
    font-size:2em;
  }
  @media (max-width:2200px){
    height:1200px;
    font-size:1.2em;
  }
  @media (max-width:1900px){
    font-size:1em;
    height:1000px;
  }
  @media (max-width:1500px){
    height:850px;
  }
  @media (max-width:1300px){
    height:800px;
  }
  @media (max-width:1000px){
    font-size:1em;
    height:660px;
    width:50%;
  }
  @media (max-width:800px){
    height:650px;
    width:60%;
  }
  @media (max-width:600px){
    height:650px;
    width:70%;
  }
  @media (max-width:500px){
    height:600px;
    width:80%;
  }
  @media (max-width:400px){
    height:550px;
    width:90%;
  }
  @media (max-width:1980px) and (max-height:1300px) and (min-height:1100px){
    height:950px;
    width:40%;
 
  }
  @media (max-width:400px) and (max-height:850px){
    height:650px;
  }

  width:40%;
  background-color:white;
  border-radius:15px;
  border:1px black solid;
  padding:1vw;
`
const Title = styled.h2`
  color:white;
`
const Description = styled.h3`
  margin:0 !important;
  color:white;
`

const TextDiv = styled.div`
  z-index:4;
  padding:5px;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(0deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
  width:100%;
  grid-row:4/5;
  grid-column:1/-1;
  
`
const ButtonDiv = styled.div`
  margin-top:10px;
  z-index:110;
  width:100%;
  min-height:10%;
 

`
const ButtonDivBoxCheck = styled.div`
  width:100%;
  grid-column: 1;
`
const ButtonDivBoxRefuse = styled.div`
  width:100%;
  grid-column: 3;

`


const MatchesContainer = styled.div`
  
    height:100%;
  

`
const MatchesContainerFather = styled.div`
@media (max-height:800px){
  height:80%;
}
  
    height:100%;
  

`
const MatchesContainerLoading = styled.div`
  padding-bottom:20%;
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
  

`
const ImageMatch = styled.img`
  width:8vw;
  height:8vw;
  margin-right:5vw;
  border-radius:280px;
`
const MatchDiv = styled.div`
  display:flex;
  align-items: center;
  margin:2vh 0;
`

const MatchListDiv = styled.div`
  height:100%;
  & > button{
    font-size:2vw;
  }
  overflow-y: auto;
`

const MatchListContainer = styled.div`

  height:80%;

`

const TopPanel = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom:5px;
  height:10%;
  margin-bottom:20px;
  
`

const ImageCandidate = styled.img`

  max-height:100%;
  width:auto;
  max-width:100%;
  height:auto;


  z-index:100;
  
  
`
const ImageCandidateDiv = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  grid-row:1/-1;
  grid-column:1/-1;
  z-index:3;
`

const Check = styled.img`
  margin:0 auto;
  margin-top:5px;
  position:absolute;
  left:35%;
  filter: brightness(0);
  width:9%;
  height:9%;
  &:hover {
    transition:1000ms;
    transform: scale(1.2);
    filter: brightness(100%);
  }
  &:active{
    filter: brightness(30%);
  }
  @media (max-width:600px){
    left:20%;
    width:15%;
  height:15%;
  
  }
  @media (max-height:500px){
    left:30%;
    width:8vw;
  height:8vw;
  }
  
`
const Refuse = styled.img`
  
  position:absolute;
  margin-top:5px;
  left:56%;
 
  width:9%;
  height:9%;
  filter: brightness(0);
  &:hover {
    
    transition:1000ms;
    filter: brightness(100%);
    transform: scale(1.2)
  }
  &:active{
    filter: brightness(30%);
  }
  @media (max-width:600px){
    width:15%;
  height:15%;
  left:65%;
  }
  @media (max-height:500px){
    left:62%;
    width:8vw;
  height:8vw;
  }
`
const BackPhoto = styled.img`
  grid-row:1/-1;
  grid-column:1/-1;
  filter:blur(3px);
  height:100%;
  width:100%;
 
`




const MatchesMainDiv = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height:70%;
  
  width:100%;
 
`

const NoMatches = styled.div`
  
  text-align:center;
  flex-direction:column;
  display:flex;
  align-items:center;
  justify-content: center;
  height:100%;
  width:100%;
`
const LoadingMatchesContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
`

const CorpNote = styled.p`
  text-align:center;
  opacity:0.5;
  color:#222222;
`

export function MainComponent(props) {
  let [profiles, setProfiles] = useState({})
  let [loading, setLoading] = useState(false)
  let [matchList, setMatchListOn] = useState(false)
  let [matches, setMatches] = useState([])
  let [defaultOptions, setDefaultOptions ]= useState({
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }})
  let [defaultOptionsRocket, setDefaultOptionsRocket ]= useState({
    loop: true,
    autoplay: true,
    animationData: rocket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }})
  let [loadingMatches, setLoadingMatches] =  useState(false)

  const getProfile =  () =>{
    
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person").then(msg=>{
      setProfiles(msg.data)
      setLoading(true)
    }).catch((error)=>{
      console.log(error)
    })
    console.log(profiles)
    
  }
  const getMatches = ()=>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches").then(msg=>{
      setMatches([...msg.data.matches])
      setLoadingMatches(true)
    }).catch((error)=>{
      console.log(error)
    })
    console.log(profiles)
    
  }
  const choosePerson =(state)=>{
    const body = {
      "id": profiles.profile.id,
      "choice": state
    }
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person", body).then(msg=>{
     console.log(msg)
    }).catch((error)=>{
      console.log(error)
    })

    getProfile()
    
  }
  const clear =()=>{
    
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear").then(msg=>{
     console.log(msg)
    }).catch((error)=>{
      console.log(error)
    })
    getProfile()
    matchListOn()
    
  }
  const matchListOn = ()=>{
    setMatchListOn(!matchList)
    getMatches()
  }
  const matchElements = matches.map((match)=>{
    return <MatchDiv>
    <ImageMatch src={match.photo}/>
    <h1>{match.name}</h1>
 
    </MatchDiv>
  })
  
  useEffect (()=>{
    
    getProfile()
  },[])



  return (
    <MainDiv>
      
      <TopPanel >
      <div onClick={matchListOn} className="play-on-hover">
      </div>
      
      {matchList ? <div className="on-hover-clear" onClick={clear}></div> : ""}
      </TopPanel>
      {matchList ? 
      <MatchListContainer>
       {loadingMatches === true ?
      <MatchListDiv className="scroll">
        
        {matchElements}
      </MatchListDiv>:<LoadingMatchesContainer><Lottie 
      
	    options={defaultOptions}
        height={"5vw"}
        width={"5vw"}
      />
      </LoadingMatchesContainer>
      }
      </MatchListContainer>:
      <MatchesContainerFather>
      {loading ?
      <MatchesContainer>
      
      {profiles.profile === null ? <NoMatches><h1>Parece que você voou muito alto!
        Você ja viu todos candidatos</h1>
        <Lottie 
      
	    options={defaultOptionsRocket}
        height={"15vw"}
        width={"15vw"}
      />
      </NoMatches>:
      <MatchesContainer>
      <MatchesMainDiv>
        <BackPhoto src={profiles.profile.photo}/>
        <ImageCandidateDiv>
        <ImageCandidate src={profiles.profile.photo}/>
        </ImageCandidateDiv>
        <TextDiv>
      <Title>{profiles.profile.name}, {profiles.profile.age}</Title>
      <Description>{profiles.profile.bio}</Description>
      </TextDiv>
      </MatchesMainDiv>
      <ButtonDiv>
      <Check onClick={() => choosePerson(true)} src={check}/>
      <Refuse onClick={()=> choosePerson(false)} src={refuse}/>
      
      </ButtonDiv>
    </MatchesContainer>
} 
    
    </MatchesContainer> 
      :<MatchesContainerLoading><Lottie 
      
	    options={defaultOptions}
        height={"5vw"}
        width={"5vw"}
      /></MatchesContainerLoading>} 
   

      </MatchesContainerFather>


      }
      </MainDiv>
  );
}


export default MainComponent;