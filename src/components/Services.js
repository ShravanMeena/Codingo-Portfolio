import React, { Component } from 'react'
import './css/Services.css'

export class Services extends Component {


    render() {
        return (
            <div className="services">
                <h3>Services</h3>
                <h2>What we offer</h2>
                <div className="row">
                    <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description}/>
                    <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description}/>
                    <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description}/>
                    <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description}/>
                </div>
            </div>
        )
    }
}

const iconObj = [
        {
            icon:<ion-icon name="phone-portrait"></ion-icon>,
            title: 'Responsive',
            description: 'Looks great on any screen size!'
        },
        {
            icon:<ion-icon name="brush"></ion-icon> ,
            title: 'Redesigned',
            description: 'Freshly redesigned for Bootstrap 4'
        },
        {
            icon:<ion-icon name="thumbs-down"></ion-icon>,
            title: 'Favorited',
            description: 'Millions of users Start Bootstrap!'
        },
        {
            icon:<ion-icon name="unlock"></ion-icon>,
            title: 'Question',
            description: 'I mustache you a question...'
        }
]

class Icons extends Component {
    render(){
        return(
            <div>
                <span>{this.props.myIcon}</span>
                <h4>{this.props.myTitle}</h4>
                <p>{this.props.myDescription}}</p>
                </div>
            );
        }
    }

export default Services;
