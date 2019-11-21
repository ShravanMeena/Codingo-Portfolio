import React, { Component } from 'react';
// import Background from '../img/bg-callout.jpg';
import './css/About.css'

const myStyles = {
    backgroundColor:'#f8f9fa',
    height: '50vh',
    backgroundSize: 'cover'
}
export class About extends Component {
    render() {
        return (
             <div>
                <div className="About" style={myStyles}>
                    <h1>{this.props.title}</h1>
                    <p>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash!</p>
                    <a href="#button">{this.props.button}</a>
                </div>  
              </div>
        )
    }
}

export default About;
