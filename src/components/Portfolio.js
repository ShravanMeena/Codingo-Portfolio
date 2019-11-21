import React, { Component } from 'react'
import './css/Portfolio.css'

export class Portfolio extends Component {
    render() {
        return (
            <div>
               <div className="HeadP">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                </div>  
                <div className="container">       
                    <MainCard myTitle={cardInfo[0].title} myDescription={cardInfo[0].description} newTitle={cardInfo[0].title1}/>
                    <MainCard myTitle={cardInfo[1].title} myDescription={cardInfo[1].description} newTitle={cardInfo[1].title1}/>
                    <MainCard myTitle={cardInfo[2].title} myDescription={cardInfo[2].description} newTitle={cardInfo[2].title1}/>
                    <MainCard myTitle={cardInfo[3].title} myDescription={cardInfo[3].description} newTitle={cardInfo[3].title1}/>
                </div>
            </div>
        )
    }
}

const cardInfo =  [
    {
        title: "Project 1",
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        title1: 1
    },
    {
        title: "Project 2",
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        title1: "2"
    },
    {
        title: "Project 3",
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        title1: "3"
    },
    {
        title: "Project 4",
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        title1: "4"
    }
]

class MainCard extends Component{
    render(){
        return(
            <div>
                <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <h1>{this.props.myTitle}</h1>
                                <p>{this.props.myDescription}</p>
                            </div>
                        </div>
                        <div className="face face2">
                            <h2>{this.props.newTitle}</h2>
                        </div>
                    </div>
            </div>
        )
    }
}


export default Portfolio
