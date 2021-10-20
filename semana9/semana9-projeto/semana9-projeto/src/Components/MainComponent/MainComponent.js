import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Card } from "antd";
import Lottie from "react-lottie";
import animationData from "./lotties/heart";
import rocket from "./lotties/rocket-launch.json";
import check from "./svg/check-sign.svg";
import refuse from "./svg/deny-sign.svg";

const MainDiv = styled.div`
  grid-column: 4/5;
  grid-row: 2/7;
  border-radius: 10px;
  row-gap: 5%;
  background-color: white;
  display: grid;
  padding: 1vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 1000px) {
    grid-column: 3/6;
    grid-row: 2/7;
  }
  @media (max-width: 700px) {
    grid-column: 2/7;
    grid-row: 2/7;
  }
  @media (max-width: 1024px) and (min-width: 1020px) and (max-height: 1366px) and (min-height: 1350px) {
    grid-column: 2/7;
    grid-row: 2/7;
  }
`;

const MatchDivContainer = styled.div`
  grid-column: 1/-1;
  grid-row: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const MatchDivSecondContainer = styled.div`
  grid-column: 1/-1;
  grid-row: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;
const Title = styled.h2`
  color: white;
  @media (min-width: 1700px) {
    font-size: 2em;
  }
`;
const Description = styled.h3`
  margin: 0 !important;
  color: white;
  @media (min-width: 1700px) {
    font-size: 1.5em;
  }
`;

const TextDiv = styled.div`
  z-index: 4;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 100%
  );
  width: 100%;
  grid-row: 4/5;
  grid-column: 1/-1;
`;
const ButtonDiv = styled.div`
  z-index: 110;
  width: 100%;
  min-height: 10%;
  grid-row: 5/7;
`;

const MatchesContainerLoading = styled.div`
  padding-bottom: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  grid-column: 2/4;
  grid-row: 3/4;
`;
const ImageMatch = styled.img`
  width: 8vw;
  height: 8vw;

  border-radius: 280px;
  @media (max-width: 1000px) {
    width: 12vw;
    height: 12vw;
  }
  @media (max-width: 700px) {
    width: 18vw;
    height: 18vw;
  }
  @media (max-width: 600px) {
    width: 22vw;
    height: 22vw;
  }
`;
const MatchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2vh 0;
`;

const MatchListDiv = styled.div`
  grid-row: 2/-1;
  grid-column: 1/-1;
  height: 100%;
  & > button {
    font-size: 2vw;
  }
  overflow-y: auto;
`;

const MatchListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-row: 1/-1;
  grid-column: 1/-1;
`;

const TopPanel = styled.div`
  height: 100%;
  width: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-row: 1/2;
  grid-column: 1/-1;
`;

const ImageCandidate = styled.img`
  max-height: 100%;
  width: auto;
  max-width: 100%;
  height: 100%;
  @media (max-width: 1024px) and (min-width: 1020px) and (max-height: 1366px) and (min-height: 1350px) {
    height: 100%;
    width: auto;
  }

  z-index: 100;
`;
const ImageCandidateDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-row: 1/-1;
  grid-column: 1/-1;
  z-index: 3;
`;

const Check = styled.img`
  margin: 0 auto;
  margin-top: 5px;
  position: absolute;
  left: 35%;
  filter: brightness(0);
  width: 9%;
  height: 9%;
  &:hover {
    transition: 1000ms;
    transform: scale(1.2);
    filter: brightness(100%);
  }
  &:active {
    filter: brightness(30%);
  }
  @media (max-width: 600px) {
    width: 13%;
    height: 13%;
    left: 20%;
  }
`;
const Refuse = styled.img`
  position: absolute;
  margin-top: 5px;
  left: 56%;

  width: 9%;
  height: 9%;
  filter: brightness(0);
  &:hover {
    transition: 1000ms;
    filter: brightness(100%);
    transform: scale(1.2);
  }
  &:active {
    filter: brightness(30%);
  }
  @media (max-width: 600px) {
    width: 13%;
    height: 13%;
    left: 67.3%;
  }
`;
const BackPhoto = styled.img`
  box-sizing: border-box;

  grid-row: 1/-1;
  grid-column: 1/-1;
  filter: sepia(60%) blur(2px);
  height: 100%;
  width: 100%;
`;

const MatchesMainDiv = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 70%;
  grid-row: 2/6;
  grid-column: 1/-1;
  width: 100%;
`;

const NoMatches = styled.div`
  grid-row: 2/-1;
  grid-column: 1/-1;
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const LoadingMatchesContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1/-1;
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MatchText = styled.div`
  width: 60%;
`;

const MatchListIcon = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1/1;
  grid-column: 1/1;
`;
const ClearListIcon = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 10%;
  grid-row: 1/1;
  grid-column: 4/5;
`;

export function MainComponent(props) {
  let [profiles, setProfiles] = useState({});
  let [loading, setLoading] = useState(false);
  let [matchList, setMatchListOn] = useState(false);
  let [matches, setMatches] = useState([]);
  let [profileChange, setChange] = useState(false);
  let [defaultOptions, setDefaultOptions] = useState({
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });
  let [defaultOptionsRocket, setDefaultOptionsRocket] = useState({
    loop: true,
    autoplay: true,
    animationData: rocket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });
  let [loadingMatches, setLoadingMatches] = useState(false);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person"
      )
      .then((msg) => {
        setProfiles(msg.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(profiles);
  };
  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches"
      )
      .then((msg) => {
        setMatches([...msg.data.matches]);
        setLoadingMatches(true);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(profiles);
  };
  const choosePerson = (state) => {
    const body = {
      id: profiles.profile.id,
      choice: state,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person",
        body
      )
      .then((msg) => {
        console.log(msg);
      })
      .catch((error) => {
        console.log(error);
      });

    getProfile();
  };
  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear"
      )
      .then((msg) => {
        console.log(msg);
      })
      .catch((error) => {
        console.log(error);
      });
    getProfile();
    matchListOn();
  };
  const matchListOn = () => {
    setMatchListOn(!matchList);
    getMatches();
    setChange(!profileChange);
  };
  const matchElements = matches.map((match) => {
    return (
      <MatchDiv>
        <ImageMatch src={match.photo} />
        <MatchText>
          <h1>{match.name}</h1>
        </MatchText>
      </MatchDiv>
    );
  });

  useEffect(() => {
    getProfile();
  }, [profileChange]);

  return (
    <MainDiv>
      <TopPanel>
        <MatchListIcon onClick={matchListOn} className="play-on-hover" />
        {matchList ? (
          <ClearListIcon
            className="on-hover-clear"
            onClick={clear}
          ></ClearListIcon>
        ) : (
          ""
        )}
      </TopPanel>

      {matchList ? (
        <MatchListContainer>
          {loadingMatches === true ? (
            <MatchListDiv className="scroll">{matchElements}</MatchListDiv>
          ) : (
            <LoadingMatchesContainer className="teste">
              <Lottie options={defaultOptions} height={"5vw"} width={"5vw"} />
            </LoadingMatchesContainer>
          )}
        </MatchListContainer>
      ) : (
        <MatchDivSecondContainer>
          {profiles.profile === null ? (
            <NoMatches>
              <h1>
                Parece que você voou muito alto! Você ja viu todos candidatos
              </h1>
              <Lottie
                options={defaultOptionsRocket}
                height={"15vw"}
                width={"15vw"}
              />
            </NoMatches>
          ) : (
            <MatchDivContainer>
              {loading ? (
                <MatchesMainDiv>
                  <BackPhoto src={profiles.profile.photo} />
                  <ImageCandidateDiv>
                    <ImageCandidate src={profiles.profile.photo} />
                  </ImageCandidateDiv>
                  <TextDiv>
                    <Title>
                      {profiles.profile.name}, {profiles.profile.age}
                    </Title>
                    <Description>{profiles.profile.bio}</Description>
                  </TextDiv>
                </MatchesMainDiv>
              ) : (
                <MatchesContainerLoading>
                  <Lottie
                    options={defaultOptions}
                    height={"5vw"}
                    width={"5vw"}
                  />
                </MatchesContainerLoading>
              )}
              <ButtonDiv>
                <Check onClick={() => choosePerson(true)} src={check} />
                <Refuse onClick={() => choosePerson(false)} src={refuse} />
              </ButtonDiv>
            </MatchDivContainer>
          )}
        </MatchDivSecondContainer>
      )}
    </MainDiv>
  );
}

export default MainComponent;
