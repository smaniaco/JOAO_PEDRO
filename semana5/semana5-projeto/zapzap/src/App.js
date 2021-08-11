import React from "react";
import styled from "styled-components";
import { DivPrincipal } from "./components/DivPrincipal/DivPrincipal";


const DivR = styled.div`

height: 100vh;
margin:0 ;
padding:0;


`

class App extends React.Component {
 
  
  render() {
    
    return <DivR>
     
      <DivPrincipal>
      </DivPrincipal>;
      </DivR>
  }
}

export default App;
