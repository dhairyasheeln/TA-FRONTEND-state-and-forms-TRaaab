import React from 'react';

class Menu extends React.Component{
    constructor(props){
        super();
    }
    render(){
        console.log(this.props.everyone);
        return(
            <div>
                <ul className='menu-outer flex'>
                {this.props.everyone.map((item,index)=>{
                    return(
                        <li key={index} className='item-outer width-45 flex'>
                            <div className='image width-30'>
                                <img alt={item.title} src={item.img}/>
                            </div>
                            <div className='text width-65'>
                                <div className='flex price-title'>
                                    <h3 className='title'>{item.title.toUpperCase()}</h3>
                                    <span className='price'>${item.price}</span>
                                </div>
                                <hr className='title-line'/>
                                <p className='desc'>{item.desc}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            </div>
        )
    }
}

export default Menu;