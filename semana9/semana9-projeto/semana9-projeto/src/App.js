import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import MainComponent from "./Components/MainComponent/MainComponent"
import 'antd/dist/antd.css'


const MainDiv = styled.div`
  min-height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
 
`

function App() {
  return (
    <MainDiv className="MainDiv">
      
      <MainComponent/>
      </MainDiv>
  );
}

export default App;
