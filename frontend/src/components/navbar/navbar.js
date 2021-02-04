import React from 'react'
import '../../stylesheets/navbar.css'
import logoblack from '../../images/pigeonpostblack.png'
import logowhite from '../../images/pigeonpostwhite.png'

import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
    }

    whenFocusOrBlur(e) {
        const newState = !this.state.show
        this.setState({ show: newState })
    }

    render() {

        if(this.props.isloggedin){ 

            return (
                <div className="navbar-loggedin">
             <div className="top">
                <img src={logowhite}  />

            {/* <h1 className="header-logo">Pigeon Post</h1> */}
            </div>
            <div className="dropdown">
            <h1>Welcome, {this.props.currentUser.firstname} || {this.props.currentUser.usertype}</h1>
                    <button onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>email here▼ {this.state.show ? <a className="header-button" onClick={this.props.logout}>Log Out</a> : null}</button>
                </div>
                </div>
            )
        } else {
            return (
                <div className="navbar">
                    <div className="top">
                    <img src={logowhite}  />
                    </div>
                </div>
            )    
        }
    }
}
export default Navbar