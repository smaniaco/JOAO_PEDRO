
import React from 'react' 
import styled from "styled-components";
import { Register } from "./Components/Register/Register"
import { Users } from "./Components/Users/Users"
import './App.css';





class App extends React.Component {
  state = {
    page:"register"
  }
  handleCallbackPageChange = (childData) =>{
    this.setState({page:childData})
}
  render(){ 
    return(
    <div className="App">
      {this.state.page ==="register" ? <Register parentCallback = {this.handleCallbackPageChange}/>:<Users parentCallback = {this.handleCallbackPageChange}/>}
    </div>
  );
}
}

export default App;
