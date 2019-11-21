import React, { Component } from 'react'
import './css/Navigation.css'

export class Navigation extends Component {

   

    render() {
        
        function togglemenu() {
            document.getElementById('sidebar').classList.toggle('active');
        }

        const sections = ['Home','About','Services','Portfolio','Contact' ];
        const navlinks = sections.map( section => {
                return(
                    <li><a href={'#' + section}>{section}</a></li>
                )
        })

        return (
            <div id="sidebar" onClick={togglemenu}>
                <div class="toggle-btn">
                <ion-icon name="menu"></ion-icon>
                </div>
                <h1 className="logo">{this.props.logoTitle}</h1>
                <ul>
                    {navlinks}
                </ul>
            </div>
    
        )
    }
}

export default Navigation



  
// import React, { Component } from 'react'
// import './css/Navigation.css'

// export class Navigation extends Component {
//     render() {
//         const sections = ['Home','About','Services','Portfolio','Contact' ];
//         const navlinks = sections.map( section => {
//                 return(
//                     <li><a href={'#' + section}>{section}</a></li>
//                 )
//         })
//         return (
//             <div>
//                 <nav>
//                     <h2 className="logo">{this.props.logoTitle}</h2>
//                     <ul>
//                         {navlinks}
//                     </ul>
//                 </nav>
//             </div>
//         )
//     }
// }

// export default Navigation

