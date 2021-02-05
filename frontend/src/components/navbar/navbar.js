import React from 'react'

import '../../stylesheets/navbar.css'
import logoblack from '../../images/pigeonpostblack.png'
import logowhite from '../../images/pigeonpostwhite.png'

import { Link } from 'react-router-dom';
// import '../../stylesheets/navbar.css'

class Navbar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
        this.handlelogout = this.handlelogout.bind(this)
    }

    whenFocusOrBlur() {
        const newState = !this.state.show
        this.setState({ show: newState})
    }
    handlelogout(){
        this.props.logout();
        this.setState({show:false})
    }
    render() {
        debugger
        const logStatus = this.props.currentUser ? (<div className="navbar-loggedin">
            <div className="top">
                <img src={logowhite} />

                {/* <h1 className="header-logo">Pigeon Post</h1> */}
            </div>
            <div className="dropdown">
                <h1>Welcome, Dear {this.props.currentUser.usertype}</h1>
                <button onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>{this.props.currentUser.firstname}▼ {this.state.show ? <a className="header-button" onClick={this.handlelogout}>Log Out</a> : null}</button>
            </div>
        </div>) : (<div className="navbar">
            <div className="top">
                <img src={logowhite} />
            </div>
        </div>)
        return (
            <div>
                {logStatus}
            </div>
        )
            
        
    }
}
export default Navbar