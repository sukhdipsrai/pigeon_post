import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/splashpage.css'
import Footer from './foot';
import splashpaper from '../images/splash-test.png'

// import '../stylesheets/splashpage.css'
class SplashPage extends React.Component{



    render(){
        return (
            <div>
            <div className="splashpage-main">
  

            <div className="left-side">

                <div className="left-side-text">

                <p>PigeonPost is a same-day delivery service that gets your package delivered 
                    to its destination in a timely manner by our Pigeons, who are 
                    native New Yorkers who know their way around the 5 boroughs.</p>
                </div>

                
                <div className="buttons" >
                
                <Link className="links" to="users/signup" >
                    <button className="splashbuttons">  
                            Sign up
                    </button>
                </Link> 
                
                <br/>
                <br/>
                
                <Link className="links" to="users/login" > 
                        <button className="splashbuttons" > 
                            Log In
                        </button>
                </Link> 
                </div>  
            </div>
            <div className="splashpage-right-side" >

                <img src={splashpaper}/>

            </div>
               
            </div> 
            <Footer/>
            </div>
        )
    }

}


export default SplashPage


