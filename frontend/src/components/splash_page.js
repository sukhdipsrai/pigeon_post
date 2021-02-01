import React from 'react'
import {Link} from 'react-router-dom'

class SplashPage extends React.Component{



    render(){
        return (
            <div>
                <h1>This is the splashpage</h1>

                <button> <Link to="users/signup" > 
                            Sign up
                        </Link> 
                </button>

                <button> <Link to="users/login" > 
                            Log In
                        </Link> 
                </button>
            </div>
        )
    }

}


export default SplashPage


