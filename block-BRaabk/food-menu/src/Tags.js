import React from 'react';
import menu from './data.json';
import Menu from './Menu';

class Tags extends React.Component{
    constructor(props){
        super();
        this.state={
            category:'',
        }
    }

    handleClick=(event)=>{
        this.setState({
            category:event.target.innerText,
        });
    }
    render(){
        let everyone;
        if(this.state.category==='all' || this.state.category===''){
            everyone=menu;
        }
        else{
            everyone=menu.filter((item)=>item.category===this.state.category)
        }
        return(
            <>
                <div className='category'>
                <button onClick={this.handleClick} className='btn'>all</button>
                <button onClick={this.handleClick} className='btn'>breakfast</button>
                <button onClick={this.handleClick} className='btn'>lunch</button>
                <button onClick={this.handleClick} className='btn'>shakes</button>
            </div>
            <Menu everyone={everyone}/>
            </>
        )
    }
}

export default Tags;