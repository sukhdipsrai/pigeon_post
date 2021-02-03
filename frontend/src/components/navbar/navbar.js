import React from 'react'
import '../../stylesheets/navbar.css'

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
                <div className="navbar">
             <div className="top">

            <h1 className="header-logo">Pigeon Post</h1>
            </div>
            <div className="dropdown">
            <h1>Welcome, {this.props.currentUser.firstname} || {this.props.currentUser.usertype}</h1>
                    <button onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>{this.props.currentUser.email}▼ {this.state.show ? <a className="header-button" onClick={this.props.logout}>Log Out</a> : null}</button>
                </div>
            </div>
        )
        } else {
            return (
             <div className="navbar">
             <div className="top">

            <h1 className="header-logo">Pigeon Post</h1>
            </div>
            </div>
             )    
    }


}

}
export default Navbar