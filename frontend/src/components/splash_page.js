import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/splashpage.css'
class SplashPage extends React.Component{



    render(){
        return (
            <div className="splashpage-main">
                <div className="top">

                <h1 className="header-logo">Pigeon Post</h1>
                </div>
                {/* <br/>
                <br/> */}

                <div className="buttons" >

                <button className="splashbuttons"> <Link className="links" to="users/signup" > 
                            Sign up
                        </Link> 
                </button>
                <br/>
                <br/>
                <button className="splashbuttons" > <Link className="links" to="users/login" > 
                            Log In
                        </Link> 
                </button>
                </div>  
            </div>
        )
    }

}


export default SplashPage


