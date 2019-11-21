import React, { Component } from 'react';
// import Background from '../img/bg-callout.jpg';
import './css/CallToAction.css'

const myStyles = {
    backgroundColor:'#1d809f',
    height: '40vh',
    backgroundSize: 'cover'
}
export class CallToAction extends Component {
    render() {
        return (
             <div>
                <div className="CallToAction" style={myStyles}>
                    <h1>{this.props.title}</h1>
                    <a id="button1" href="#button1">{this.props.button1}</a>
                    <a id="button2" href="#button2">{this.props.button2}</a>
                </div>  
              </div>
        )
    }
}

export default CallToAction;
