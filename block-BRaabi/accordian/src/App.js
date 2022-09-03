import logo from './logo.svg';
import './App.css';
import faqs from './data.json';
import React from 'react';


class App extends React.Component {
  constructor(props){
    super();
    this.state={
      activeIndex:null,
    }
  }

  changeState=(index)=>{
    this.setState({
      activeIndex:this.state.activeIndex===index?null:index,
    })
  }
  
  render(){
    return (
      <div className='container'>
        <h1 className='heading'>Altcampus FAQ</h1>
        <ul>
        {faqs.map((faq,index)=>
          (<li className='faq-outer'>
            <h2 onClick={()=>this.changeState(index)} className={this.state.activeIndex===index?'active':'question'}>{faq.Q} {this.state.activeIndex===index?'👆':'👇'}</h2>
            {
              index===this.state.activeIndex?<p className='answer'>{faq.A}</p>:''
            }
          </li>)
        )}
        </ul>
      </div>
    );
  }
}

export default App;
