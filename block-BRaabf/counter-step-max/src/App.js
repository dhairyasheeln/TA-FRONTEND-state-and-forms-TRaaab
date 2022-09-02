import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super();
    this.state={
      count:0,
      step:1,
      max:99,
    }
  }
  increment=()=>{
    if(this.state.count+this.state.step<= this.state.max){
      this.setState({
        count:this.state.count+this.state.step,
      })
    }
  }

  decrement=()=>{
    this.setState({
      count:this.state.count-this.state.step,
    })
  }

  setStep=(event)=>{
    this.setState({
      step:Number(event.target.innerText),
    })
    console.log(event.target.innerText);
  }

  setMax=(event)=>{
    this.setState({
      max:Number(event.target.innerText),
    })
    console.log(event.target.innerText);
  }

  reset=()=>{
    this.setState({
      count:0,
    })
  }
  render(){
    return (
      <div className="frame">
        <center className="container">
          <h1 className="heading">Counter Application</h1>
          <div className="count-outer">
          <h2 className="count center">{this.state.count}</h2>
          </div>
          <div className="flex">
            <div className="step-outer">
              <p className="step-label">Steps</p>
              <button className="five btn btn-step" onClick={this.setStep}>5</button>
              <button className="ten btn btn-step" onClick={this.setStep}>10</button>
              <button className="fifteen btn btn-step" onClick={this.setStep}>15</button>
            </div>
            <div className="max-outer">
              <p className="max-label">Max Value</p>
              <button className="fifteen btn btn-max" onClick={this.setMax}>15</button>
              <button className="fifteen btn btn-max" onClick={this.setMax}>100</button>
              <button className="fifteen btn btn-max" onClick={this.setMax}>200</button>
            </div>
          </div>
          <div className="counter-outer">
            <button className="inc btn btn-count" onClick={this.increment}>Increment</button>
            <button className="dec btn btn-count" onClick={this.decrement}>Decrement</button>
            <button className="res btn btn-count" onClick={this.reset}>Reset</button>
          </div>
        </center>
      </div>
    );
  }
}

export default App;
