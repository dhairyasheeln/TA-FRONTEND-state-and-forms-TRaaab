import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imgSrc:'',
    }
  }
  render(){
    return (
      <>
        <button>Basketball</button>
        <button>PubG</button>
        <button>Tiger</button>
        <button>Phone</button>
        <button>Laptop</button>
        <button>Cricket</button>

        <img src="./assets/cricket.jpg" alt="hero img"/>
      </>
  );
}
}

export default App;
