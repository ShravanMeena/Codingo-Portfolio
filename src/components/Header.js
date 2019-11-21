import React, { Component } from 'react';
import Background from '../img/bg-masthead.jpg';
import './css/Header.css'

const myStyles = {
    backgroundImage: `url(${Background})`,
    height: '60vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
}
export class Header extends Component {
    render() {
        return (
             <div>
                <header style={myStyles}>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                    <a href="#button">{this.props.button}</a>
                </header>  
              </div>
        )
    }
}

export default Header;
