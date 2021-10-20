import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import MainComponent from "./Components/MainComponent/MainComponent";
import "antd/dist/antd.css";

const MainDiv = styled.div`
  min-height: 100vh;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 3fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 100vh;
`;

const Header = styled.header`
  grid-column: 1/-1;
  grid-row: 1;
  display: flex;
  width: 100%;
`;

const Bar = styled.div`
  & > h1 {
    font-size: 3em;
    text-align: center;
    color: white;
    font-family: "Courgette", cursive;
    margin: 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  background: rgb(252, 69, 69);
  background: linear-gradient(
    180deg,
    rgba(252, 69, 69, 1) 0%,
    rgba(255, 144, 144, 1) 50%,
    rgba(252, 69, 69, 1) 100%
  );
`;

const Footer = styled.footer`
  grid-row: 7/8;
  grid-column: 1/-1;
  display: flex;
  align-items: flex-end;
`;

const FooterBar = styled.div`
  & > p {
    font-size: 1.3em;
    text-align: center;
    color: #222222;
    font-family: "Roboto", sans-serif;
  }
  height: 50%;
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(232, 232, 232, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <MainDiv className="MainDiv">
      <Header>
        <Bar>
          <h1>Love Finder</h1>
        </Bar>
      </Header>
      <MainComponent />
      <Footer>
        <FooterBar>
          <p>Todos os direitos reservados</p>
        </FooterBar>
      </Footer>
    </MainDiv>
  );
}

export default App;
