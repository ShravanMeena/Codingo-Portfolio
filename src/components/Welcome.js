import React, { Component } from 'react';
import Background from '../img/bg-callout.jpg';
import './css/Welcome.css'

const myStyles = {
    backgroundImage: `url(${Background})`,
    height: '60vh',
    backgroundSize: 'cover'
}
export class Welcome extends Component {
    render() {
        return (
             <div>
                <div className="Welcome" style={myStyles}>
                    <h1>{this.props.title}</h1>
                    <a href="#button">{this.props.button}</a>
                </div>  
              </div>
        )
    }
}

export default Welcome;
